import { Metadata } from 'next'

import { SplashArtwork } from '@/components/features/app-store-previews/app-store-previews'

export const metadata: Metadata = {
    title: 'Splash Preview',
    robots: {
        index: false,
        follow: false,
    },
}

export default function SplashPreviewPage() {
    return (
        <main className="min-h-full overflow-auto bg-neutral-100">
            <SplashArtwork />
        </main>
    )
}
