import { Theme } from '../types';

interface LayoutProps {
    title: string;
    subtitle: string;
    theme: Theme;
    author?: string;
    date?: string;
    tags?: string[];
}

export const DefaultLayout = ({ title, subtitle, theme }: LayoutProps) => (
    <div
        style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: theme.bg,
            fontSize: 32,
            fontWeight: 600,
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            position: 'relative',
            overflow: 'hidden',
        }}
    >
        {/* Background gradient */}
        <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: theme.gradient,
                opacity: 0.1,
            }}
        />

        {/* Main content */}
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                zIndex: 1,
                padding: '0 80px',
            }}
        >
            <h1
                style={{
                    fontSize: '72px',
                    fontWeight: 800,
                    color: theme.primary,
                    marginBottom: '20px',
                    lineHeight: 1.1,
                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                }}
            >
                {title}
            </h1>

            <p
                style={{
                    fontSize: '32px',
                    color: theme.secondary,
                    marginBottom: '40px',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                }}
            >
                {subtitle}
            </p>

            {/* Decorative elements */}
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                }}
            >
                <div
                    style={{
                        width: '60px',
                        height: '4px',
                        backgroundColor: theme.accent,
                        borderRadius: '2px',
                    }}
                />
                <div
                    style={{
                        fontSize: '24px',
                        color: theme.accent,
                        fontWeight: 600,
                        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    }}
                >
                    sophat.top
                </div>
                <div
                    style={{
                        width: '60px',
                        height: '4px',
                        backgroundColor: theme.accent,
                        borderRadius: '2px',
                    }}
                />
            </div>
        </div>
    </div>
);

export const BlogLayout = ({ title, subtitle, theme, author, date }: LayoutProps) => (
    <div
        style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            backgroundColor: theme.bg,
            position: 'relative',
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        }}
    >
        {/* Left side - Content */}
        <div
            style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '80px',
            }}
        >
            <div
                style={{
                    fontSize: '24px',
                    color: theme.accent,
                    marginBottom: '20px',
                    fontWeight: 600,
                }}
            >
                BLOG POST
            </div>
            <h1
                style={{
                    fontSize: '56px',
                    fontWeight: 800,
                    color: theme.primary,
                    lineHeight: 1.2,
                    marginBottom: '30px',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                }}
            >
                {title}
            </h1>

            <p
                style={{
                    fontSize: '28px',
                    color: theme.secondary,
                    marginBottom: '50px',
                    lineHeight: 1.3,
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                }}
            >
                {subtitle}
            </p>

            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    fontSize: '20px',
                    color: theme.secondary,
                }}
            >
                <span>sophat.top</span>
                <div
                    style={{
                        width: '6px',
                        height: '6px',
                        backgroundColor: theme.accent,
                        borderRadius: '50%',
                    }}
                />
                <span>{author || 'Leat Sophat'}</span>
                {date && (
                    <>
                        <div
                            style={{
                                width: '6px',
                                height: '6px',
                                backgroundColor: theme.accent,
                                borderRadius: '50%',
                            }}
                        />
                        <span>{date}</span>
                    </>
                )}
            </div>
        </div>

        {/* Right side - Decorative */}
        <div
            style={{
                width: '300px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: theme.gradient,
                position: 'relative',
            }}
        >
            <div
                style={{
                    width: '200px',
                    height: '200px',
                    backgroundColor: theme.bg,
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '48px',
                    color: theme.accent,
                    fontWeight: 800,
                }}
            >
                LS
            </div>
        </div>
    </div>
);

export const ProjectLayout = ({ title, subtitle, theme, tags }: LayoutProps) => (
    <div
        style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: theme.bg,
            position: 'relative',
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        }}
    >
        {/* Header */}
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '40px 80px',
                borderBottom: `2px solid ${theme.accent}20`,
            }}
        >
            <div
                style={{
                    fontSize: '24px',
                    color: theme.accent,
                    fontWeight: 600,
                }}
            >
                PROJECT SHOWCASE
            </div>
            <div
                style={{
                    fontSize: '20px',
                    color: theme.secondary,
                }}
            >
                sophat.top
            </div>
        </div>

        {/* Main content */}
        <div
            style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 80px',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <h1
                    style={{
                        fontSize: '64px',
                        fontWeight: 800,
                        color: theme.primary,
                        marginBottom: '30px',
                        lineHeight: 1.5,
                        display: '-webkit-box',
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        textAlign: 'center',
                    }}
                >
                    {title}
                </h1>
                <p
                    style={{
                        fontSize: '32px',
                        color: theme.secondary,
                        marginBottom: '50px',
                        lineHeight: 1.3,
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                    }}
                >
                    {subtitle}
                </p>

                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '20px',
                        flexWrap: 'wrap',
                    }}
                >
                    {(tags || ['React', 'Next.js', 'TypeScript']).slice(0, 4).map((tech, index) => (
                        <div
                            key={tech}
                            style={{
                                padding: '12px 24px',
                                backgroundColor: theme.accent + '20',
                                color: theme.accent,
                                borderRadius: '8px',
                                fontSize: '18px',
                                fontWeight: 600,
                            }}
                        >
                            {tech}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);