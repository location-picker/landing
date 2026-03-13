import { Metadata } from 'next'

import { Landing } from '@/components/features/landing/landing'

export const metadata: Metadata = {
    title: 'My Saved Places',
    description: '',
    keywords: [],

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
        description: '',
        type: 'website',
        locale: 'en_US',
        url: '/',
        siteName: 'My Saved Places',
        images: [
            {
                url: '/og-image-home.png',
                width: 1200,
                height: 630,
                alt: 'My Saved Places',
            },
        ],
    },

    twitter: {
        card: 'summary_large_image',
        title: 'My Saved Places',
        description: '',
        images: ['/og-image-home.png'],
    },
}

export default function Home() {
    return <Landing />
}
