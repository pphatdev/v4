"use client";

import React from "react";
import ProjectCard from "@/components/ui/project-card";
import { motion } from 'framer-motion';
import { useProjects } from "@/hooks/projects";
import { Badge } from "@/components/ui/badge";

const Projects: React.FC = () => {
    const { projects, loading, error } = useProjects();

    return (
        <div className="w-full max-w-6xl mx-auto max-sm:p-0 px-4 pb-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-7 sticky">
            {loading && <p className="text-center text-foreground/50 col-span-full">Loading projects...</p>}
            {error && <p className="text-center text-destructive col-span-full">Error: {error}</p>}

            {/* If using the custom hook, uncomment the line below */}
            {projects.map((project, index) => (
                <React.Fragment key={index}>
                    <ProjectCard project={project} />
                </React.Fragment>
            ))}
        </div>
    )
}

export const ProjectsSection = () => {
    return (
        <motion.section
            variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                    opacity: 0.9,
                    y: 0,
                    transition: { duration: 0.6, delay: 0.4, staggerChildren: 0.1 }
                }
            }}
            initial="hidden"
            animate="visible" className='mx-auto w-full'>
            <div className="w-full mx-auto max-sm:p-3 max-sm:pb-4 z-[999] p-5 gap-4 sticky shadow-2xl shadow-primary/5 bg-background backdrop-blur-[2px]">
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: -20 },
                        visible: { opacity: 0.9, y: 0, transition: { duration: 0.6, delay: 0.2 } }
                    }}
                    initial="hidden"
                    animate="visible"
                    className="w-full py-3 max-sm:px-0 px-4 mb-10 mx-auto text-start max-w-6xl z-50 font-sans">

                    <Badge variant="outline" className='py-1.5 px-3'>Projects</Badge>
                    <h1 className="w-full py-3 mx-auto text-start max-w-6xl z-50 max-md:text-3xl text-4xl font-bold font-sans">
                        Featured <span className="text-left bg-background bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r from-sky-500 via-teal-500 to-green-500 [text-shadow:0_0_rgba(0,0,0,0.1)]"> Projects </span>
                    </h1>
                    <p> {`Discover my portfolio of innovative web applications, from eCommerce platforms to digital libraries. Each project showcases modern development practices, user-centered design, and technical excellence in solving real-world challenges.`} </p>
                </motion.div>
                <Projects />
            </div>
        </motion.section>
    )
}
