export const PrivacyPolicyApp = () => {
    return (
        <div className="mx-auto w-full">
            <div className="space-y-8 sm:space-y-10">
                <header className="space-y-3">
                    <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Privacy Policy</h1>

                    <p className="text-sm text-gray-500">Last updated: April 11, 2026</p>

                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        This Privacy Policy applies to the <span className="font-medium">My Saved Places</span>{' '}
                        mobile application.
                    </p>
                </header>

                <section className="space-y-3 sm:space-y-4">
                    <h2 className="text-lg font-semibold sm:text-xl">Overview</h2>

                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        My Saved Places helps you search for places, save locations locally on your device, and open
                        destinations in third-party map, navigation, and taxi apps.
                    </p>

                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        We do not use advertising SDKs, third-party analytics SDKs, or tracking technologies inside the
                        app.
                    </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                    <h2 className="text-lg font-semibold sm:text-xl">Data Storage</h2>

                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        Saved places, lists, and selected app preferences are stored locally on your device.
                    </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                    <h2 className="text-lg font-semibold sm:text-xl">Location Access</h2>

                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        The app may request access to your device&apos;s location to display your current position on the
                        map and help you choose places more easily.
                    </p>

                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        Your current location is not used by us for advertising, analytics, or profiling.
                    </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                    <h2 className="text-lg font-semibold sm:text-xl">Search and Coordinates</h2>

                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        When you search for a place in the app, your search query may be sent to our search endpoint or
                        search providers to return matching results.
                    </p>

                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        When you request an address for coordinates, the latitude and longitude you provide may be sent
                        to our reverse geocoding endpoint or service providers to return a human-readable address.
                    </p>

                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        When you choose to open a location in a third-party app, the relevant coordinates or destination
                        parameters are passed to that app or its linking URL so the location can be shown there.
                    </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                    <h2 className="text-lg font-semibold sm:text-xl">Third-Party Services</h2>

                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        The app relies on third-party services to display maps, load map tiles and styles, search for
                        places, reverse geocode coordinates, and open external applications selected by the user.
                    </p>

                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        These services may receive technical data necessary to respond to your request, such as IP
                        address, search text, coordinates, and app-opening parameters.
                    </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                    <h2 className="text-lg font-semibold sm:text-xl">External Apps and Brands</h2>

                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        My Saved Places may reference or link to third-party apps and services such as Apple Maps,
                        Google Maps, MAPS.ME, Uber, Waze, Yandex Maps, Yandex Navi, and Yandex Go.
                    </p>

                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        All third-party product names, logos, and trademarks are the property of their respective
                        owners. Their use in the app is for identification and interoperability purposes only and does
                        not imply endorsement, sponsorship, or affiliation.
                    </p>

                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        If you choose to open one of these third-party apps or services, your interaction with that app
                        is governed by its own privacy policy and terms.
                    </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                    <h2 className="text-lg font-semibold sm:text-xl">Data Sharing</h2>

                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        We do not sell your personal data. We only transmit the limited information necessary to fulfill
                        features you actively use, such as place search, reverse geocoding, map display, and opening a
                        destination in a third-party app.
                    </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                    <h2 className="text-lg font-semibold sm:text-xl">Children&apos;s Privacy</h2>

                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        This app is not directed to children under 13, and we do not knowingly collect personal
                        information from children.
                    </p>
                </section>

                <section className="space-y-3 sm:space-y-4">
                    <h2 className="text-lg font-semibold sm:text-xl">Changes to This Policy</h2>

                    <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        We may update this Privacy Policy from time to time. Any changes will be reflected on this
                        page.
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
