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
        id: 'home',
        title: 'My Saved Places',
        description: 'Your place launcher for maps, navigation, and ride apps',
        screenshot: '/images/screenshots/home-portrait.png',
        screenshotAlt: 'My Saved Places map screen',
        tone: 'map',
    },
    {
        id: 'google',
        title: 'Start navigation',
        description: 'Launch routes in your favorite apps',
        screenshot: '/images/screenshots/google-portrait.png',
        screenshotAlt: 'My Saved Places navigation app screen',
        tone: 'navigate',
    },
    {
        id: 'settings-apps',
        title: 'Choose apps',
        description: 'Put Apple Maps, Google Maps, Waze, Uber, and more',
        screenshot: '/images/screenshots/settings-apps-portrait.png',
        screenshotAlt: 'My Saved Places favorite apps settings screen',
        tone: 'settings',
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
        tone: 'save',
    },
    {
        id: 'saved',
        title: 'Browse your places',
        description: 'Find favorite locations without searching again',
        screenshot: '/images/screenshots/saved-portrait.png',
        screenshotAlt: 'My Saved Places saved places screen',
        tone: 'saved',
    },
    {
        id: 'preview',
        title: 'Open place details',
        description: 'Show on map, copy coordinates or edit details',
        screenshot: '/images/screenshots/preview-portrait.png',
        screenshotAlt: 'My Saved Places saved place details screen',
        tone: 'navigate',
    },
]

export const AppStore = ({ previewId }: { previewId: string }) => {
    const preview = appStorePreviews.find(preview => preview.id === previewId) ?? appStorePreviews[0]

    return (
        <section
            aria-label={`App Store preview ${preview.id}`}
            className="relative h-699 w-322.5 overflow-hidden bg-[linear-gradient(180deg,#ffac00_0%,#ff6800_100%)] text-white"
        >
            <div className="relative z-10 flex h-full flex-col items-center py-60">
                <div className="mb-25 text-center">
                    <h1 className="mx-auto mb-8 max-w-5xl text-[112px] leading-26 font-bold">{preview.title}</h1>
                    <p className="mx-auto max-w-195 text-[56px] leading-16 font-bold">{preview.description}</p>
                </div>

                <div className="relative h-518 w-262">
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
            </div>
        </section>
    )
}

export const AppStoreThumbnails = () => {
    return (
        <div className="flex flex-wrap items-start gap-4">
            {appStorePreviews.map(preview => (
                <Link href={`/app-store-previews/${preview.id}`} className="group block" key={preview.id}>
                    <div className="h-[447.36px] w-[206.4px] overflow-hidden bg-white shadow-xl ring-1 ring-gray-200 transition duration-200 group-hover:-translate-y-1 group-hover:shadow-2xl">
                        <div className="origin-top-left scale-[0.16]">
                            <AppStore previewId={preview.id} />
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}
