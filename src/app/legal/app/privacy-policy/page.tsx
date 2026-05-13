import { Metadata } from 'next'

import { PrivacyPolicyApp } from '@/components/features/legal/privacy-policy-app'

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description:
        'Privacy Policy for the My Saved Places app. Learn how the app handles location data, local storage, and optional iCloud synchronization.',
    keywords: [
        'My Saved Places privacy policy',
        'location app privacy policy',
        'map app privacy',
        'iCloud data privacy',
        'location storage privacy',
        'saved places app privacy',
        'iOS location app privacy',
    ],

    alternates: {
        canonical: '/legal/app/privacy-policy',
    },

    robots: {
        index: true,
        follow: true,
    },

    appleWebApp: {
        title: 'My Saved Places',
    },

    openGraph: {
        title: 'Privacy Policy | My Saved Places',
        description:
            'Privacy Policy for the My Saved Places app. Learn how the app handles location data, local storage, and optional iCloud synchronization.',
        type: 'article',
        locale: 'en_US',
        url: '/legal/app/privacy-policy',
        siteName: 'My Saved Places',
        images: [
            {
                url: '/images/og-preview.jpg',
                width: 1200,
                height: 630,
                alt: 'My Saved Places app preview',
            },
        ],
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Privacy Policy | My Saved Places',
        description:
            'Privacy Policy for the My Saved Places app. Learn how the app handles location data, local storage, and optional iCloud synchronization.',
        images: ['/images/og-preview.jpg'],
    },
}

export default function PrivacyPage() {
    return <PrivacyPolicyApp />
}
