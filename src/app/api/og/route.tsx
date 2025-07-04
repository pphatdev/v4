import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';
import { themes, defaultParams } from './types';
import { DefaultLayout, BlogLayout, ProjectLayout } from './layouts';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);

        // Get parameters from query string
        const title = searchParams.get('title') || defaultParams.title!;
        const subtitle = searchParams.get('subtitle') || defaultParams.subtitle!;
        const theme = searchParams.get('theme') || defaultParams.theme!;
        const type = searchParams.get('type') || defaultParams.type!;
        const author = searchParams.get('author') || defaultParams.author!;
        const date = searchParams.get('date') || '';
        const tagsParam = searchParams.get('tags') || '';
        const tags = tagsParam ? tagsParam.split(',').map(tag => tag.trim()) : [];

        const currentTheme = themes[theme as keyof typeof themes] || themes.dark;

        // Select layout based on type
        let selectedLayout;

        switch (type) {
            case 'blog':
                selectedLayout = BlogLayout({
                    title,
                    subtitle,
                    theme: currentTheme,
                    author,
                    date
                });
                break;
            case 'project':
                selectedLayout = ProjectLayout({
                    title,
                    subtitle,
                    theme: currentTheme,
                    tags
                });
                break;
            default:
                selectedLayout = DefaultLayout({
                    title,
                    subtitle,
                    theme: currentTheme
                });
                break;
        }

        return new ImageResponse(selectedLayout, {
            width: 1200,
            height: 630,
        });
    } catch (e: any) {
        console.log(`${e.message}`);
        return new Response(`Failed to generate the image`, {
            status: 500,
        });
    }
}
