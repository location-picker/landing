import { CircleGaugeIcon } from 'lucide-react'

import Image from 'next/image'
import Link from 'next/link'

type Preview = {
    id: string
    title: string
    description: string
    screenshot: string
    screenshotAlt: string
    badge?: string
    tone: 'map' | 'save' | 'saved' | 'navigate' | 'settings'
}

export const appStorePreviews: Preview[] = [
    {
        id: 'home',
        title: 'Your place launcher',
        description: 'Open the same spot in maps, navigation, or ride apps',
        screenshot: '/images/screenshots/home-portrait.png',
        screenshotAlt: 'My Saved Places map screen',
        tone: 'map',
    },
    {
        id: 'google',
        title: 'Start navigation',
        description: 'Launch routes in maps, navigation, or ride apps',
        screenshot: '/images/screenshots/google-portrait.png',
        screenshotAlt: 'My Saved Places navigation app screen',
        tone: 'navigate',
    },
    {
        id: 'save',
        title: 'Save any location',
        description: 'Use search, address, coordinates, or the map pin',
        screenshot: '/images/screenshots/save-portrait.png',
        screenshotAlt: 'My Saved Places save screen',
        tone: 'save',
    },
    {
        id: 'save-list',
        title: 'Organize by lists',
        description: 'Group travel spots, routes, recommendations, and plans',
        screenshot: '/images/screenshots/save-list-portrait.png',
        screenshotAlt: 'My Saved Places list selection screen',
        tone: 'saved',
    },
    {
        id: 'save-icon',
        title: 'Add custom icons',
        description: 'Make every saved place easier to recognize',
        screenshot: '/images/screenshots/save-icon-portrait.png',
        screenshotAlt: 'My Saved Places icon selection screen',
        badge: 'NEW',
        tone: 'save',
    },
    {
        id: 'saved',
        title: 'Browse saved places',
        description: 'Find favorite locations without searching again',
        screenshot: '/images/screenshots/saved-portrait.png',
        screenshotAlt: 'My Saved Places saved places screen',
        tone: 'saved',
    },
    {
        id: 'preview',
        title: 'Open place details',
        description: 'Navigate, copy, share, or launch the best app',
        screenshot: '/images/screenshots/preview-portrait.png',
        screenshotAlt: 'My Saved Places saved place details screen',
        tone: 'navigate',
    },
    {
        id: 'settings-apps',
        title: 'Choose favorite apps',
        description: 'Put Apple Maps, Google Maps, Waze, Uber, and more',
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

const supportedApps = [
    { id: 'apple-maps', name: 'Apple Maps', icon: '/images/apps/apple-maps.png', category: 'Maps' },
    { id: 'google-maps', name: 'Google Maps', icon: '/images/apps/google-maps.png', category: 'Maps' },
    { id: 'yandex-maps', name: 'Yandex Maps', icon: '/images/apps/yandex-maps.png', category: 'Maps' },
    { id: 'mapsme', name: 'MAPS.ME', icon: '/images/apps/mapsme.png', category: 'Maps' },
    { id: 'openstreetmap', name: 'OpenStreetMap', icon: '/images/apps/openstreetmap.png', category: 'Maps' },
    { id: 'waze', name: 'Waze', icon: '/images/apps/waze.png', category: 'Navigation' },
    { id: 'here-wego', name: 'HERE WeGo', icon: '/images/apps/here-wego.png', category: 'Navigation' },
    { id: 'yandex-navi', name: 'Yandex Navi', icon: '/images/apps/yandex-navi.png', category: 'Navigation' },
    { id: 'citymapper', name: 'Citymapper', icon: '/images/apps/citymapper.png', category: 'Transit' },
    { id: 'moovit', name: 'Moovit', icon: '/images/apps/moovit.png', category: 'Transit' },
    { id: 'uber', name: 'Uber', icon: '/images/apps/uber.png', category: 'Rides' },
    { id: 'lyft', name: 'Lyft', icon: '/images/apps/lyft.png', category: 'Rides' },
    { id: 'yandex-go', name: 'Yandex Go', icon: '/images/apps/yandex-go.png', category: 'Rides' },
]

const supportedAppGroups = [
    { id: 'maps', title: 'Maps', caption: 'Find and view places', color: 'bg-emerald-500', apps: supportedApps.filter(app => app.category === 'Maps') },
    { id: 'navigation', title: 'Navigation', caption: 'Drive and route faster', color: 'bg-blue-500', apps: supportedApps.filter(app => app.category === 'Navigation') },
    { id: 'transit', title: 'Transit', caption: 'Move through the city', color: 'bg-violet-500', apps: supportedApps.filter(app => app.category === 'Transit') },
    { id: 'rides', title: 'Rides', caption: 'Call a car in one tap', color: 'bg-orange-500', apps: supportedApps.filter(app => app.category === 'Rides') },
]

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
                priority={preview.id === 'home'}
                sizes="1048px"
                className="relative object-contain drop-shadow-[0_52px_76px_rgba(15,23,42,0.26)]"
            />
        </div>
    )
}

const OgBackground = () => {
    return (
        <>
            <div className="absolute inset-0 bg-[linear-gradient(135deg,#f8fafc_0%,#f1f5f9_48%,#fff7ed_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-size-[48px_48px] opacity-45" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_22%,rgba(249,115,22,0.14),transparent_26%),radial-gradient(circle_at_78%_16%,rgba(59,130,246,0.09),transparent_24%),radial-gradient(circle_at_62%_84%,rgba(34,197,94,0.08),transparent_28%)]" />
            <div className="absolute top-16 left-14 h-84 w-84 rounded-full border-[26px] border-orange-200/24" />
            <div className="absolute right-12 bottom-10 h-104 w-104 rounded-full border-[30px] border-slate-300/22" />
        </>
    )
}

