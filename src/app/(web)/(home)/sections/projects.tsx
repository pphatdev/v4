"use client";

import ProjectCard from "@/components/ui/project-card";
import { motion } from 'framer-motion';

export const ProjectsSection = () => {

    const projects = [
        {
            id: "1",
            image: "/assets/projects/king-mart.shop.png",
            title: "King Mart eCommerce",
            description: "KING MART is one-stop shopping for customers, we are committed to establishing retail stores with a digital platform where customers can get high-quality products with competitive price.",
            published: true,
            tags: ["eCommerce", "Laravel", "JavaScript", "Tailwind CSS"],
            source: [
                { url: "https://king-mart.shop", name: "Live", type: "demo" }
            ],
            authors: [
                { name: "Sophat LEAT", profile: "https://github.com/pphatdev.png", url: "https://pphat.top" },
                { name: "Hoeun Pichet", profile: "https://github.com/HoeunPichet.png", url: "https://github.com/HoeunPichet" }
            ],
            languages: ["Laravel", "JavaScript", "Tailwind CSS"]
        },
        {
            id: "2",
            image: "/assets/projects/red-ant-express.com.kh.png",
            title: "Red Ant Express Cambodia",
            description: "Red Ant Express Co., Ltd. was established in 2022 based on the Certificate of Incorporation, dated on 11 January 2022, issued by the Ministry of Commerce. We intend to become the most respected and trustworthy delivery company in Cambodia. ",
            published: true,
            tags: ["eCommerce", "Laravel", "JavaScript", "Tailwind CSS"],
            source: [
                { url: "https://red-ant-express.com.kh", name: "Live", type: "demo" }
            ],
            authors: [
                { name: "Sophat LEAT", profile: "https://github.com/pphatdev.png", url: "https://pphat.top" },
                { name: "Hoeun Pichet", profile: "https://github.com/HoeunPichet.png", url: "https://github.com/HoeunPichet" }
            ],
            languages: ["Laravel", "JavaScript", "Tailwind CSS"]
        },
        {
            id: "3",
            image: "/assets/projects/elibraryofkhmer.blogspot.com.png",
            title: "eLibrary of Nintrea",
            description: "A website that gathers various types of information (text, images, audio, and video) for sharing and supporting the study and teaching of the Khmer language, intended for students, parents, and Khmer language teachers.",
            published: true,
            tags: ["Blogspot", "XML", "JavaScript"],
            source: [
                { url: "https://elibraryofkhmer.blogspot.com", name: "Live", type: "demo" }
            ],
            authors: [
                { name: "Sophat LEAT", profile: "https://github.com/pphatdev.png", url: "https://pphat.top" }
            ],
            languages: ["XML", "JavaScript"]
        },
        {
            id: "4",
            image: "/assets/projects/nintrea.top.png",
            title: "Nintrea Website",
            description: "A website for searching and reading books online. It is a web application that allows users to search for books, read them online. It is designed to be user-friendly and easy to navigate, making it a great resource for anyone looking to read books online.",
            published: true,
            tags: ["NextJs", "JavaScript", "Tailwind CSS"],
            source: [
                { url: "https://github.com/nintrealab/nintrea.website", name: "Live", type: "source" },
                { url: "https://nintrea.top", name: "Live", type: "demo" }
            ],
            authors: [
                { name: "Sophat LEAT", profile: "https://github.com/pphatdev.png", url: "https://pphat.top" },
                { name: "Navy MEAN", profile: "https://github.com/vyniivaa-dev.png", url: "https://github.com/vyniivaa-dev" },
                { name: "Sithuch CHHEM", profile: "https://github.com/sithuch.png", url: "https://github.com/sithuch" }
            ],
            languages: ["NextJs", "JavaScript", "Tailwind CSS"]
        },
        {
            id: "5",
            image: "/assets/projects/elibrary.nintrea.top.png",
            title: "eLibrary of Nintrea (Incoming)",
            description: "A website for searching and reading books online. It is a web application that allows users to search for books, read them online. It is designed to be user-friendly and easy to navigate, making it a great resource for anyone looking to read books online.",
            published: true,
            tags: ["NextJs", "JavaScript", "Tailwind CSS"],
            source: [
                { url: "https://github.com/nintrealab/elibrary", name: "Live", type: "source" }
            ],
            authors: [
                { name: "Sophat LEAT", profile: "https://github.com/pphatdev.png", url: "https://pphat.top" }
            ],
            languages: ["NextJs", "JavaScript", "Tailwind CSS"]
        },
        {
            id: "6",
            image: "/assets/projects/blog-leatsophat.vercel.app.png",
            title: "My Personal Blog",
            description: "A personal blog where I share my thoughts, experiences, and knowledge on various topics related to web development, design, and technology.",
            published: true,
            tags: ["NextJs", "JavaScript", "Tailwind CSS"],
            source: [
                { url: "https://github.com/pphatdev/blog", name: "Live", type: "source" },
                { url: "https://blog-leatsophat.vercel.app", name: "Live", type: "demo" }
            ],
            authors: [
                { name: "Sophat LEAT", profile: "https://github.com/pphatdev.png", url: "https://pphat.top" }
            ],
            languages: ["NextJs", "JavaScript", "Tailwind CSS"]
        },
    ]
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
                {/* <StaggerTestimonials /> */}
                {projects.map((project, index) => (<ProjectCard key={index} project={project} />))}
            </motion.div>
        </section>
    )
}