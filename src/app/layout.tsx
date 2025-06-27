import "./globals.css";

import { poppins } from "../lib/utils/font";
import { ThemeProvider } from 'next-themes'
import { cn } from "@/lib/utils";
import { MessageButton } from "@/components/ui/message";

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${cn(
                    poppins.variable,
                    "antialiased",
                )}`}
            >
                <ThemeProvider
                    attribute="class"
                    enableSystem
                    defaultTheme="system"
                >
                    {children}
                    <div className="fixed bottom-5 right-5 z-50 bg-foreground/10 p-px ring ring-primary/50 rounded-full shadow-lg">
                        <MessageButton />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
