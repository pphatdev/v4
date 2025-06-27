"use client";

import { useState, FormEvent, useEffect } from "react";
import { motion } from 'framer-motion';
import { ContactForm, SentChat } from "@/components/ui/contact-form";
import confetti from "canvas-confetti";

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

    const celebrate = () => {
        const end = Date.now() + 3 * 1000; // 3 seconds
        const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

        const frame = () => {
            if (Date.now() > end) return;

            confetti({
                particleCount: 2,
                angle: 60,
                spread: 55,
                startVelocity: 60,
                origin: { x: 0, y: 0.5 },
                colors: colors,
            });
            confetti({
                particleCount: 2,
                angle: 120,
                spread: 55,
                startVelocity: 60,
                origin: { x: 1, y: 0.5 },
                colors: colors,
            });

            requestAnimationFrame(frame);
        };

        frame();
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
            celebrate()

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
            className="relative w-full h-full sm:bg-foreground/5 mx-auto rounded-3xl">

            {submitted ? (
                <SentChat setSubmitted={setSubmitted} />
            ) : (
                <ContactForm
                    formData={formData}
                    formErrors={formErrors}
                    isSubmitting={isSubmitting}
                    error={error}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                />
            )}
        </motion.div>
    );
}
