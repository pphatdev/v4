import type { Metadata } from 'next';
import HomeHeroSection from "@/app/(web)/(home)/sections/hero-section";
import { ProjectsSection } from './sections/projects';
import { metadata as meta } from './data/meta';
import { AboutTimeline } from './sections/timeline';
import { Footer } from '@/components/ui/footer';
import { AboutMeSection } from './sections/home-aboutme';
import { ContactBar } from './sections/contact-bar';

export const metadata: Metadata = meta

export default function HomePage() {

    return (
        <>
            <div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(to_bottom,transparent_0%,hsl(var(--background))_90%),radial-gradient(ellipse_at_center,transparent_40%,hsl(var(--primary-foreground))_95%)]"></div>
            <main className="max-lg:pt-0 h-full relative text-foreground min-h-screen">
                <HomeHeroSection />
                <AboutMeSection />
                <AboutTimeline />
                <ProjectsSection />
            </main>
            <Footer />
        </>
    );
}