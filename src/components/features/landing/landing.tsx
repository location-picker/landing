'use client'

import { useEffect, useState } from 'react'

import Image from 'next/image'

import { AppButton, AppButtonProps } from './components/app-button'

type Modifier = 'portrait' | 'left'
const modifier: Modifier = 'portrait'

const images = [
    `/images/screenshots/home-${modifier}.png`,
    `/images/screenshots/save-location-${modifier}.png`,
    `/images/screenshots/google-${modifier}.png`,
    `/images/screenshots/saved-locations-${modifier}.png`,
    `/images/screenshots/open-location-${modifier}.png`,
]

const NAVIGATORS = [
    { id: 'waze', name: 'Waze', icon: '/images/navigators/waze.png' },
    { id: 'google', name: 'Google', icon: '/images/navigators/google.png' },
    { id: 'yandex', name: 'Yandex', icon: '/images/navigators/yandex.png' },
    { id: 'apple', name: 'Apple', icon: '/images/navigators/apple.png' },
]

const CTA_BUTTONS: (AppButtonProps & { id: string })[] = [
    {
        id: 'appstore',
        href: '#',
        icon: '/images/app-button/apple-logo.svg',
        textIcon: '/images/app-button/apple-text.svg',
        alt: 'Download on App Store',
        iconSize: { w: 20, h: 25 },
    },
    {
        id: 'web',
        href: '#',
        icon: '/images/app-button/web-logo.svg',
        textIcon: '/images/app-button/web-text.svg',
        alt: 'Open Web App',
        iconSize: { w: 20, h: 20 },
    },
]

export const Landing = () => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => (prev + 1) % images.length)
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    return (
        <main className="wrapper flex min-h-full w-full flex-col items-center justify-center gap-y-12 bg-white px-4 py-12 md:p-12">
            <div className="flex flex-col items-center gap-12 md:max-w-6xl lg:flex-row lg:items-center lg:gap-16">
                <div className="text-center lg:text-left">
                    <h1 className="mb-6 text-4xl font-extrabold text-gray-950 md:text-6xl">
                        My <span className="text-orange-500">Saved</span> Places
                    </h1>

                    <p className="mb-6 text-lg text-gray-600 md:text-xl">
                        Save places in seconds and open them instantly in your favorite navigator.
                    </p>

                    <div className="mb-10 flex items-center justify-center gap-4 lg:justify-start">
                        {NAVIGATORS.map(nav => (
                            <div key={nav.id} className="group flex flex-col items-center gap-2">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-orange-100 group-hover:shadow-md">
                                    <Image src={nav.icon} width={28} height={28} alt={nav.name} />
                                </div>
                                <span className="text-xs font-semibold text-gray-500">{nav.name}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center gap-4 lg:justify-start">
                        {CTA_BUTTONS.map(({ id, ...btn }) => (
                            <AppButton key={id} {...btn} />
                        ))}
                    </div>
                </div>

                <div className="relative h-166 w-100 shrink-0">
                    {images.map((src, i) => (
                        <Image
                            key={src}
                            src={src}
                            alt="App screenshot"
                            fill
                            className={`absolute top-0 left-0 object-contain transition-opacity duration-1000 ${
                                i === index ? 'opacity-100' : 'opacity-0'
                            }`}
                            priority={i === 0}
                        />
                    ))}
                </div>
            </div>
        </main>
    )
}
