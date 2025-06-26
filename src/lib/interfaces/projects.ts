export interface Project {
    id: string;
    image: string;
    name: string;
    description: string;
    published: boolean;
    tags: string[];
    source: { url: string; name: string; type: string }[];
    authors: { name: string; profile: string; url: string }[];
    languages?: string[];
    [key: string]: unknown;
}