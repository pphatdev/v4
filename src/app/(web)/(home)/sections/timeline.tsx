'use client'

import { ExperienceCard } from "@/components/ui/experience-card";
import Image from "next/image";
import React from "react";
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import { NextJSIcon } from "@/components/icons/nextjs";
import { CompaniesProps } from "@/lib/interfaces/skills";
import { Badge } from "@/components/ui/badge";

export const AboutTimeline = () => {

    const experiences: CompaniesProps[] = [
        {
            title: "TURBOTECH CO., LTD",
            logo: "assets/brands/org/turbotech.png",
            works: [
                {
                    date: "Oct 2022 - Present",
                    title: "Senior Frontend Developer",
                    skills: [
                        { title: "Figma", image: "assets/brands/language/figma.svg" },
                        { title: "Laravel", image: "assets/brands/language/laravel.svg" },
                        { title: "React", image: "assets/brands/language/react.svg" },
                        { title: "Next.js", image: "assets/brands/language/nextjs.svg" },
                        { title: "Tailwind CSS", image: "assets/brands/language/tailwind.svg" },
                        { title: "Typescript", image: "assets/brands/language/typescript.svg" },
                        { title: "Node.js", image: "assets/brands/language/nodejs.svg" },
                        { title: "Express.js", image: "assets/brands/language/express.svg" },
                        { title: "PostgreSQL", image: "assets/brands/language/pgsql.svg" },
                        { title: "MySQL", image: "assets/brands/language/mysql.svg" },
                    ]
                },
                {
                    date: "Oct 2020 - Oct 2022",
                    title: "Junior Frontend Developer",
                    skills: [
                        { title: "JavaScript", image: "assets/brands/language/javascript.svg" },
                        { title: "JQuery", image: "assets/brands/language/jquery.svg" },
                        { title: "HTML", image: "assets/brands/language/html.svg" },
                        { title: "CSS", image: "assets/brands/language/css.svg" },
                        { title: "Sass", image: "assets/brands/language/sass.svg" },
                        { title: "Tailwind CSS", image: "assets/brands/language/tailwind.svg" },
                        { title: "Bootstrap", image: "assets/brands/language/bootstrap.svg" },
                        { title: "PHP", image: "assets/brands/language/php.svg" },
                        { title: "MySQL", image: "assets/brands/language/mysql.svg" },
                        { title: "Laravel", image: "assets/brands/language/laravel.svg" },
                    ]
                },
                {
                    date: "Nov 2019 - Oct 2020",
                    title: "Content Writing Officer & UI/UX Designer",
                    skills: [
                        { title: "Ms.Word", image: "assets/brands/office/word.svg" },
                        { title: "Ms.Excel", image: "assets/brands/office/excel.svg" },
                        { title: "Ms.Powerpoint", image: "assets/brands/office/powerpoint.svg" },
                        { title: "Figma", image: "assets/brands/language/figma.svg" },
                        { title: "Adobe XD", image: "assets/brands/language/xd.svg" },
                    ]
                }
            ]
        },
        {
            title: "Nintrea Labs",
            logo: "assets/brands/org/nintrea.png",
            works: [
                {
                    date: "2021 - Present",
                    title: "Creator & Developer of Nintrea",
                    skills: [
                        { title: "Figma", image: "assets/brands/language/figma.svg" },
                        { title: "HTML", image: "assets/brands/language/html.svg" },
                        { title: "CSS", image: "assets/brands/language/css.svg" },
                        { title: "JavaScript", image: "assets/brands/language/javascript.svg" },
                        { title: "Typescript", image: "assets/brands/language/typescript.svg" },
                        { title: "JQuery", image: "assets/brands/language/jquery.svg" },
                        { title: "Tailwind CSS", image: "assets/brands/language/tailwind.svg" },
                        { title: "Sass", image: "assets/brands/language/sass.svg" },
                        { title: "Bootstrap", image: "assets/brands/language/bootstrap.svg" },
                        { title: "React", image: "assets/brands/language/react.svg" },
                        { title: "Next.js", icon: <NextJSIcon className="size-6 stroke-1 text-foreground/90" /> },
                        { title: "Nuxt.js", image: "assets/brands/language/nuxtjs.svg" },
                        { title: "EJS", image: "assets/brands/language/ejs.svg" },
                        { title: "PHP", image: "assets/brands/language/php.svg" },
                        { title: "Laravel", image: "assets/brands/language/laravel.svg" },
                        { title: "Node.js", image: "assets/brands/language/nodejs.svg" },
                        { title: "Express.js", image: "assets/brands/language/express.svg" },
                        { title: "Hono", image: "assets/brands/language/hono.svg" },
                        { title: "PostgreSQL", image: "assets/brands/language/pgsql.svg" },
                        { title: "MySQL", image: "assets/brands/language/mysql.svg" },
                        { title: "Vercel", image: "assets/brands/language/vercel.svg" },
                        { title: "Netlify", image: "assets/brands/language/netlify.svg" },
                        { title: "Worker", image: "assets/brands/language/cloudflare-workers.svg" },
                        { title: "Github", image: "assets/brands/language/github.svg" },
                        { title: "Ubuntu", image: "assets/brands/language/ubuntu.svg" },
                        { title: "Nginx", image: "assets/brands/language/nginx.svg" },
                        { title: "C#", image: "assets/brands/language/csharp.svg" },
                        { title: "C++", image: "assets/brands/language/cpp.svg" },
                        { title: "Python", image: "assets/brands/language/python.svg" },
                        { title: "Git", image: "assets/brands/language/git.svg" },
                        { title: "GitLab", image: "assets/brands/language/gitlab.svg" }
                    ]
                }
            ]
        }
    ]

    return (
        <motion.section
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 0.9, y: 0, transition: { duration: 0.6, delay: 0.2 } }
            }}
            initial="hidden"
            animate="visible"
            className='z-50 relative max-sm:py-0 bg-gradient-to-b from-background to-transparent backdrop-blur-[2px] w-full py-10'>

            <div className="mx-auto max-w-6xl w-full sm:px-4 sm:my-10">

                <Badge variant="outline" className='py-1.5 px-3'>Experience</Badge>
                <h1 className="w-full py-3 px-4 bg-background/80 max-sm:border-b sticky z-50 top-0 max-md:text-3xl text-4xl text-start tracking-tighter font-bold font-sans">
                    Work <span className="text-left bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r from-sky-500 via-teal-500 to-green-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">Experience</span>
                </h1>

                <p className="px-4 mt-2 text-start text-foreground/70">
                    {`With over 5 years of experience in frontend development, I have honed my skills in creating dynamic and user-friendly web applications. My journey has taken me from content writing and UI/UX design to becoming a Senior Frontend Developer at TURBOTECH, where I lead projects that blend technical excellence with innovative design.`}
                </p>

                <div className="w-full sm:pl-7">
                    <div className="relative max-sm:p-4 sm:pb-12 max-sm:border-t sm:ml-[calc(2rem+1px)] mt-10 md:ml-[calc(3.5rem+1px)] lg:ml-[max(calc(14.5rem+1px),calc(100%-68rem))]">
                        <div className="hidden absolute top-3 bottom-0 right-full mr-7 md:mr-[3.25rem] w-px bg-foreground/20 sm:block"> </div>
                        <div className="flex flex-col gap-12">
                            {experiences.map(({ works, title, logo }, index) => (
                                <div key={index} className="flex flex-col">
                                    <div className={cn(`flex gap-2 items-center pb-10 md:-translate-x-16`, index === 0 ? "max-sm:mt-0" : "max-sm:mt-10")}>
                                        {logo && <Image src={`/${logo}`} alt="Avatar" className="object-cover size-6 bg-background border max-sm:rounded-none rounded-md" width={32} height={32} />}
                                        <h2 className="text-xl font-bold text-foreground/80"> {title} </h2>
                                    </div>
                                    <div className="flex flex-col gap-5 space-y-12">
                                        {works.map((item, index) => (
                                            <ExperienceCard
                                                key={index}
                                                date={item.date}
                                                title={item.title}
                                                skills={item.skills}
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}