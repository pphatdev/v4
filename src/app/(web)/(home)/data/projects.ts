import { Project } from "@/lib/interfaces/projects";

export const projects: Project[] = [
    {
        id: "1",
        image: "/assets/projects/king-mart.shop.png",
        name: "King Mart eCommerce",
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
        name: "Red Ant Express Cambodia",
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
        name: "eLibrary of Nintrea",
        description: "An educational platform preserving and promoting Khmer language and culture through digital resources. Challenge: Creating an accessible repository for diverse multimedia content (text, images, audio, video) while maintaining cultural authenticity. Solution: Built a comprehensive content management system with intuitive navigation and search functionality. Results: Successfully serves students, parents, and teachers with organized educational materials, contributing to Khmer language preservation.",
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
        name: "Nintrea Website",
        description: "A modern digital library platform revolutionizing online reading experience. Challenge: Building a performant, user-friendly application that could handle extensive book catalogs while providing seamless reading experience. Solution: Developed with Next.js and TypeScript for optimal performance, implemented advanced search functionality and responsive design. Results: Created an intuitive platform that serves as a comprehensive resource for online book discovery and reading, with excellent user engagement metrics.",
        published: true,
        tags: ["NextJs", "TypeScript", "Tailwind CSS"],
        source: [
            { url: "https://github.com/nintrealab/nintrea.website", name: "Live", type: "source" },
            { url: "https://nintrea.top", name: "Live", type: "demo" }
        ],
        authors: [
            { name: "Sophat LEAT", profile: "https://github.com/pphatdev.png", url: "https://pphat.top" },
            { name: "Navy MEAN", profile: "https://github.com/vyniivaa-dev.png", url: "https://github.com/vyniivaa-dev" },
            { name: "Sithuch CHHEM", profile: "https://github.com/sithuch.png", url: "https://github.com/sithuch" }
        ],
        languages: ["NextJs", "TypeScript", "Tailwind CSS"]
    },
    {
        id: "5",
        image: "/assets/projects/elibrary.nintrea.top.png",
        name: "eLibrary of Nintrea (Next Generation)",
        description: "Advanced iteration of the digital library platform with enhanced features and modern architecture. Challenge: Upgrading the existing platform while maintaining data integrity and improving user experience. Solution: Complete rebuild using Next.js and TypeScript with improved performance, better search algorithms, and enhanced UI/UX design. Results: Currently in development phase, featuring advanced book management, improved accessibility, and modern responsive design patterns.",
        published: true,
        tags: ["NextJs", "TypeScript", "Tailwind CSS"],
        source: [
            { url: "https://github.com/nintrealab/elibrary", name: "Live", type: "source" }
        ],
        authors: [
            { name: "Sophat LEAT", profile: "https://github.com/pphatdev.png", url: "https://pphat.top" }
        ],
        languages: ["NextJs", "TypeScript", "Tailwind CSS"]
    },
    {
        id: "6",
        image: "/assets/projects/blog-leatsophat.vercel.app.png",
        name: "Professional Development Blog",
        description: "A knowledge-sharing platform focusing on web development insights and technical expertise. Challenge: Creating an engaging platform to share complex technical concepts in an accessible way. Solution: Built a clean, performant blog using Next.js with optimized content delivery and SEO optimization. Results: Established a growing readership of developers and designers, featuring in-depth articles on modern web technologies, best practices, and industry trends.",
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
    {
        id: "7",
        image: "/assets/projects/maskify.pphat.top.png",
        name: "Maskify - Advanced Image Processing Tool",
        description: "A sophisticated web application for professional image mask generation and manipulation. Challenge: Creating an intuitive tool for complex image processing tasks that typically require desktop software. Solution: Developed a browser-based application with advanced canvas manipulation, real-time preview, and export capabilities using modern web technologies. Results: Successfully launched a production-ready tool used by designers and developers for creating custom image masks with professional-grade output quality.",
        published: true,
        tags: ["NextJs", "TypeScript", "Tailwind CSS"],
        source: [
            { url: "https://github.com/pphatlabs/maskify", name: "Live", type: "source" },
            { url: "https://maskify.pphat.top", name: "Live", type: "demo" }
        ],
        authors: [
            { name: "Sophat LEAT", profile: "https://github.com/pphatdev.png", url: "https://pphat.top" },
            { name: "Sithuch CHHEM", profile: "https://github.com/sithuch.png", url: "https://sithuch.site" },
        ],
        languages: ["NextJs", "TypeScript", "Tailwind CSS"]
    },
]