import { PlayIcon, ShoppingBasketIcon } from 'lucide-react'

import Link from 'next/link'

import { LandingScreenshots } from './components/landing-screenshots'

const chromeWebStoreUrl = process.env.NEXT_PUBLIC_CHROME_WEB_STORE_URL ?? 'https://chromewebstore.google.com/'
const youtubeDemoUrl = process.env.NEXT_PUBLIC_YOUTUBE_DEMO_URL ?? 'https://www.youtube.com/'

const ChromeStoreMark = () => (
    <svg aria-hidden="true" className="size-7" viewBox="0 0 28 28">
        <path
            d="M14 2.5a11.5 11.5 0 0 1 9.95 5.75H14a5.75 5.75 0 0 0-4.98 2.88L6.4 6.6A11.46 11.46 0 0 1 14 2.5Z"
            fill="#EA4335"
        />
        <path d="M23.95 8.25A11.5 11.5 0 0 1 14 25.5l4.98-8.63A5.75 5.75 0 0 0 14 8.25h9.95Z" fill="#FBBC04" />
        <path d="M14 25.5A11.5 11.5 0 0 1 4.05 8.25l4.97 8.62A5.75 5.75 0 0 0 14 19.75h4.98L14 25.5Z" fill="#34A853" />
        <circle cx="14" cy="14" r="5.75" fill="#fff" />
        <circle cx="14" cy="14" r="3.6" fill="#4285F4" />
    </svg>
)

export const LandingFullPage = () => {
    return (
        <main className="relative flex min-h-full w-full items-center justify-center overflow-hidden bg-[#e9efe8] px-6 py-12 text-[#15202a]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(255,255,255,0.95),transparent_30%),radial-gradient(circle_at_82%_12%,rgba(250,203,104,0.36),transparent_27%),radial-gradient(circle_at_84%_82%,rgba(22,111,92,0.24),transparent_34%),linear-gradient(135deg,#f8f4ea_0%,#e9efe8_48%,#dfeae1_100%)]" />
            <div className="absolute top-0 right-0 h-full w-[38vw] bg-[linear-gradient(110deg,transparent_0%,rgba(255,255,255,0.45)_46%,rgba(255,255,255,0.2)_100%)]" />
            <div className="absolute top-[8vh] right-[12vw] h-28 w-28 rounded-full border border-white/60 bg-white/20" />
            <div className="absolute right-[7vw] bottom-[12vh] h-40 w-40 rounded-full border border-[#166f5c]/15 bg-[#166f5c]/5" />
            <div className="absolute top-[19vh] left-[48vw] h-[360px] w-[360px] rotate-6 rounded-[52px] bg-white/24 ring-1 ring-white/50" />
            <div className="absolute top-[25vh] left-[52vw] h-[240px] w-[240px] -rotate-12 rounded-[44px] bg-[#f2d083]/24" />

            <section className="relative z-10 flex w-full max-w-6xl flex-col items-center justify-center gap-10 lg:flex-row lg:gap-16">
                <div className="max-w-[635px] text-center lg:text-left">
                    <div className="mb-8 flex flex-col items-center gap-5 sm:flex-row sm:justify-center lg:mb-10 lg:justify-start">
                        <div className="flex size-18 items-center justify-center rounded-[18px] bg-[#08725f] shadow-[0_16px_34px_rgba(8,114,95,0.24)] sm:size-20">
                            <ShoppingBasketIcon className="size-11 sm:size-12" strokeWidth={1.55} color="#fff" />
                        </div>
                        <h1 className="text-[52px] leading-[0.92] font-black tracking-normal text-[#111b24] sm:text-[68px]">
                            Cart Keeper
                        </h1>
                    </div>

                    <p className="mx-auto max-w-[585px] text-[25px] leading-[1.16] font-black tracking-normal text-[#17212b] sm:text-[31px] lg:mx-0">
                        Save products from every marketplace in one simple, private list.
                    </p>
                    <p className="mx-auto mt-6 max-w-[590px] text-[16px] leading-[1.55] font-semibold tracking-normal text-[#66736d] sm:mt-7 sm:text-[18px] lg:mx-0">
                        When you find something interesting, open the extension and add it to your saved products. Cart
                        Keeper stores the product name, price, image, and store, so you can easily come back to it
                        later.
                    </p>

                    <div className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:mt-10 lg:justify-start">
                        <a
                            className="inline-flex h-12 items-center gap-2.5 rounded-xl bg-[#111820] px-3.5 pr-4 text-white shadow-[0_14px_28px_rgba(17,24,32,0.16)] ring-1 ring-white/20 transition hover:-translate-y-0.5 hover:bg-[#0b1117] hover:shadow-[0_18px_34px_rgba(17,24,32,0.2)]"
                            href={chromeWebStoreUrl}
                            aria-label="Install Cart Keeper from the Chrome Web Store"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <span className="flex size-8 items-center justify-center rounded-full bg-white">
                                <ChromeStoreMark />
                            </span>
                            <span className="flex flex-col text-left leading-none">
                                <span className="text-[9px] font-bold tracking-[0.12em] text-white/68 uppercase">
                                    Available in the
                                </span>
                                <span className="mt-1 text-[14px] font-black tracking-normal">Chrome Web Store</span>
                            </span>
                        </a>

                        <a
                            className="inline-flex h-12 items-center gap-2.5 rounded-xl bg-white/70 px-3.5 pr-4 text-[#17212b] shadow-[0_14px_28px_rgba(42,50,38,0.09)] ring-1 ring-[#17212b]/10 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_18px_34px_rgba(42,50,38,0.13)]"
                            href={youtubeDemoUrl}
                            aria-label="Watch Cart Keeper demo on YouTube"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <span className="flex size-8 items-center justify-center rounded-full bg-[#ff0033] text-white">
                                <PlayIcon className="ml-0.5 size-4 fill-current" strokeWidth={2.4} />
                            </span>
                            <span className="flex flex-col text-left leading-none">
                                <span className="text-[9px] font-bold tracking-[0.12em] text-[#66736d] uppercase">
                                    Watch demo
                                </span>
                                <span className="mt-1 text-[14px] font-black tracking-normal">YouTube video</span>
                            </span>
                        </a>
                    </div>

                    <nav className="mt-6 flex items-center justify-center gap-5 text-[15px] font-bold text-[#5c6a64] lg:justify-start">
                        <Link className="transition hover:text-[#08725f]" href="/legal/app/privacy-policy">
                            Privacy policy
                        </Link>
                        <a className="transition hover:text-[#08725f]" href="#how-it-works">
                            How it works
                        </a>
                    </nav>

                    <p id="how-it-works" className="sr-only">
                        Open the extension on a product page, save the item, and return to your private product list
                        whenever you are ready to compare or buy.
                    </p>
                </div>

                <div className="relative flex h-[500px] w-[360px] shrink-0 items-center justify-center max-lg:hidden">
                    <div className="absolute h-[468px] w-[314px] rotate-3 rounded-lg bg-[#15202a]/8 blur-[1px]" />
                    <div className="absolute top-[74px] left-2 h-16 w-16 rounded-[18px] bg-white/60 shadow-[0_14px_28px_rgba(42,50,38,0.12)]" />
                    <div className="absolute right-1 bottom-[86px] h-20 w-20 rounded-[22px] bg-[#f2d083]/70 shadow-[0_14px_30px_rgba(108,83,28,0.14)]" />
                    <LandingScreenshots />
                </div>
            </section>
        </main>
    )
}
