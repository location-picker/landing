export const PrivacyPolicyApp = () => {
    return (
        <div className="mx-auto w-full">
            <div className="space-y-8 sm:space-y-10">
                <header className="space-y-3">
                    <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Privacy Policy</h1>

                    <p className="text-sm text-gray-500">Last updated: May 7, 2026</p>

                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        This Privacy Policy applies to the <span className="font-medium">My Saved Places</span> mobile
                        application.
                    </p>
                </header>

                <section className="space-y-3 sm:space-y-4">
                    <h2 className="text-lg font-semibold sm:text-xl">Overview</h2>

                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        This application respects your privacy. We do not use advertising SDKs, third-party analytics
                        SDKs, or tracking technologies in the mobile app.
                    </p>

                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        Data created while using the app is stored locally on your device and, on supported iOS devices,
                        may be synchronized with your personal iCloud account. Some features you actively use, such as
                        place search, map display, reverse geocoding, and opening a destination in another app, may
                        transmit the minimum necessary search text, coordinates, or technical request data to the
                        relevant service providers.
                    </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                    <h2 className="text-lg font-semibold sm:text-xl">Data Storage</h2>

                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        The app allows users to save locations (&quot;saved places&quot;), organize them into lists,
                        select preferred external apps, and choose an app language. This data is stored locally on your
                        device.
                    </p>

                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        If iCloud synchronization is available and enabled on your device, including when it is enabled
                        by default on supported iOS devices, the app may store this data in your personal iCloud account
                        in order to keep your saved places synchronized across your devices and prevent data loss when
                        reinstalling the app or switching devices. You can turn iCloud Sync off in the app settings.
                    </p>

                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        The developer of this app does not have access to this data.
                    </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                    <h2 className="text-lg font-semibold sm:text-xl">Location Access</h2>

                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        The app may request access to your device&apos;s location in order to display your current
                        position on the map and help you choose places.
                    </p>

                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        Your current device location is used to show your position on the map and help you choose
                        places. We do not upload your current device location to our servers for storage, advertising,
                        analytics, tracking, or profiling. If you choose to search, reverse geocode coordinates, open a
                        destination in another app, or share a location link, the relevant search text or coordinates
                        may be transmitted as needed to complete that request.
                    </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                    <h2 className="text-lg font-semibold sm:text-xl">Search, Maps, and Third-Party Services</h2>

                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        The app uses an API layer operated for My Saved Places to process place search and reverse
                        geocoding requests. This API layer forwards search text or coordinates to a geocoding provider,
                        currently LocationIQ, only to return matching places or human-readable addresses.
                    </p>

                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        The app also loads map styles and map tiles from external map service providers, such as
                        OpenFreeMap, so the map can be displayed.
                    </p>

                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        When you choose to open or share a location using third-party apps or services, such as Apple
                        Maps, Google Maps, Lyft, MAPS.ME, Uber, Waze, Yandex Maps, Yandex Navi, Yandex Go, or
                        OpenStreetMap, the relevant coordinates or destination parameters are passed to that app or
                        service. Their handling of that data is governed by their own privacy policies and terms.
                    </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                    <h2 className="text-lg font-semibold sm:text-xl">Data Sharing</h2>

                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        We do not sell your personal data. We transmit only the limited information necessary to fulfill
                        features you actively use, such as place search, reverse geocoding, map display, iCloud
                        synchronization, and opening or sharing a destination in a third-party app or service.
                    </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                    <h2 className="text-lg font-semibold sm:text-xl">Children&apos;s Privacy</h2>

                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        This app does not knowingly collect personal information from children.
                    </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                    <h2 className="text-lg font-semibold sm:text-xl">Changes to This Policy</h2>

                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        We may update this Privacy Policy in the future. Any changes will be reflected on this page.
                    </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                    <h2 className="text-lg font-semibold sm:text-xl">Contact</h2>

                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        If you have any questions about this Privacy Policy, you can contact us at:
                    </p>

                    <p className="font-medium break-all text-gray-900">oskolsky.maxim@gmail.com</p>
                </section>
            </div>
        </div>
    )
}
