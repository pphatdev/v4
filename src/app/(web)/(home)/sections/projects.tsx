"use client";

import React from "react";
import ProjectCard from "@/components/ui/project-card";
import { motion } from 'framer-motion';
import { projects as data } from "../data/projects";

const Projects: React.FC = () => {
    return (data.map((project, index) => (
        <ProjectCard key={index} project={project} />
    )))
}

export const ProjectsSection = () => {
    return (
        <section className='mx-auto w-full z-50 my-20'>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 0.9, y: 0, transition: { duration: 0.5, delay: 0.5 * 2 } }
                }}
                initial="hidden"
                animate="visible"
                className="w-full max-w-7xl mx-auto sm:rounded-3xl max-sm:p-0 p-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sticky max-sm:border-y sm:border border-foreground/10 bg-foreground/5 backdrop-blur-[2px]">
                <Projects />
            </motion.div>
        </section>
    )
}
