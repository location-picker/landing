import { CircleGaugeIcon } from 'lucide-react'

import Image from 'next/image'
import Link from 'next/link'

type Preview = {
    id: string
    title: string
    description: string
    screenshot: string
    screenshotAlt: string
    tone: 'map' | 'save' | 'saved' | 'navigate' | 'settings'
}

export const appStorePreviews: Preview[] = [
    {
        id: '1',
        title: 'Search places',
        description: 'Search places by coordinates, address, or name',
        screenshot: '/images/screenshots/home-portrait.png',
        screenshotAlt: 'My Saved Places map screen',
        tone: 'map',
    },
    {
        id: '2',
        title: 'Start navigation',
        description: 'Open a route or share any saved location',
        screenshot: '/images/screenshots/google-portrait.png',
        screenshotAlt: 'My Saved Places navigation app screen',
        tone: 'navigate',
    },
    {
        id: '3',
        title: 'Save any places',
        description: 'Add any location in just a few seconds',
        screenshot: '/images/screenshots/save-portrait.png',
        screenshotAlt: 'My Saved Places save screen',
        tone: 'save',
    },
    {
        id: '4',
        title: 'Organize places',
        description: 'Create lists and pin saved places',
        screenshot: '/images/screenshots/saved-portrait.png',
        screenshotAlt: 'My Saved Places saved place screen',
        tone: 'saved',
    },
    {
        id: '5',
        title: 'Browse your list',
        description: 'Return to saved locations without searching',
        screenshot: '/images/screenshots/saved-list-portrait.png',
        screenshotAlt: 'My Saved Places saved list screen',
        tone: 'saved',
    },
    {
        id: '6',
        title: 'Pick favorite apps',
        description: 'Choose maps, navigation, or taxi apps',
        screenshot: '/images/screenshots/settings-apps-portrait.png',
        screenshotAlt: 'My Saved Places favorite apps settings screen',
        tone: 'settings',
    },
]

const getPreview = (id: string) => appStorePreviews.find(preview => preview.id === id)

const toneAccents: Record<Preview['tone'], string> = {
    map: 'rgba(34,197,94,0.2)',
    save: 'rgba(249,115,22,0.28)',
    saved: 'rgba(34,197,94,0.2)',
    navigate: 'rgba(59,130,246,0.18)',
    settings: 'rgba(245,158,11,0.22)',
}

const Background = ({ tone }: { tone: Preview['tone'] }) => {
    return (
        <>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(255,132,31,0.24),transparent_34%),radial-gradient(circle_at_90%_28%,rgba(255,210,132,0.28),transparent_30%),linear-gradient(160deg,#fffaf2_0%,#ffffff_48%,#fff1df_100%)]" />
            <div
                className="absolute inset-0 bg-[linear-gradient(rgba(17,24,39,0.52)_1px,transparent_1px),linear-gradient(90deg,rgba(17,24,39,0.52)_1px,transparent_1px)] bg-size-[72px_72px] opacity-[0.08]"
                style={{ backgroundColor: toneAccents[tone] }}
            />
            <div className="absolute top-144 -left-28 h-170 w-170 rounded-full border-46 border-orange-200/35" />
            <div className="absolute -right-46 bottom-20 h-190 w-190 rounded-full border-54 border-orange-300/25" />
        </>
    )
}

export const AppIconArtwork = () => {
    return (
        <section aria-label="iOS app icon preview" className="h-258 w-258 bg-black p-1">
            <div className="relative flex h-256 w-5xl items-center justify-center overflow-hidden bg-white text-gray-950">
                {/* <Image
                    src="/images/ios-light.png"
                    alt=""
                    fill
                    priority
                    sizes="1024px"
                    className="absolute inset-0 object-cover opacity-60"
                /> */}

                <div className="relative z-10 flex h-full w-full items-center justify-center">
                    <CircleGaugeIcon size={688} strokeWidth={1} color="#000" fill="#fff" />
                </div>
            </div>
        </section>
    )
}

