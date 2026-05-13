'use client'

import { useEffect, useState } from 'react'

import Image from 'next/image'

type Modifier = 'portrait' | 'left'
const modifier: Modifier = 'portrait'

const screenshotFlow = ['home', 'google', 'home', 'save', 'saved', 'saved-list', 'preview', 'home', 'settings-apps']

const images = screenshotFlow.map(name => `/images/screenshots/${name}-${modifier}.png`)

export const LandingScreenshots = () => {
    const [index, setIndex] = useState(0)
    const activeImage = images[index]

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => (prev + 1) % images.length)
        }, 4000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="relative h-166 w-100 shrink-0">
            <Image
                key={activeImage}
                src={activeImage}
                alt="App screenshot"
                fill
                className="object-contain"
                priority={index === 0}
                fetchPriority={index === 0 ? 'high' : undefined}
                sizes="400px"
            />
        </div>
    )
}
