import { Metadata } from 'next'

import { LandingFullPage } from '@/components/features/landing/landing-full-page'

export const metadata: Metadata = {
    title: 'Cart Keeper',
    description:
        'Save products from different marketplaces into one simple, private shopping shortlist with the Cart Keeper Chrome extension.',

    alternates: {
        canonical: '/landing',
    },
}

export default function LandingPage() {
    return <LandingFullPage />
}
