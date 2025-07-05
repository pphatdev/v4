# Open Graph Image API

This API generates dynamic Open Graph images for your website. It supports multiple layouts, themes, and customization options.

## Usage

The API is available at `/api/og` and accepts the following query parameters:

### Basic Usage

```
/api/og?title=Your Title&subtitle=Your Subtitle
```

### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `title` | string | "Leat Sophat" | Main title text |
| `subtitle` | string | "Full-Stack Developer" | Subtitle text |
| `theme` | string | "dark" | Color theme: `dark`, `light`, `purple`, `green` |
| `type` | string | "default" | Layout type: `default`, `blog`, `project` |
| `author` | string | "Leat Sophat" | Author name (for blog layout) |
| `date` | string | - | Date string (for blog layout) |
| `tags` | string | - | Comma-separated tags (for project layout) |

## Examples

### Default Layout
```
/api/og?title=Welcome to My Site&subtitle=Full-Stack Developer
```

### Blog Post Layout
```
/api/og?type=blog&title=My Blog Post&subtitle=This is an awesome article&date=2025-01-01&author=Leat Sophat
```

### Project Layout
```
/api/og?type=project&title=My Project&subtitle=A cool web application&tags=React,Next.js,TypeScript
```

### Different Themes
```
/api/og?theme=light&title=Light Theme
/api/og?theme=purple&title=Purple Theme
/api/og?theme=green&title=Green Theme
```

## Using in Next.js Metadata

### App Router (app directory)

```tsx
import { Metadata } from 'next';
import { generateOGImageUrl, ogImagePresets } from '@/lib/utils/og-image';

export const metadata: Metadata = {
  title: 'My Page',
  description: 'Page description',
  openGraph: {
    title: 'My Page',
    description: 'Page description',
    images: [
      {
        url: generateOGImageUrl(ogImagePresets.personal('My Page', 'Custom subtitle')),
        width: 1200,
        height: 630,
        alt: 'My Page',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [generateOGImageUrl(ogImagePresets.personal('My Page', 'Custom subtitle'))],
  },
};
```

### Dynamic Metadata

```tsx
import { generateOGImageUrl, ogImagePresets } from '@/lib/utils/og-image';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // Fetch your data
  const post = await getPost(params.slug);
  
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: generateOGImageUrl(ogImagePresets.blogPost(
            post.title,
            post.excerpt,
            post.publishedAt
          )),
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}
```

## Using the Utility Functions

The package includes utility functions to make it easier to generate OG images:

### generateOGImageUrl

```tsx
import { generateOGImageUrl } from '@/lib/utils/og-image';

const imageUrl = generateOGImageUrl({
  title: 'My Title',
  subtitle: 'My Subtitle',
  theme: 'dark',
  type: 'blog'
});
```

### Presets

```tsx
import { ogImagePresets } from '@/lib/utils/og-image';

// Personal/Portfolio
const personalImage = ogImagePresets.personal('John Doe', 'Developer');

// Blog Post
const blogImage = ogImagePresets.blogPost('My Post', 'Great content', '2025-01-01');

// Project
const projectImage = ogImagePresets.project('My App', 'Description', ['React', 'TypeScript']);

// Themed variants
const lightImage = ogImagePresets.light('Title', 'Subtitle');
const purpleImage = ogImagePresets.purple('Title', 'Subtitle');
const greenImage = ogImagePresets.green('Title', 'Subtitle');
```

### Meta Tags Generation

```tsx
import { generateOGMetaTags, ogImagePresets } from '@/lib/utils/og-image';

const metaTags = generateOGMetaTags(
  ogImagePresets.blogPost('My Post', 'Description'),
  'https://sophat.top'
);

// Returns:
// {
//   'og:image': 'https://sophat.top/api/og?title=My+Post&subtitle=Description&theme=dark&type=blog&author=Leat+Sophat',
//   'og:image:width': '1200',
//   'og:image:height': '630',
//   'og:image:type': 'image/png',
//   'twitter:image': 'https://sophat.top/api/og?title=My+Post&subtitle=Description&theme=dark&type=blog&author=Leat+Sophat',
//   'twitter:card': 'summary_large_image'
// }
```

## Themes

### Dark Theme (default)
- Background: `#0a0a0a`
- Primary text: `#ffffff`
- Secondary text: `#a1a1aa`
- Accent: `#3b82f6`

### Light Theme
- Background: `#ffffff`
- Primary text: `#0a0a0a`
- Secondary text: `#71717a`
- Accent: `#3b82f6`

### Purple Theme
- Background: `#1a0a2e`
- Primary text: `#ffffff`
- Secondary text: `#c084fc`
- Accent: `#a855f7`

### Green Theme
- Background: `#0f1419`
- Primary text: `#ffffff`
- Secondary text: `#86efac`
- Accent: `#22c55e`

## Layout Types

### Default Layout
- Centered title and subtitle
- Decorative elements
- Best for general pages

### Blog Layout
- Left-aligned content
- Author and date information
- Decorative avatar section
- Best for blog posts and articles

### Project Layout
- Header with "PROJECT SHOWCASE" label
- Centered content
- Tech stack tags
- Best for project showcases

## Performance Notes

- Images are generated on-demand using Vercel's Edge Runtime
- Generated images are automatically cached by Vercel's CDN
- The API is optimized for fast response times
- Consider pre-generating images for static content if needed

## Customization

You can extend the API by:

1. Adding new themes in `src/app/api/og/types.ts`
2. Creating new layouts in `src/app/api/og/layouts/index.tsx`
3. Adding new presets in `src/lib/utils/og-image.ts`

## Error Handling

The API includes error handling and will return a 500 status code with an error message if image generation fails. Common issues:

- Invalid parameters
- Text too long for the layout
- Missing required dependencies

## Browser Testing

You can test the API directly in your browser:

```
http://localhost:3000/api/og?title=Test&subtitle=This is a test
```

The API will return a PNG image that you can view directly in the browser.
