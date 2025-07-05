import { OGImageParams } from '../../app/api/og/types';

/**
 * Generate an Open Graph image URL with the given parameters
 */
export function generateOGImageUrl(params: OGImageParams = {}, baseUrl?: string): string {
    const {
        title,
        subtitle,
        theme = 'dark',
        type = 'default',
        author,
        date,
        tags = [],
    } = params;

    const searchParams = new URLSearchParams();

    if (title) searchParams.set('title', title);
    if (subtitle) searchParams.set('subtitle', subtitle);
    if (theme) searchParams.set('theme', theme);
    if (type) searchParams.set('type', type);
    if (author) searchParams.set('author', author);
    if (date) searchParams.set('date', date);
    if (tags.length > 0) searchParams.set('tags', tags.join(','));

    const base = baseUrl || (typeof window !== 'undefined' ? window.location.origin : '');
    const url = `${base}/api/og?${searchParams.toString()}`;

    return url;
}

/**
 * Pre-defined OG image configurations for common use cases
 */
export const ogImagePresets = {
    /**
     * Default personal/portfolio OG image
     */
    personal: (title?: string, subtitle?: string): OGImageParams => ({
        title: title || 'Leat Sophat',
        subtitle: subtitle || 'Full-Stack Developer',
        theme: 'dark',
        type: 'default',
    }),

    /**
     * Blog post OG image
     */
    blogPost: (title: string, subtitle?: string, date?: string): OGImageParams => ({
        title,
        subtitle: subtitle || 'Read the full article on sophat.top',
        theme: 'dark',
        type: 'blog',
        author: 'Leat Sophat',
        date,
    }),

    /**
     * Project showcase OG image
     */
    project: (title: string, subtitle?: string, tags?: string[]): OGImageParams => ({
        title,
        subtitle: subtitle || 'Check out this project',
        theme: 'dark',
        type: 'project',
        tags: tags || ['React', 'Next.js', 'TypeScript'],
    }),

    /**
     * Light theme variant
     */
    light: (title?: string, subtitle?: string): OGImageParams => ({
        title: title || 'Leat Sophat',
        subtitle: subtitle || 'Full-Stack Developer',
        theme: 'light',
        type: 'default',
    }),

    /**
     * Purple theme variant
     */
    purple: (title?: string, subtitle?: string): OGImageParams => ({
        title: title || 'Leat Sophat',
        subtitle: subtitle || 'Full-Stack Developer',
        theme: 'purple',
        type: 'default',
    }),

    /**
     * Green theme variant
     */
    green: (title?: string, subtitle?: string): OGImageParams => ({
        title: title || 'Leat Sophat',
        subtitle: subtitle || 'Full-Stack Developer',
        theme: 'green',
        type: 'default',
    }),
};

/**
 * Generate meta tags for Open Graph images
 */
export function generateOGMetaTags(params: OGImageParams, baseUrl?: string) {
    const imageUrl = generateOGImageUrl(params, baseUrl);

    return {
        'og:image': imageUrl,
        'og:image:width': '1200',
        'og:image:height': '630',
        'og:image:type': 'image/png',
        'twitter:image': imageUrl,
        'twitter:card': 'summary_large_image',
    };
}
