import { Metadata } from 'next'

import { PrivacyPolicyApp } from '@/components/features/legal/privacy-policy-app'

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description:
        'Privacy Policy for the My Saved Places app. Learn how the app handles local storage, location access, search requests, coordinates, and third-party map, navigation, and taxi integrations.',
    keywords: [],

    alternates: {
        canonical: '/legal/app/privacy-policy',
    },

    robots: {
        index: false,
        follow: false,
    },

    appleWebApp: {
        title: 'My Saved Places',
    },

    openGraph: {
        title: 'Privacy Policy',
        description:
            'Privacy Policy for the My Saved Places app. Learn how the app handles local storage, location access, search requests, coordinates, and third-party map, navigation, and taxi integrations.',
        type: 'article',
        locale: 'en_US',
        url: '/legal/app/privacy-policy',
        siteName: 'My Saved Places',
    },

    twitter: {
        card: 'summary',
        title: 'Privacy Policy',
        description:
            'Privacy Policy for the My Saved Places app. Learn how the app handles local storage, location access, search requests, coordinates, and third-party map, navigation, and taxi integrations.',
    },
}

export default function PrivacyPage() {
    return <PrivacyPolicyApp />
}
