import { AppStoreButton } from '@/components/features/landing/components/landing-cta'

const FEATURES = [
    'Save places from map, search, address, or coordinates',
    'Create one shared list of favorite places across different map, navigation, and taxi apps',
    'Organize locations into lists',
    'Pin frequently used or important places',
    'Open saved spots in Apple Maps, Google Maps, Waze, Uber, Lyft, OpenStreetMap, Yandex apps, Maps.me, and more',
    'Copy or share destination links',
    'Choose up to 4 favorite apps as quick actions',
    'Optional iCloud Sync on iOS',
]

export const WhyMySavedPlaces = () => {
    return (
        <div className="mx-auto w-full">
            <article className="space-y-5">
                <header className="space-y-10">
                    <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Why did I build My Saved Places?</h1>

                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        Maybe this is a problem only I keep running into, but I couldn&apos;t find a simple tool that
                        solved it well. Since I&apos;m an engineer, I decided to try building one myself. That&apos;s
                        how <span className="font-medium">My Saved Places</span> started.
                    </p>
                </header>

                <section className="space-y-3 sm:space-y-4">
                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        There are many apps and services for organizing favorites: notes, articles, videos, audio,
                        bookmarks, and so on. But I couldn&apos;t find a convenient tool for organizing favorite places
                        and locations.
                    </p>

                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        Every major map or navigation app has its own saved places list, and that often works fine
                        inside that specific app. But what if you use several navigation apps?
                    </p>

                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        For example, I use Google Maps for walking or cycling routes, Waze for car navigation, Yandex
                        services when traveling around Eastern Europe, and taxi apps when I need a ride. All of these
                        apps have their own saved places, but they don&apos;t sync with each other.
                    </p>

                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        So you end up duplicating the same locations across different apps, searching for the same place
                        again, copying coordinates, or losing track of important spots.
                    </p>

                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        That&apos;s the problem <span className="font-medium">My Saved Places</span> is trying to solve.
                    </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        My Saved Places is a focused iOS app for saving locations once and opening them later in the app
                        that works best for the moment.
                    </p>

                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        You can search for a place, enter coordinates, or move the map pin manually, then save that
                        location with a name and optionally organize it into a list. Later, you can open the same saved
                        place in Apple Maps, Google Maps, Waze, Uber, Lyft, OpenStreetMap, Yandex Maps, Yandex Navi,
                        Yandex Go, Maps.me, and more.
                    </p>

                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        The app is intentionally lightweight: no user accounts, no complex planning system, no feed.
                        Saved places stay on-device, and iOS users can enable optional iCloud Sync to keep places and
                        lists available across Apple devices.
                    </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                    <h2 className="text-lg font-semibold sm:text-xl">Key Features</h2>

                    <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-700 sm:text-base">
                        {FEATURES.map(feature => (
                            <li key={feature}>{feature}</li>
                        ))}
                    </ul>
                </section>

                <section className="space-y-3 sm:space-y-4">
                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        If this problem feels familiar, or if you often lose track of important places, My Saved Places
                        may make your life a little easier. Especially if you travel a lot, recently moved to a new city
                        or country, spend a lot of time driving, or simply use different navigation apps like I do.
                    </p>

                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        I&apos;d be happy to hear any constructive feedback.
                    </p>
                </section>

                <div className="pt-2">
                    <AppStoreButton />
                </div>
            </article>
        </div>
    )
}
