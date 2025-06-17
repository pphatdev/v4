import type { Metadata } from 'next';
import PersonSchema from '@/components/seo/person-schema'

export const metadata: Metadata = {
    title: "About Sophat LEAT | PPhat - Senior Frontend Developer",
    description: "Learn about Sophat LEAT (PPhat), a Senior Front-end Developer at TURBOTECH CO., LTD and Freelance UI/UX Designer based in Phnom Penh, Cambodia.",
    keywords: [
        "Sophat LEAT",
        "PPhat",
        "Senior Frontend Developer",
        "UI/UX Designer",
        "TURBOTECH",
        "Phnom Penh",
        "Cambodia",
        "React Developer",
        "Next.js Developer"
    ],
    authors: [{ name: "Sophat LEAT", url: "https://pphat.top" }],
    creator: "Sophat LEAT",
    publisher: "Sophat LEAT",
    openGraph: {
        title: "About Sophat LEAT | PPhat - Senior Frontend Developer",
        description: "Learn about Sophat LEAT (PPhat), a Senior Front-end Developer at TURBOTECH CO., LTD and Freelance UI/UX Designer.",
        url: "https://pphat.top/about",
        siteName: "PPhat Portfolio",
        type: "profile",
        images: [
            {
                url: "https://pphat.top/assets/images/sophat-leat-profile.jpg",
                width: 1200,
                height: 630,
                alt: "Sophat LEAT - Senior Frontend Developer"
            }
        ],
        locale: "en_US"
    },
    twitter: {
        card: "summary_large_image",
        title: "About Sophat LEAT | PPhat - Senior Frontend Developer",
        description: "Learn about Sophat LEAT (PPhat), a Senior Front-end Developer and UI/UX Designer.",
        images: ["https://pphat.top/assets/images/sophat-leat-profile.jpg"],
        creator: "@pphatdev"
    },
    alternates: {
        canonical: "https://pphat.top/about"
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    }
};

export default function AboutPage() {
    return (
        <>
            <PersonSchema
                name="Sophat LEAT"
                alternateName="PPhat"
                url="https://pphat.top"
                image="https://pphat.top/assets/images/sophat-leat-profile.jpg"
                description="Senior Front-end Developer at TURBOTECH CO., LTD and Freelance UI/UX Designer specializing in React, Next.js, and modern web technologies."
                jobTitle="Senior Frontend Developer"
                worksFor={{
                    name: "TURBOTECH CO., LTD",
                    url: "https://turbotech.com"
                }}
                sameAs={[
                    "https://facebook.com/pphatdev",
                    "https://twitter.com/pphatdev",
                    "https://linkedin.com/company/pphatdev",
                    "https://github.com/pphatdev"
                ]}
                address={{
                    addressLocality: "Phnom Penh",
                    addressCountry: "KH"
                }}
                email="contact@pphat.top"
                telephone="+855-96-918-3363"
            />

            <main className="container mx-auto px-4 py-8">
                <article>
                    <header>
                        <h1 className="text-4xl font-bold mb-4">About Sophat LEAT</h1>
                        <p className="text-xl text-foreground mb-8">
                            Senior Frontend Developer & UI/UX Designer
                        </p>
                    </header>

                    <section className="prose max-w-none">
                        <p>
                            I'm Sophat LEAT, also known as PPhat. I work as a Senior Front-end Developer
                            at TURBOTECH CO., LTD, and as a Freelance UI/UX Designer, specializing in
                            creating exceptional digital experiences.
                        </p>

                        <h2>Professional Experience</h2>
                        <p>
                            With expertise in modern web technologies including React, Next.js, TypeScript,
                            and various UI frameworks, I help businesses build scalable and user-friendly
                            web applications.
                        </p>

                        <h2>Skills & Expertise</h2>
                        <ul>
                            <li>Frontend Development (React, Next.js, TypeScript)</li>
                            <li>UI/UX Design</li>
                            <li>Responsive Web Design</li>
                            <li>Modern CSS Frameworks</li>
                            <li>Performance Optimization</li>
                        </ul>

                        <h2>Contact Information</h2>
                        <p>
                            Based in Phnom Penh, Cambodia, I'm available for freelance projects
                            and consulting opportunities.
                        </p>
                    </section>
                </article>
            </main>
        </>
    );
}