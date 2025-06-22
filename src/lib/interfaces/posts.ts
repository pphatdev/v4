
export interface Post {
    id: string;
    title: string;
    content: string;
    published: boolean;
    description: string;
    tags: string[];
    createdAt: Date;
    thumbnail: string;
    slug: string;
    authors: { name: string; profile: string; url: string }[];
    [key: string]: unknown;
}