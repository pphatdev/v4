"use client";

import React, { useEffect, useState } from "react";
import ProjectCard from "@/components/ui/project-card";
import { motion } from 'framer-motion';
import { Project } from "@/lib/interfaces/projects";
import { ApiResponse } from "@/lib/interfaces/api-response";

const Projects: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://api.sophat.top/api/v1/projects');

                if (!response.ok) {
                    throw new Error(`Failed to fetch projects: ${response.status}`);
                }

                const data: ApiResponse = await response.json();

                if (data.success && data.result) {
                    setProjects(data.result);
                } else {
                    throw new Error('Invalid API response format');
                }
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to fetch projects');
                console.error('Error fetching projects:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) {
        return (
            <div className="w-full max-w-6xl mx-auto max-sm:p-0 px-4 pb-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
                {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="h-64 bg-gray-200 animate-pulse rounded-lg"></div>
                ))}
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-full max-w-6xl mx-auto max-sm:p-0 px-4 pb-16 text-center">
                <p className="text-red-500">Error loading projects: {error}</p>
            </div>
        );
    }

    return (
        <div className="w-full max-w-6xl mx-auto max-sm:p-0 px-4 pb-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-7 stick">
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
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
            animate="visible" className='mx-auto w-full z-50 my-20'>
            <div
                className="w-full mx-auto max-sm:p-0 z-50 p-5 gap-4 sticky shadow-2xl shadow-primary/5 bg-card backdrop-blur-[2px]">
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: -20 },
                        visible: { opacity: 0.9, y: 0, transition: { duration: 0.6, delay: 0.2 } }
                    }}
                    initial="hidden"
                    animate="visible"
                    className="w-full py-3 px-4 mb-10 mx-auto text-start max-w-6xl z-50 tracking-tighter font-sans">

                    <h1 className="w-full py-3 mx-auto text-start max-w-6xl z-50 max-md:text-3xl text-4xl tracking-tighter font-bold font-sans">
                        I've been building <span className="text-left bg-background bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r from-sky-500 via-teal-500 to-green-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">a lot of things </span>
                    </h1>
                    <p> {`My tech stack includes modern frameworks, languages, and development tools that enable me to build efficient and scalable applications.`} </p>
                </motion.div>
                <Projects />
            </div>
        </motion.section>
    )
}
