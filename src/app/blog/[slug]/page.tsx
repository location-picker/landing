import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { AppStoreButton } from '@/components/features/landing/components/landing-cta'

import { articles, getArticle } from '../articles'

type ArticlePageProps = {
    params: Promise<{
        slug: string
    }>
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mysavedplaces.com'

export const generateStaticParams = () => articles.map(article => ({ slug: article.slug }))

export const generateMetadata = async ({ params }: ArticlePageProps): Promise<Metadata> => {
    const { slug } = await params
    const article = getArticle(slug)

    if (!article) {
        return {}
    }

    const articleUrl = `/blog/${article.slug}`

    return {
        title: article.title,
        description: article.description,
        keywords: article.keywords,
        alternates: {
            canonical: articleUrl,
        },
        robots: {
            index: true,
            follow: true,
        },
        openGraph: {
            title: article.title,
            description: article.description,
            type: 'article',
            locale: 'en_US',
            url: articleUrl,
            siteName: 'My Saved Places',
            publishedTime: article.publishedTime,
            images: [
                {
                    url: '/images/og-preview.jpg',
                    width: 1200,
                    height: 630,
                    alt: article.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: article.title,
            description: article.description,
            images: ['/images/og-preview.jpg'],
        },
    }
}

export default async function BlogArticlePage({ params }: ArticlePageProps) {
    const { slug } = await params
    const article = getArticle(slug)

    if (!article) {
        notFound()
    }

    const articleUrl = `/blog/${article.slug}`
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: article.title,
        description: article.description,
        image: `${siteUrl}/images/og-preview.jpg`,
        datePublished: article.publishedTime,
        dateModified: article.publishedTime,
        author: {
            '@type': 'Person',
            name: 'My Saved Places founder',
        },
        publisher: {
            '@type': 'Organization',
            name: 'My Saved Places',
            logo: {
                '@type': 'ImageObject',
                url: `${siteUrl}/icons/icon-512.png`,
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${siteUrl}${articleUrl}`,
        },
        keywords: article.keywords.join(', '),
    }

    return (
        <main className="m-auto min-h-full max-w-250 flex-col bg-white px-4 py-10 sm:py-16 md:px-12">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <div className="mx-auto w-full">
                <article className="space-y-5">
                    <header className="space-y-10">
                        <div className="space-y-3">
                            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{article.title}</h1>

                            <p className="text-sm text-gray-500">Last updated: {article.date}</p>
                        </div>

                        <p className="text-sm leading-relaxed text-gray-700 sm:text-base">{article.description}</p>
                    </header>

                    {article.sections.map((section, index) => (
                        <section key={`${article.slug}-${index}`} className="space-y-3 sm:space-y-4">
                            {section.title ? (
                                <h2 className="text-lg font-semibold sm:text-xl">{section.title}</h2>
                            ) : null}

                            {section.paragraphs.map(paragraph => (
                                <p key={paragraph} className="text-sm leading-relaxed text-gray-700 sm:text-base">
                                    {paragraph}
                                </p>
                            ))}
                        </section>
                    ))}

                    <div className="pt-2">
                        <AppStoreButton />
                    </div>
                </article>
            </div>
        </main>
    )
}
