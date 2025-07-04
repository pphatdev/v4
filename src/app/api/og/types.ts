export interface OGImageParams {
    title?: string;
    subtitle?: string;
    theme?: 'dark' | 'light' | 'purple' | 'green';
    type?: 'default' | 'blog' | 'project';
    author?: string;
    date?: string;
    tags?: string[];
}

export interface Theme {
    bg: string;
    primary: string;
    secondary: string;
    accent: string;
    gradient: string;
}

export const themes: Record<string, Theme> = {
    dark: {
        bg: '#0a0a0a',
        primary: '#ffffff',
        secondary: '#a1a1aa',
        accent: '#3b82f6',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    light: {
        bg: '#ffffff',
        primary: '#0a0a0a',
        secondary: '#71717a',
        accent: '#3b82f6',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    purple: {
        bg: '#1a0a2e',
        primary: '#ffffff',
        secondary: '#c084fc',
        accent: '#a855f7',
        gradient: 'linear-gradient(135deg, #9333ea 0%, #7c3aed 100%)',
    },
    green: {
        bg: '#0f1419',
        primary: '#ffffff',
        secondary: '#86efac',
        accent: '#22c55e',
        gradient: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)',
    },
};

export const defaultParams: OGImageParams = {
    title: 'Leat Sophat',
    subtitle: 'Full-Stack Developer',
    theme: 'dark',
    type: 'default',
    author: 'Leat Sophat',
};