export const SplashArtwork = () => {
    return (
        <section aria-label="App splash preview" className="h-[2786px] w-[1292px] bg-black p-1">
            <div className="relative flex h-[2778px] w-[1284px] items-center justify-center overflow-hidden bg-white">
                <CircleGaugeIcon size={688} strokeWidth={1} color="#000" fill="#fff" />
                {/* <div className="absolute top-[-262px] right-[-66px] h-[918px] w-[918px] rounded-full bg-orange-200" /> */}
                {/* <div className="absolute bottom-[-361px] left-[-131px] h-[853px] w-[853px] rounded-full bg-orange-300/35" /> */}

                {/* <div className="relative flex min-h-[984px] w-full items-center justify-center px-[105px]">
                    <div className="w-[918px] text-center text-[66px] leading-[92px] font-bold text-gray-900 uppercase">
                        My <span className="text-orange-500">Saved</span> Places
                    </div>
                </div> */}
            </div>
        </section>
    )
}

const PhoneScreenshot = ({ preview }: { preview: Preview }) => {
    return (
        <div className="relative mt-14 h-518 w-262">
            <div className="absolute inset-x-8 top-18 h-500 rounded-[168px] bg-orange-400/25 blur-3xl" />
            <div className="absolute inset-0 rounded-[128px] bg-gray-950/10 blur-xl" />
            <Image
                src={preview.screenshot}
                alt={preview.screenshotAlt}
                fill
                priority={preview.id === '1'}
                sizes="1048px"
                className="relative object-contain drop-shadow-[0_52px_76px_rgba(15,23,42,0.26)]"
            />
        </div>
    )
}

export const AppStorePreviewArtwork = ({ preview }: { preview: Preview }) => {
    return (
        <section
            aria-label={`App Store preview ${preview.id}`}
            className="relative h-699 w-322.5 overflow-hidden bg-[#fff8ef] text-gray-950"
        >
            <Background tone={preview.tone} />

            <div className="relative z-10 flex h-full flex-col items-center px-28 pt-44">
                <div className="text-center">
                    <h1 className="mx-auto max-w-5xl text-[104px] leading-[0.96] font-black tracking-normal">
                        {preview.title}
                    </h1>
                    <p className="mx-auto mt-7 max-w-195 text-[54px] leading-[1.08] font-bold text-gray-600">
                        {preview.description}
                    </p>
                </div>

                <PhoneScreenshot preview={preview} />
            </div>
        </section>
    )
}

const PreviewThumbnail = ({ preview }: { preview: Preview }) => {
    return (
        <Link href={`/app-store-previews/${preview.id}`} className="group block">
            <div className="h-[447.36px] w-[206.4px] overflow-hidden bg-white shadow-xl ring-1 ring-gray-200 transition duration-200 group-hover:-translate-y-1 group-hover:shadow-2xl">
                <div className="origin-top-left scale-[0.16]">
                    <AppStorePreviewArtwork preview={preview} />
                </div>
            </div>
        </Link>
    )
}

const AppIconThumbnail = () => {
    return (
        <Link href="/app-store-previews/app-icon" className="group block">
            <div className="h-41.25 w-41.25 overflow-hidden bg-white shadow-xl ring-1 ring-gray-200 transition duration-200 group-hover:-translate-y-1 group-hover:shadow-2xl">
                <div className="origin-top-left scale-[0.16]">
                    <AppIconArtwork />
                </div>
            </div>
        </Link>
    )
}

const SplashThumbnail = () => {
    return (
        <Link href="/app-store-previews/splash" className="group block">
            <div className="h-112.25 w-52 overflow-hidden bg-white shadow-xl ring-1 ring-gray-200 transition duration-200 group-hover:-translate-y-1 group-hover:shadow-2xl">
                <div className="origin-top-left scale-[0.16]">
                    <SplashArtwork />
                </div>
            </div>
        </Link>
    )
}

export const AppStorePreviews = () => {
    return (
        <main className="min-h-full bg-neutral-100 p-10">
            <div className="flex flex-wrap items-start gap-4">
                {appStorePreviews.map(preview => (
                    <PreviewThumbnail key={preview.id} preview={preview} />
                ))}
            </div>
            <div className="mt-10">
                <AppIconThumbnail />
            </div>
            <div className="mt-10">
                <SplashThumbnail />
            </div>
        </main>
    )
}

export const AppStorePreviewDetail = ({ id }: { id: string }) => {
    const preview = getPreview(id) ?? appStorePreviews[0]

    return (
        <main className="min-h-full overflow-auto bg-neutral-100">
            <AppStorePreviewArtwork preview={preview} />
        </main>
    )
}
