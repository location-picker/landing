import { Metadata } from 'next'

import {
    AppStorePreviewDetail,
    appStorePreviews,
} from '@/components/features/app-store-previews/app-store-previews'

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

export const generateStaticParams = () => appStorePreviews.map(preview => ({ previewId: preview.id }))

export default async function AppStorePreviewPage({ params }: PageProps) {
    const { previewId } = await params

    return <AppStorePreviewDetail id={previewId} />
}
