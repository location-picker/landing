'use client'

import Link from 'next/link'

import { LandingApps } from './components/landing-apps'
import { LandingCTA } from './components/landing-cta'
import { LandingScreenshots } from './components/landing-screenshots'

const LandingHeader = () => {
    return (
        <header className="inset-0 top-0 flex h-16 w-full shrink-0 items-center justify-center px-4 sm:fixed sm:justify-end md:h-20 md:px-12">
            <nav aria-label="Site navigation" className="flex items-center justify-center gap-4 text-sm font-medium">
                <Link href="/why-my-saved-places" className="text-gray-500 transition hover:text-gray-950">
                    About
                </Link>
                <Link href="/legal/app/privacy-policy" className="text-gray-500 transition hover:text-gray-950">
                    Privacy Policy
                </Link>
            </nav>
        </header>
    )
}

export const Landing = () => {
    return (
        <>
            <LandingHeader />
            <main className="wrapper flex min-h-full w-full flex-col items-center justify-center gap-y-12 bg-white px-4 pt-4 pb-12 md:p-12">
                <div className="flex w-full flex-col-reverse items-center gap-12 md:max-w-6xl lg:flex-row lg:items-center lg:gap-16">
                    <LandingScreenshots />

                    <div className="text-center lg:text-left">
                        <h1 className="mb-6 text-4xl font-extrabold text-gray-950 md:text-6xl">
                            My <span className="text-orange-500">Saved</span> Places
                        </h1>

                        <p className="mb-6 text-lg text-gray-600 md:text-xl">
                            Organize locations and save favorite places in seconds. Keep everything in one place and
                            navigate instantly using your favorite app.
                        </p>

                        <LandingApps />
                        <LandingCTA />
                    </div>
                </div>
            </main>
        </>
    )
}
