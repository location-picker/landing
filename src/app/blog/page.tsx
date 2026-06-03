import { Metadata } from 'next'
import Link from 'next/link'

import { articles } from './articles'

const description =
    'Navigation app guides, saved places workflows, and practical notes on using Google Maps, Waze, HERE WeGo, and My Saved Places together.'

export const metadata: Metadata = {
    title: 'Blog | My Saved Places',
    description,
    keywords: [
        'My Saved Places blog',
        'save places app',
        'organize saved places',
        'saved places best practices',
        'navigation app guide',
        'Google Maps vs Waze vs HERE',
        'best navigation app',
        'saved locations app',
    ],
    alternates: {
        canonical: '/blog',
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: 'Blog | My Saved Places',
        description,
        type: 'website',
        locale: 'en_US',
        url: '/blog',
        siteName: 'My Saved Places',
        images: [
            {
                url: '/images/og-preview.jpg',
                width: 1200,
                height: 630,
                alt: 'My Saved Places blog',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Blog | My Saved Places',
        description,
        images: ['/images/og-preview.jpg'],
    },
}

export default function BlogPage() {
    return (
        <main className="min-h-full bg-white px-4 py-10 sm:py-16 md:px-12">
            <section className="mx-auto max-w-250 space-y-6">
                {articles.map(article => (
                    <article
                        key={article.slug}
                        className="space-y-3 border-t border-gray-200 pt-6 first:border-t-0 first:pt-0"
                    >
                        <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                            <span>{article.date}</span>
                            <span aria-hidden="true">/</span>
                            <span>{article.readingTime}</span>
                        </div>

                        <h1 className="text-xl font-bold tracking-tight text-gray-950 sm:text-2xl">
                            <Link href={`/blog/${article.slug}`} className="transition hover:text-[#F97316]">
                                {article.title}
                            </Link>
                        </h1>

                        <p className="max-w-3xl text-sm leading-relaxed text-gray-700 sm:text-base">
                            {article.description}
                        </p>
                    </article>
                ))}
            </section>
        </main>
    )
}
