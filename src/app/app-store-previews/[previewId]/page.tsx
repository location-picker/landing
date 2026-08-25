import { Metadata } from 'next'

import { AppStore } from '@/components/features/app-store-previews/app-store'

type PageProps = {
    params: Promise<{
        previewId: string
    }>
}

export const metadata: Metadata = {
    title: 'App Store Preview',
    robots: {
        index: false,
        follow: false,
    },
}

export default async function AppStorePreviewPage({ params }: PageProps) {
    const { previewId } = await params

    return <AppStore previewId={previewId} />
}
