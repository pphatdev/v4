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
            className={cn("col-span-1 sticky max-sm:top-0 top-4 duration-300 hover:translate-y-1 overflow-hidden max-sm:rounded-none max-lg:bg-background bg-foreground/5 group font-sans rounded-[18px] p-4 mb-4 ring-1 max-lg:ring-border ring-foreground/10 hover:ring-primary hover:ring-2 transition-all ease-in-out flex flex-col h-full", className)}
            role="article"
            tabIndex={-1}>

            <Image src={project.image} width={512} height={512} alt={project.title || ""} className="object-cover w-full aspect-video duration-300 transition-all ease-in-out rounded-xl" />

            <header className='mb-2 relative flex pt-4 justify-between items-center'>
                <div className="flex gap-2 items-center">
                    {(project?.tags ?? []).slice(0, 3).map((language, index) => (
                        <Badge key={index} variant={'outline'} className="font-aladin leading-5 rounded-full bg-foreground/5">{language}</Badge>
                    ))}
                </div>

                <div className='bg-foreground/5 ring-1 w-fit ml-auto ring-foreground/10 justify-end flex rounded-full p-1'>
                    {project.source.map((source, index) => (
                        <Link
                            key={index}
                            href={source.url}
                            aria-label={source.type === 'demo' ? 'View live demo' : 'View source code'}
                            title={source.type === 'demo' ? 'View live demo' : 'View source code'}
                            className="flex rounded-full p-2 hover:ring ring-foreground/20 hover:bg-foreground/10 transition-all items-center justify-center">
                            {source.type === 'demo' && <ExternalLinkIcon className="size-4" />}
                            {source.type === 'source' && <GlobeIcon className="size-4" />}
                        </Link>
                    ))}
                </div>
            </header>

            <h2 className="text-lg z-10 font-semibold font-sans tracking-wide line-clamp-1 pb-1">{project.title}</h2>

            {/* <div className="flex z-10 flex-wrap gap-2 my-2">
                {project.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs border border-primary/50">{tag}</Badge>
                ))}
            </div> */}

            <p className='font-normal z-10 line-clamp-2 text-foreground/80'>{project.description}</p>

            <footer className="mt-auto flex justify-between pt-2 z-10">
                <div className='bg-foreground/5 ring-1 w-fit ring-foreground/10 justify-end flex ga rounded-full p-1'>
                    <AvatarCircles numPeople={avatars.length - 4} avatarUrls={avatars} />
                </div>
            </footer>
        </div>
    );
};

export default ProjectCard;