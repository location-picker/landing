import { Metadata } from 'next'

import { AppStorePreviews } from '@/components/features/app-store-previews/app-store-previews'

export const metadata: Metadata = {
    title: 'App Store Previews',
    robots: {
        index: false,
        follow: false,
    },
}

export default function AppStorePreviewsPage() {
    return <AppStorePreviews />
}
