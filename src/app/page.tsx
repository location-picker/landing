import { Metadata } from 'next'

import { Landing } from '@/components/features/landing/landing'

export const metadata: Metadata = {
    title: 'My Saved Places',
    description:
        'Keep all your favorite locations in one place. Save a location in seconds and navigate instantly using your favorite navigation app.',
    keywords: ['my saved places', 'favorite locations', 'saved locations', 'location organizer'],

    alternates: {
        canonical: '/',
    },

    robots: {
        index: true,
        follow: true,
    },

    appleWebApp: {
        title: 'My Saved Places',
    },

    openGraph: {
        title: 'My Saved Places',
        description:
            'Keep all your favorite locations in one place. Save a location in seconds and navigate instantly using your favorite navigation app.',
        type: 'website',
        locale: 'en_US',
        url: '/',
        siteName: 'My Saved Places',
        images: [
            {
                url: '/images/screenshots/home-portrait.png',
                width: 1200,
                height: 630,
                alt: 'My Saved Places',
            },
        ],
    },

    twitter: {
        card: 'summary_large_image',
        title: 'My Saved Places',
        description:
            'Keep all your favorite locations in one place. Save a location in seconds and navigate instantly using your favorite navigation app.',
        images: ['/images/screenshots/home-portrait.png'],
    },
}

export default function Home() {
    return <Landing />
}
