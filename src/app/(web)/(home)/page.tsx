import type { Metadata } from 'next';
import HomeHeroSection from "@/app/(web)/(home)/sections/hero-section";
import { ProjectsSection } from './sections/projects';

export const metadata: Metadata = {
    title: "Sophat LEAT | PPhat - Senior Frontend Developer & UI/UX Designer",
    description: "I'm Sophat LEAT (PPhat), Senior Front-end Developer at TURBOTECH CO., LTD and Freelance UI/UX Designer. Specializing in React, Next.js, and modern web development.",
    keywords: [
        "Sophat LEAT",
        "PPhat",
        "Senior Frontend Developer",
        "UI/UX Designer",
        "React Developer",
        "Next.js",
        "TypeScript",
        "Web Development",
        "Freelance Designer"
    ],
    authors: [{ name: "Sophat LEAT", url: "https://pphat.top" }],
    creator: "Sophat LEAT",
    openGraph: {
        title: "Sophat LEAT | PPhat - Senior Frontend Developer",
        description: "Senior Front-end Developer at TURBOTECH CO., LTD and Freelance UI/UX Designer specializing in modern web technologies.",
        url: "https://pphat.top",
        siteName: "PPhat Portfolio",
        type: "website",
        images: [
            {
                url: "https://pphat.top/assets/images/og-home.jpg",
                width: 1200,
                height: 630,
                alt: "Sophat LEAT - Senior Frontend Developer Portfolio"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Sophat LEAT | PPhat - Senior Frontend Developer",
        description: "Senior Frontend Developer & UI/UX Designer specializing in React and Next.js",
        creator: "@pphatdev"
    }
};

export default function HomePage() {

    return (
        <>
            <main className="max-lg:pt-0 xl:pt-10 relative bg-background text-foreground min-h-screen flex flex-col">
                <div className="fixed inset-0 z-1 pointer-events-none bg-[linear-gradient(to_bottom,transparent_0%,hsl(var(--primary-foreground))_90%),radial-gradient(ellipse_at_center,transparent_40%,hsl(var(--primary-foreground))_95%)]"></div>

                <HomeHeroSection />
                <ProjectsSection/>
            </main>
        </>
    );
}