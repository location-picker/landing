import Image from 'next/image'

export const LandingScreenshots = () => {
    return (
        <div className="relative h-[453px] w-[296px] shrink-0 overflow-hidden rounded-[6px] bg-white shadow-[0_26px_70px_rgba(21,31,42,0.24)] ring-1 ring-black/10">
            <Image
                src="/images/screenshots/popup.png"
                alt="Cart Keeper extension popup with saved products grouped by store"
                fill
                className="object-contain"
                priority
            />
        </div>
    )
}
