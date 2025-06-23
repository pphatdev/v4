import type { Metadata } from 'next';
import HomeHeroSection from "@/app/(web)/(home)/sections/hero-section";
import { ProjectsSection } from './sections/projects';
import { metadata as meta } from './data/meta';
import { AboutTimeline } from './sections/timeline';
import ContactSection from '@/app/(web)/(home)/sections/contact';

export const metadata: Metadata = meta

export default function HomePage() {

    return (
        <main className="max-lg:pt-0 h-full xl:pt-10 flex flex-col relative bg-background text-foreground min-h-screen">
            <div className="absolute inset-0 z-1 pointer-events-none bg-[linear-gradient(to_bottom,transparent_0%,hsl(var(--primary-foreground))_90%),radial-gradient(ellipse_at_center,transparent_40%,hsl(var(--primary-foreground))_95%)]"></div>

            <HomeHeroSection />
            <ProjectsSection/>
            <AboutTimeline />
            <ContactSection/>
        </main>
    );
}