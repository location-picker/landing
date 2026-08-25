import Image from 'next/image'
import Link from 'next/link'

export const Og = () => {
    return (
        <section
            aria-label="Open Graph preview"
            className="relative h-157.5 w-300 overflow-hidden bg-slate-50 text-gray-950"
        >
            <div className="absolute inset-0 bg-[linear-gradient(135deg,#f8fafc_0%,#f1f5f9_48%,#fff7ed_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-size-[48px_48px] opacity-45" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_22%,rgba(249,115,22,0.14),transparent_26%),radial-gradient(circle_at_78%_16%,rgba(59,130,246,0.09),transparent_24%),radial-gradient(circle_at_62%_84%,rgba(34,197,94,0.08),transparent_28%)]" />
            <div className="absolute top-16 left-14 h-84 w-84 rounded-full border-26 border-orange-200/24" />
            <div className="absolute right-12 bottom-10 h-104 w-104 rounded-full border-30 border-slate-300/22" />

            <div className="relative z-10 flex h-full items-center justify-start">
                <div className="relative z-20 w-190 pl-25">
                    <h1 className="mb-6 text-[72px] leading-[1.08] font-extrabold tracking-normal whitespace-nowrap text-gray-950">
                        My <span className="text-orange-500">Saved</span> Places
                    </h1>
                    <p className="max-w-155 text-[36px] leading-[1.32] font-semibold text-gray-600">
                        Save places once. Open them in any map, navigation, or taxi.
                    </p>
                </div>

                <div className="absolute -top-25 -right-9 z-10 h-222.5 w-133.5 rotate-2">
                    <div className="absolute inset-x-10 top-36 h-162.5 rounded-[90px] bg-black/18 blur-3xl" />
                    <Image
                        src="/images/screenshots/home-left.png"
                        alt="My Saved Places app on iPhone"
                        fill
                        priority
                        sizes="534px"
                        className="relative object-contain drop-shadow-[0_28px_44px_rgba(4,31,46,0.22)] saturate-75"
                    />
                </div>
            </div>
        </section>
    )
}

export const OgThumbnails = () => {
    return (
        <Link href="/app-store-previews/og" className="group block">
            <div className="h-[100.8px] w-48 overflow-hidden bg-white shadow-xl ring-1 ring-gray-200 transition duration-200 group-hover:-translate-y-1 group-hover:shadow-2xl">
                <div className="origin-top-left scale-[0.16]">
                    <Og />
                </div>
            </div>
        </Link>
    )
}
