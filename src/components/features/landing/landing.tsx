import { ShoppingBasketIcon } from 'lucide-react'

import { LandingScreenshots } from './components/landing-screenshots'

export const Landing = () => {
    return (
        <main className="flex min-h-full w-full flex-col items-center bg-[#f4f1ea] px-8 py-10 text-[#15202a]">
            <section
                className="relative h-[560px] w-[1400px] overflow-hidden border border-black bg-[#e9efe8]"
                aria-label="Cart Keeper marquee promo tile"
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(255,255,255,0.95),transparent_30%),radial-gradient(circle_at_82%_12%,rgba(250,203,104,0.36),transparent_27%),radial-gradient(circle_at_84%_82%,rgba(22,111,92,0.24),transparent_34%),linear-gradient(135deg,#f8f4ea_0%,#e9efe8_48%,#dfeae1_100%)]" />
                <div className="absolute top-0 right-0 h-full w-[470px] bg-[linear-gradient(110deg,transparent_0%,rgba(255,255,255,0.45)_46%,rgba(255,255,255,0.2)_100%)]" />
                <div className="absolute top-10 right-28 h-28 w-28 rounded-full border border-white/60 bg-white/20" />
                <div className="absolute right-16 bottom-12 h-40 w-40 rounded-full border border-[#166f5c]/15 bg-[#166f5c]/5" />
                <div className="absolute top-20 left-[590px] h-[360px] w-[360px] rotate-6 rounded-[52px] bg-white/24 ring-1 ring-white/50" />
                <div className="absolute top-28 left-[640px] h-[240px] w-[240px] -rotate-12 rounded-[44px] bg-[#f2d083]/24" />

                <div className="relative z-10 flex h-full items-center justify-between px-20">
                    <div className="max-w-[635px]">
                        <div className="mb-10 flex items-center gap-5">
                            <div className="flex size-20 items-center justify-center rounded-[18px] bg-[#08725f] shadow-[0_16px_34px_rgba(8,114,95,0.24)]">
                                <ShoppingBasketIcon size={48} strokeWidth={1.55} color="#fff" />
                            </div>
                            <h1 className="text-[68px] leading-[0.92] font-black tracking-normal text-[#111b24]">
                                Cart Keeper
                            </h1>
                        </div>

                        <p className="max-w-[585px] text-[31px] leading-[1.14] font-black tracking-normal text-[#17212b]">
                            Save products from every marketplace in one simple, private list.
                        </p>
                        <p className="mt-7 max-w-[590px] text-[18px] leading-[1.55] font-semibold tracking-normal text-[#66736d]">
                            When you find something interesting, open the extension and add it to your saved products.
                            Cart Keeper stores the product name, price, image, and store, so you can easily come back to
                            it later.
                        </p>
                    </div>

                    <div className="relative mr-28 flex h-full w-[420px] items-center justify-center">
                        <div className="absolute h-[468px] w-[314px] rotate-3 rounded-lg bg-[#15202a]/8 blur-[1px]" />
                        <div className="absolute top-[74px] left-2 h-16 w-16 rounded-[18px] bg-white/60 shadow-[0_14px_28px_rgba(42,50,38,0.12)]" />
                        <div className="absolute right-1 bottom-[86px] h-20 w-20 rounded-[22px] bg-[#f2d083]/70 shadow-[0_14px_30px_rgba(108,83,28,0.14)]" />
                        <LandingScreenshots />
                    </div>
                </div>
            </section>
        </main>
    )
}
