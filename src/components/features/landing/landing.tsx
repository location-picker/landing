'use client'

import { LandingCTA } from './components/landing-cta'
import { LandingNavigators } from './components/landing-navigators'
import { LandingScreenshots } from './components/landing-screenshots'

export const Landing = () => {
    return (
        <main className="wrapper flex min-h-full w-full flex-col items-center justify-center gap-y-12 bg-white px-4 py-12 md:p-12">
            <div className="flex flex-col-reverse items-center gap-12 md:max-w-6xl lg:flex-row lg:items-center lg:gap-16">
                <LandingScreenshots />

                <div className="text-center lg:text-left">
                    <h1 className="mb-6 text-4xl font-extrabold text-gray-950 md:text-6xl">
                        My <span className="text-orange-500">Saved</span> Places
                    </h1>

                    <p className="mb-6 text-lg text-gray-600 md:text-xl">
                        Keep all your favorite locations in one place. Save a location in seconds and navigate instantly
                        using your favorite navigation app.
                    </p>

                    <LandingNavigators />
                    <LandingCTA />
                </div>
            </div>
        </main>
    )
}
