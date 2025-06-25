"use client";

import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ExternalLinkIcon, GlobeIcon } from "lucide-react";
import { Project } from "@/lib/interfaces/projects";
import AvatarCircles from "./avatar-circles";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const ProjectCard: React.FC<{ project: Project, className?: string }> = ({ project, className }) => {
    const avatars = project.authors.map((author) => ({
        imageUrl: author.profile,
        profileUrl: author.url,
        title: author.name,
    }));

    return (
        <div
            className={cn("col-span-1 sticky top-5 duration-300 overflow-hidden p-0.5 max-sm:rounded-none bg-card group font-sans rounded-4xl mb-4 ring-1 ring-border hover:ring-primary/50 hover:ring-2 transition-all ease-in-out flex flex-col h-full", className)}
            role="article"
            tabIndex={-1}>

            <Image src={project.image} width={512} height={512} alt={project.name || ""} className="object-cover w-full aspect-video border duration-300 transition-all ease-in-out rounded-4xl" />

            <div className='bg-background/30 ring-1 w-fit absolute top-4 right-4 ml-auto ring-foreground/10 justify-end flex rounded-full p-1'>
                {project.source.map((source, index) => (
                    <Link
                        key={index}
                        target="_blank"
                        href={source.url}
                        aria-label={source.type === 'demo' ? 'View live demo' : 'View source code'}
                        title={source.type === 'demo' ? 'View live demo' : 'View source code'}
                        className="flex rounded-full p-2 hover:ring ring-foreground/20 hover:bg-background/40 text-foreground/90 hover:text-foreground transition-all items-center justify-center">
                        {source.type === 'demo' && <ExternalLinkIcon className="size-4" />}
                        {source.type === 'source' && <GlobeIcon className="size-4" />}
                    </Link>
                ))}
            </div>

            <h2 className="text-lg px-4 mt-5 z-10 font-semibold font-sans tracking-wide line-clamp-1 pb-1">{project.name}</h2>
            <header className='mb-2 px-4 relative flex justify-between items-center'>
                <div className="flex gap-2 items-center">
                    {(project?.tags ?? []).slice(0, 3).map((language, index) => (
                        <Badge key={index} variant={'outline'} className="font-aladin leading-5 rounded-full bg-foreground/5">{language}</Badge>
                    ))}
                </div>
            </header>

            {/* <div className="flex z-10 flex-wrap gap-2 my-2">
                {project.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs border border-primary/50">{tag}</Badge>
                ))}
            </div> */}

            <p className='font-normal px-4 z-10 line-clamp-2 text-foreground/80'>{project.description}</p>

            <footer className="mt-auto px-4 pb-4 flex justify-between pt-2 z-10">
                <div className='bg-foreground/5 ring-1 w-fit ring-foreground/10 justify-end flex ga rounded-full p-1'>
                    <AvatarCircles numPeople={avatars.length - 4} avatarUrls={avatars} />
                </div>
            </footer>
        </div>
    );
};

export default ProjectCard;