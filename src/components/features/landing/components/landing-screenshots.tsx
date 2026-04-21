import { useEffect, useState } from 'react'

import Image from 'next/image'

type Modifier = 'portrait' | 'left'
const modifier: Modifier = 'portrait'

const screenshotFlow = ['home', 'google', 'home', 'save', 'saved', 'saved-list', 'preview', 'home', 'settings-apps']

const images = screenshotFlow.map(name => `/images/screenshots/${name}-${modifier}.png`)

export const LandingScreenshots = () => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => (prev + 1) % images.length)
        }, 4000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="relative h-166 w-100 shrink-0">
            {images.map((src, i) => (
                <Image
                    key={`screenshot-${i}`}
                    src={src}
                    alt="App screenshot"
                    fill
                    className={`absolute top-0 left-0 object-contain transition-opacity duration-500 ${
                        i === index ? 'opacity-100' : 'opacity-0'
                    }`}
                    priority={i === 0}
                />
            ))}
        </div>
    )
}
