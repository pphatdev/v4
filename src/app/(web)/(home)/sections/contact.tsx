"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useState, FormEvent, useEffect } from "react";
import { Send, AlertCircle } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";
import { cn } from "@/lib/utils";
import { LoadingSpinner } from "../../../../components/ui/loading-spinner";
import { motion } from 'framer-motion';

export default function ContactSection() {
    // Form state
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    // Form submission state
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Form validation state
    const [formErrors, setFormErrors] = useState<{
        name?: string;
        email?: string;
        subject?: string;
        message?: string;
    }>({});

    // Clear form errors when user types in a field
    useEffect(() => {
        setFormErrors({});
    }, [formData]);

    const validateForm = (): boolean => {
        const errors: typeof formErrors = {};
        let isValid = true;

        if (!formData.name.trim()) {
            errors.name = "Name is required";
            isValid = false;
        }

        if (!formData.email.trim()) {
            errors.email = "Email is required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email is invalid";
            isValid = false;
        }

        if (!formData.subject.trim()) {
            errors.subject = "Subject is required";
            isValid = false;
        }

        if (!formData.message.trim()) {
            errors.message = "Message is required";
            isValid = false;
        } else if (formData.message.trim().length < 10) {
            errors.message = "Message must be at least 10 characters";
            isValid = false;
        }

        setFormErrors(errors);
        return isValid;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        // Validate the form
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setError(null);

        try {
            // Send the form data to our API endpoint
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Something went wrong. Please try again.');
            }

            // Form submission successful
            setSubmitted(true);

            // Clear form
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: ""
            });
        } catch (err: any) {
            setError(err.message || "Failed to send message. Please try again later.");
            // Scroll to the error message
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 0.9, y: 0, transition: { duration: 0.6, delay: 0.2 } }
            }}
            initial="hidden"
            animate="visible"
            className="max-w-6xl z-50 w-full flex flex-col gap-5 lg:px-4 mx-auto">

            <h1 className="w-full py-3 max-lg:px-4 backdrop-blur-sm sticky z-50 top-0 max-md:text-3xl text-4xl text-start tracking-tighter font-bold font-sans"> Get in <span className="text-left bg-background bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r from-sky-500 via-teal-500 to-green-500 [text-shadow:0_0_rgba(0,0,0,0.1)]"> Touch </span></h1>
            <p> If you have any questions, project inquiries, or just want to say hello, feel free to reach out! I'm always open to discussing new opportunities and collaborations.</p>

            <Card className="overflow-hidden bg-background/80 backdrop-blur-3xl relative rounded-4xl border-border/50 shadow-lg shadow-primary/5">
                <CardContent className="p-6 sm:px-8">
                    {submitted ? (
                        <div className="text-center pb-12 pt-5">
                            <div className="inline-flex items-center justify-center size-20 bg-primary/10 rounded-full text-primary mb-4">
                                <svg className="size-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Message Sent!</h3>
                            <p className="text-muted-foreground mb-2">Thank you for reaching out. Your message has been sent to:</p>
                            <p className="font-medium text-primary mb-6">info.sophat@gmail.com</p>
                            <p className="text-sm text-muted-foreground mb-6">I'll get back to you as soon as possible.</p>
                            <Button className="rounded-full cursor-pointer" onClick={() => setSubmitted(false)}>Send Another Message</Button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <h2 className="text-2xl font-semibold mb-6">Send Me a Message</h2>

                            {error && (
                                <div className="bg-destructive/10 border border-destructive/20 text-destructive p-4 rounded-md mb-6">
                                    {error}
                                </div>
                            )}

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">                                                    <div className="space-y-2">
                                <Label htmlFor="name">Your Name</Label>
                                <Input
                                    id="name"
                                    name="name"
                                    placeholder="John Doe"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={cn(formErrors.name ? "border-destructive ring-primary" : "", "rounded-full bg-transparent")}
                                    aria-invalid={Boolean(formErrors.name)}
                                />
                                {formErrors.name && (
                                    <p className="text-sm text-destructive flex items-center gap-1 mt-1">
                                        <AlertCircle className="h-3 w-3" />
                                        {formErrors.name}
                                    </p>
                                )}
                            </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Your Email</Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="john@example.com"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={cn(formErrors.email ? "border-destructive ring-primary" : "", "rounded-full bg-transparent")}
                                        aria-invalid={Boolean(formErrors.email)}
                                    />
                                    {formErrors.email && (
                                        <p className="text-sm text-destructive flex items-center gap-1 mt-1">
                                            <AlertCircle className="h-3 w-3" />
                                            {formErrors.email}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="subject">Subject</Label>
                                <Input
                                    id="subject"
                                    name="subject"
                                    placeholder="Project Inquiry"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className={cn(formErrors.subject ? "border-destructive ring-primary" : "", "rounded-full bg-transparent")}
                                    aria-invalid={Boolean(formErrors.subject)}
                                />
                                {formErrors.subject && (
                                    <p className="text-sm text-destructive flex items-center gap-1 mt-1">
                                        <AlertCircle className="h-3 w-3" />
                                        {formErrors.subject}
                                    </p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message">Your Message</Label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    placeholder="Hello, I'd like to discuss a project..."
                                    rows={6}
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={cn(formErrors.message ? "border-destructive ring-primary" : "", "rounded-3xl bg-transparent")}
                                    aria-invalid={Boolean(formErrors.message)}
                                />
                                {formErrors.message && (
                                    <p className="text-sm text-destructive flex items-center gap-1 mt-1">
                                        <AlertCircle className="h-3 w-3" />
                                        {formErrors.message}
                                    </p>
                                )}
                            </div>
                            <div className="flex justify-center sm:justify-end">
                                <Button
                                    type="submit"
                                    variant="default"
                                    className="w-full sm:w-auto rounded-full"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <LoadingSpinner className="mr-2 h-4 w-4" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="mr-2 h-4 w-4" />
                                            Send Message
                                        </>
                                    )}
                                </Button>
                            </div>
                        </form>
                    )}
                </CardContent>
                <BorderBeam
                    duration={6}
                    size={400}
                    className="from-transparent via-primary to-transparent"
                />
                <BorderBeam
                    duration={6}
                    delay={3}
                    size={400}
                    className="from-transparent via-pink-500 to-transparent"
                />
            </Card>
        </motion.div>
    );
}
