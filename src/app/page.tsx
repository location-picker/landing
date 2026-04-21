import { Metadata } from 'next'

import { Landing } from '@/components/features/landing/landing'

export const metadata: Metadata = {
    title: 'Cart Keeper',
    description:
        'Save products from different marketplaces into one simple, private shopping shortlist with the Cart Keeper Chrome extension.',
    keywords: [
        'cart keeper',
        'cart picker',
        'shopping extension',
        'chrome shopping extension',
        'save products',
        'marketplace wishlist',
        'shopping shortlist',
        'compare products',
        'online shopping organizer',
    ],

    alternates: {
        canonical: '/',
    },

    robots: {
        index: true,
        follow: true,
    },

    appleWebApp: {
        title: 'Cart Keeper',
    },

    openGraph: {
        title: 'Cart Keeper',
        description:
            'Save products from different marketplaces into one simple, private shopping shortlist with the Cart Keeper Chrome extension.',
        type: 'website',
        locale: 'en_US',
        url: '/',
        siteName: 'Cart Keeper',
        images: [
            {
                url: '/images/screenshots/popup.png',
                width: 296,
                height: 453,
                alt: 'Cart Keeper',
            },
        ],
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Cart Keeper',
        description:
            'Save products from different marketplaces into one simple, private shopping shortlist with the Cart Keeper Chrome extension.',
        images: ['/images/screenshots/popup.png'],
    },
}

export default function Home() {
    return <Landing />
}
