import { ReactNode } from 'react'

import classNames from 'classnames'
import type { Viewport } from 'next'

import { Roboto } from 'next/font/google'

import { TailwindIndicator } from '@/components/ui/tailwind-indicator'

import './globals.css'

const roboto = Roboto({
    subsets: ['latin', 'cyrillic'],
})

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: 'cover',
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="en" className={classNames('h-full', roboto.className)}>
            <head>
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
                <link rel="apple-touch-icon" href="/icons/icon-192.png" />
            </head>
            <body className="h-full bg-white antialiased">
                <main className="h-full">{children}</main>
                <TailwindIndicator />
            </body>
        </html>
    )
}
