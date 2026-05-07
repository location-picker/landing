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
        title: 'Privacy Policy',
        description:
            'Privacy Policy for the My Saved Places app. Learn how the app handles location data, local storage, and optional iCloud synchronization.',
        type: 'article',
        locale: 'en_US',
        url: '/legal/app/privacy-policy',
        siteName: 'My Saved Places',
    },

    twitter: {
        card: 'summary',
        title: 'Privacy Policy',
        description:
            'Privacy Policy for the My Saved Places app. Learn how the app handles location data, local storage, and optional iCloud synchronization.',
    },
}

export default function PrivacyPage() {
    return <PrivacyPolicyApp />
}
