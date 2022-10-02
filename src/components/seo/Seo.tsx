import React from 'react';
import { Helmet } from 'react-helmet';

interface MetadataProps {
    description?: string;
    keywords?: string;
    lang?: string;
    title?: string;
}

export const Metadata = ({ description, lang, title, keywords }: MetadataProps): JSX.Element => {
    const pageDesc = description ?? '';
    const pageTitle = title ?? '';
    const pageKeywords = keywords ?? '';
    const pageLang = lang ?? 'en';


    const metaDescription = pageDesc;
    const defaultTitle = pageTitle;;
    const metaKeywords = pageKeywords;

    const meta = [
        {
            name: 'description',
            content: metaDescription
        },
        {
            name: 'keywords',
            content: metaKeywords
        }
    ];

    return (
        <Helmet htmlAttributes={{ lang: pageLang }}>
            <title>{defaultTitle}</title>

            {meta.map(item => (
                <meta name={item.name} content={item.content} key={item.name} />
            ))}
        </Helmet>
    );
};
