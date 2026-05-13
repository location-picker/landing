'use client'

import { useEffect, useRef, useState } from 'react'

import Image from 'next/image'

type Modifier = 'portrait' | 'left'
const modifier: Modifier = 'portrait'

const screenshotFlow = ['home', 'google', 'home', 'save', 'saved', 'saved-list', 'preview', 'home', 'settings-apps']

const images = screenshotFlow.map(name => `/images/screenshots/${name}-${modifier}.png`)

type ScreenshotLayer = {
    id: number
    src: string
    visible: boolean
}

export const LandingScreenshots = () => {
    const indexRef = useRef(0)
    const layerIdRef = useRef(0)
    const [layers, setLayers] = useState<ScreenshotLayer[]>([
        {
            id: layerIdRef.current,
            src: images[0],
            visible: true,
        },
    ])

    useEffect(() => {
        const interval = setInterval(() => {
            indexRef.current = (indexRef.current + 1) % images.length
            layerIdRef.current += 1

            const nextLayer: ScreenshotLayer = {
                id: layerIdRef.current,
                src: images[indexRef.current],
                visible: false,
            }

            setLayers(prev => [nextLayer, ...prev.map(layer => ({ ...layer, visible: false }))])

            requestAnimationFrame(() => {
                setLayers(prev => prev.map((layer, layerIndex) => ({ ...layer, visible: layerIndex === 0 })))
            })
        }, 4000)

        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLayers(prev => (prev.length > 1 ? prev.slice(0, 1) : prev))
        }, 1000)

        return () => clearTimeout(timeout)
    }, [layers])

    return (
        <div className="relative h-166 w-100 shrink-0">
            {layers.map((layer, layerIndex) => (
                <Image
                    key={layer.id}
                    src={layer.src}
                    alt={layerIndex === 0 ? 'App screenshot' : ''}
                    fill
                    aria-hidden={layerIndex !== 0}
                    className={[
                        'object-contain transition-opacity duration-900 ease-in-out',
                        layer.visible ? 'opacity-100' : 'opacity-0',
                    ].join(' ')}
                    priority={layer.id === 0}
                    fetchPriority={layer.id === 0 ? 'high' : undefined}
                    sizes="400px"
                />
            ))}
        </div>
    )
}
