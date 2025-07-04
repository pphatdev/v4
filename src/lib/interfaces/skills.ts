export interface SkillsType {
    title: string;
    icon?: React.SVGProps<SVGSVGElement>;
    image?: string;
}

export interface WorkExperience {
    date: string;
    title: string;
    skills: SkillsType[];
}

export interface CompaniesProps {
    title: string;
    date?: string;
    logo: string;
    works: WorkExperience[];
}