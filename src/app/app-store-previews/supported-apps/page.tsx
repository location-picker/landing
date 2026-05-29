import { Metadata } from 'next'

import { SupportedAppsArtwork } from '@/components/features/app-store-previews/app-store-previews'

export const metadata: Metadata = {
    title: 'Supported Apps Preview',
    robots: {
        index: false,
        follow: false,
    },
}

export default function SupportedAppsPreviewPage() {
    return (
        <main className="min-h-full overflow-auto bg-neutral-100">
            <SupportedAppsArtwork />
        </main>
    )
}
