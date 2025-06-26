import React from "react";
import { AlertCircle, Send } from "lucide-react";
import { Label } from "./label";
import { Input } from "./input";
import { cn } from "@/lib/utils";
import { Textarea } from "./textarea";
import { Button } from "./button";
import { LoadingSpinner } from "./loading-spinner";
import { ContactFormProps, SentChatProps } from "@/lib/interfaces/contact-form";
import { ButtonAnimation } from "./button-animation";


export const ContactForm: React.FC<ContactFormProps> = ({
    formData,
    formErrors,
    isSubmitting,
    error,
    handleChange,
    handleSubmit
}) => {

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-sm:gap-4 p-1">
            {error && (
                <div className="bg-destructive/10 border border-destructive/20 text-destructive p-4 rounded-md mb-6">
                    {error}
                </div>
            )}

            <div className="max-sm:px-3 px-6 sm:pt-6">
                <h1 className="max-sm:text-lg text-2xl leading-tight mb-2 font-bold">Get In Touch</h1>
                <p className="max-sm:text-xs text-sm text-foreground/80">
                    If you have any questions, project inquiries, or just want to say hello, feel free to reach out! I'm always open to discussing new opportunities and collaborations.
                </p>
            </div>

            <div className="flex max-sm:px-5 flex-col gap-6 max-sm:gap-4 bg-foreground/5 rounded-3xl sm:bg-background p-6">
                <div className="grid grid-cols-2 gap-4 max-sm:gap-2">
                    <div className="space-y-2">
                        <Label htmlFor="name" className="max-sm:font-normal">Your Name</Label>
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
                        <Label htmlFor="email" className="max-sm:font-normal">Your Email</Label>
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
                    <Label htmlFor="subject" className="max-sm:font-normal">Subject</Label>
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
                    <Label htmlFor="message" className="max-sm:font-normal">Your Message</Label>
                    <Textarea
                        id="message"
                        name="message"
                        placeholder="Hello, I'd like to discuss a project..."
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className={cn(formErrors.message ? "border-destructive ring-primary" : "", "rounded-2xl bg-transparent")}
                        aria-invalid={Boolean(formErrors.message)}
                    />
                    {formErrors.message && (
                        <p className="text-sm text-destructive flex items-center gap-1 mt-1">
                            <AlertCircle className="h-3 w-3" />
                            {formErrors.message}
                        </p>
                    )}
                </div>
                <div className="flex justify-center">
                    {/* <Button
                        type="submit"
                        variant="default"
                        className="w-full sm:w-auto rounded-full"
                        disabled={isSubmitting}
                        <LoadingSpinner className="mr-2 h-4 w-4" />
                        Sending...
                    >
                    </Button> */}
                    {isSubmitting ? (
                        <Button
                            type="submit"
                            variant="default"
                            className="w-fit max-lg:text-center max-md:mt-10 order-1 rounded-full"
                            disabled={isSubmitting}
                        >
                            <LoadingSpinner className="mr-2 h-4 w-4" />
                            Sending...
                        </Button>
                    ) : (
                        <ButtonAnimation type="submit" text="Send Message" className='w-full max-lg:text-center max-md:mt-10 max-sm:order-1 order-0' />
                    )}
                </div>
            </div>
        </form >
    );
};

export const SentChat: React.FC<SentChatProps> = ({
    setSubmitted
}) => {
    return (
        <div className="text-center pb-12 pt-5">
            <div className="inline-flex items-center justify-center size-20 bg-primary/10 rounded-full text-primary mb-4">
                <svg className="size-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Message Sent!</h3>
            <p className="text-muted-foreground mb-2">Thank you for reaching out.<br /> Your message has been sent to:</p>
            <p className="font-medium text-primary mb-6">info.sophat@gmail.com</p>
            <p className="text-sm text-muted-foreground mb-6">I'll get back to you as soon as possible.</p>
            <Button className="rounded-full cursor-pointer" onClick={() => setSubmitted(false)}>Send Another Message</Button>
        </div>
    )
}