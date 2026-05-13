import { Metadata } from 'next'

import { OgPreviewArtwork } from '@/components/features/app-store-previews/app-store-previews'

export const metadata: Metadata = {
    title: 'OG Preview',
    robots: {
        index: false,
        follow: false,
    },
}

export default function OgPreviewPage() {
    return (
        <main className="min-h-full overflow-auto bg-neutral-100">
            <OgPreviewArtwork />
        </main>
    )
}
