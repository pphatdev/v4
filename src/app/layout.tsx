import "./globals.css";

import { poppins } from "../lib/utils/font";
import { ThemeProvider } from 'next-themes'
import { cn } from "@/lib/utils";

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
                </ThemeProvider>
            </body>
        </html>
    );
}
