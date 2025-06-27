export interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export interface ContactFormProps {
    formData: FormData;
    formErrors: Record<string, string>;
    isSubmitting: boolean;
    error: string | null;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface SentChatProps {
    setSubmitted: (value: boolean) => void;
}