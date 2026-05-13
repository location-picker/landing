import { Metadata } from 'next'

import { WhyMySavedPlaces } from '@/components/features/why-my-saved-places/why-my-saved-places'

const description =
    'Why My Saved Places exists: save locations once, organize favorite places, and open them later in Apple Maps, Google Maps, Waze, Uber, Lyft, OpenStreetMap, Yandex apps, Maps.me, and more.'

export const metadata: Metadata = {
    title: 'Why did I build My Saved Places?',
    description,
    keywords: [
        'My Saved Places',
        'save places once',
        'favorite places app',
        'saved locations app',
        'organize favorite places',
        'map app saved places',
        'navigation app favorites',
        'open saved places in Google Maps',
        'open saved places in Waze',
        'open saved places in Apple Maps',
        'open saved places in Uber',
        'open saved places in Lyft',
        'open saved places in taxi apps',
        'OpenStreetMap saved places',
        'Yandex Maps saved places',
        'Maps.me saved places',
        'iOS location organizer',
        'iCloud sync saved places',
    ],

    alternates: {
        canonical: '/why-my-saved-places',
    },

    robots: {
        index: true,
        follow: true,
    },

    appleWebApp: {
        title: 'My Saved Places',
    },

    openGraph: {
        title: 'Why did I build My Saved Places?',
        description,
        type: 'article',
        locale: 'en_US',
        url: '/why-my-saved-places',
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
        title: 'Why did I build My Saved Places?',
        description,
        images: ['/images/og-preview.jpg'],
    },
}

export default function WhyMySavedPlacesPage() {
    return (
        <main className="m-auto min-h-full max-w-250 flex-col bg-white px-4 py-10 sm:py-16 md:px-12">
            <WhyMySavedPlaces />
        </main>
    )
}
