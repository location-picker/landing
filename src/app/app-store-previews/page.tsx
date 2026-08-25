import { Metadata } from 'next'

import { AppStoreThumbnails } from '@/components/features/app-store-previews/app-store'
import { OgThumbnails } from '@/components/features/app-store-previews/og'

export const metadata: Metadata = {
    title: 'App Store Previews',
    robots: {
        index: false,
        follow: false,
    },
}

export default function AppStorePreviewsPage() {
    return (
        <main className="min-h-full space-y-10 bg-neutral-100 p-10">
            <AppStoreThumbnails />
            <OgThumbnails />
        </main>
    )
}
