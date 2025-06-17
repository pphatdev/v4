import { Person, WithContext } from 'schema-dts';

interface PersonSchemaProps {
    name: string;
    alternateName?: string;
    url: string;
    image?: string;
    description?: string;
    jobTitle?: string;
    worksFor?: {
        name: string;
        url?: string;
    };
    sameAs?: string[];
    address?: {
        addressLocality?: string;
        addressCountry?: string;
    };
    email?: string;
    telephone?: string;
}

export default function PersonSchema({
    name,
    alternateName,
    url,
    image,
    description,
    jobTitle,
    worksFor,
    sameAs,
    address,
    email,
    telephone
}: PersonSchemaProps) {
    const personSchema: WithContext<Person> = {
        "@context": "https://schema.org",
        "@type": "Person",
        name,
        ...(alternateName && { alternateName }),
        url,
        ...(image && { image }),
        ...(description && { description }),
        ...(jobTitle && { jobTitle }),
        ...(worksFor && {
            worksFor: {
                "@type": "Organization",
                name: worksFor.name,
                ...(worksFor.url && { url: worksFor.url })
            }
        }),
        ...(sameAs && { sameAs }),
        ...(address && {
            address: {
                "@type": "PostalAddress",
                ...address
            }
        }),
        ...(email && { email }),
        ...(telephone && { telephone })
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(personSchema)
            }}
        />
    );
}