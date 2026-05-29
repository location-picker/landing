'use client'

import { useEffect, useState } from 'react'

const COOKIE_CONSENT_STORAGE_KEY = 'my-saved-places-cookie-consent'

export const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY) !== 'accepted')
    }, [])

    const acceptCookies = () => {
        localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, 'accepted')
        setIsVisible(false)
    }

    if (!isVisible) {
        return null
    }

    return (
        <aside
            aria-label="Cookie notice"
            className="fixed inset-x-4 bottom-4 z-50 mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl border border-gray-200 bg-white/95 p-4 text-gray-950 shadow-[0_20px_60px_rgba(15,23,42,0.14)] backdrop-blur sm:flex-row sm:items-center sm:p-5"
        >
            <div className="flex-1">
                <p className="text-sm leading-6 text-gray-600">
                    We use Google Analytics to understand how the site is used and improve My Saved Places.
                </p>
            </div>

            <button
                type="button"
                onClick={acceptCookies}
                className="inline-flex w-full items-center justify-center rounded-lg bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)] active:scale-[0.98] sm:mt-0 sm:w-auto"
            >
                Got it
            </button>
        </aside>
    )
}
