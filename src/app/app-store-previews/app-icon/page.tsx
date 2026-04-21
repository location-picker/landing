import { Metadata } from 'next'

import { AppIconArtwork } from '@/components/features/app-store-previews/app-store-previews'

export const metadata: Metadata = {
    title: 'App Icon Preview',
    robots: {
        index: false,
        follow: false,
    },
}

export default function AppIconPreviewPage() {
    return (
        <main className="min-h-full overflow-auto bg-neutral-100">
            <AppIconArtwork />
        </main>
    )
}