export const OgPreviewArtwork = () => {
    return (
        <section
            aria-label="Open Graph preview"
            className="relative h-[630px] w-[1200px] overflow-hidden bg-slate-50 text-gray-950"
        >
            <OgBackground />

            <div className="relative z-10 flex h-full items-center justify-start">
                <div className="relative z-20 w-[760px] pl-[100px]">
                    <h1 className="mb-6 text-[72px] leading-[1.08] font-extrabold tracking-normal whitespace-nowrap text-gray-950">
                        My <span className="text-orange-500">Saved</span> Places
                    </h1>
                    <p className="max-w-[620px] text-[36px] leading-[1.32] font-semibold text-gray-600">
                        Save places once. Open them in any map, navigation, or taxi.
                    </p>
                </div>

                <div className="absolute top-[-100px] right-[-36px] z-10 h-[890px] w-[534px] rotate-[2deg]">
                    <div className="absolute inset-x-10 top-36 h-[650px] rounded-[90px] bg-black/18 blur-3xl" />
                    <Image
                        src="/images/screenshots/home-left.png"
                        alt="My Saved Places app on iPhone"
                        fill
                        priority
                        sizes="534px"
                        className="relative object-contain drop-shadow-[0_28px_44px_rgba(4,31,46,0.22)] saturate-75"
                    />
                </div>
            </div>
        </section>
    )
}

export const SupportedAppsArtwork = () => {
    return (
        <section
            aria-label="Supported apps preview"
            className="relative h-699 w-322.5 overflow-hidden bg-[#fff8ef] text-gray-950"
        >
            <Background tone="navigate" />

            <div className="relative z-10 flex h-full flex-col px-24 pt-34 pb-14">
                <div className="text-center">
                    <h1 className="mx-auto max-w-5xl text-[98px] leading-[0.94] font-black tracking-normal">
                        Every app.
                        <br />
                        One saved place.
                    </h1>
                    <p className="mx-auto mt-7 max-w-215 text-[44px] leading-[1.08] font-bold text-gray-600">
                        Open locations in maps, transit, navigation, or rides.
                    </p>
                </div>

                <div className="mt-11 flex flex-col gap-5">
                    {supportedAppGroups.map(group => (
                        <div key={group.id}>
                            <div className="mb-3 flex items-center gap-4">
                                <div className={['h-4 w-16 rounded-full', group.color].join(' ')} />
                                <div className="text-[30px] leading-none font-black text-gray-950">{group.title}</div>
                                <div className="text-[19px] leading-none font-bold text-gray-500">{group.caption}</div>
                            </div>

                            <div className="space-y-2.5">
                                {group.apps.map(app => (
                                    <div
                                        key={app.id}
                                        className="flex h-22 items-center gap-4 rounded-[24px] bg-white/82 py-2.5 pr-5 pl-2.5 shadow-[0_8px_22px_rgba(15,23,42,0.1)] ring-1 ring-gray-200/75 backdrop-blur"
                                    >
                                        <div className="flex h-17 w-17 shrink-0 items-center justify-center rounded-[18px] bg-gradient-to-br from-white via-white to-orange-50 p-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_7px_16px_rgba(15,23,42,0.1)] ring-1 ring-gray-200/85">
                                            <Image
                                                src={app.icon}
                                                alt={app.name}
                                                width={48}
                                                height={48}
                                                sizes="48px"
                                                className="h-full w-full rounded-[12px] object-contain"
                                            />
                                        </div>
                                        <div className="min-w-0 flex-1 truncate text-[25px] leading-none font-black text-gray-950">
                                            {app.name}
                                        </div>
                                        <div className="rounded-full bg-orange-100 px-4 py-1.5 text-[15px] leading-none font-black text-orange-700">
                                            Open
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export const AppStorePreviewArtwork = ({ preview }: { preview: Preview }) => {
    return (
        <section
            aria-label={`App Store preview ${preview.id}`}
            className="relative h-699 w-322.5 overflow-hidden bg-[#fff8ef] text-gray-950"
        >
            <Background tone={preview.tone} />

            {preview.badge && (
                <div className="absolute top-28 right-24 z-20 rounded-full bg-orange-500 px-8 py-3 text-[30px] leading-none font-black tracking-[0.08em] text-white shadow-[0_16px_30px_rgba(249,115,22,0.25)]">
                    {preview.badge}
                </div>
            )}

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

const SupportedAppsThumbnail = () => {
    return (
        <Link href="/app-store-previews/supported-apps" className="group block">
            <div className="h-[447.36px] w-[206.4px] overflow-hidden bg-white shadow-xl ring-1 ring-gray-200 transition duration-200 group-hover:-translate-y-1 group-hover:shadow-2xl">
                <div className="origin-top-left scale-[0.16]">
                    <SupportedAppsArtwork />
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

const OgPreviewThumbnail = () => {
    return (
        <Link href="/app-store-previews/og" className="group block">
            <div className="h-[100.8px] w-[192px] overflow-hidden bg-white shadow-xl ring-1 ring-gray-200 transition duration-200 group-hover:-translate-y-1 group-hover:shadow-2xl">
                <div className="origin-top-left scale-[0.16]">
                    <OgPreviewArtwork />
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
                <SupportedAppsThumbnail />
            </div>
            <div className="mt-10">
                <AppIconThumbnail />
            </div>
            <div className="mt-10">
                <SplashThumbnail />
            </div>
            <div className="mt-10">
                <OgPreviewThumbnail />
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
