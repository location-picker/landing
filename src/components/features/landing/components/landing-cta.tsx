import Image from 'next/image'
import Link from 'next/link'

const CTA_BUTTONS = [
    // {
    //     id: 'appstore',
    //     href: '#',
    //     icon: '/images/app-button/apple-logo.svg',
    //     textIcon: '/images/app-button/apple-text.svg',
    //     alt: 'Download on App Store',
    //     iconSize: { w: 20, h: 25 },
    // },
    {
        id: 'web',
        href: 'https://app.mysavedplaces.com',
        icon: '/images/app-button/web-logo.svg',
        textIcon: '/images/app-button/web-text.svg',
        alt: 'Open Web App',
        iconSize: { w: 20, h: 20 },
    },
]

export const LandingCTA = () => {
    return (
        <div className="flex justify-center gap-4 lg:justify-start">
            {CTA_BUTTONS.map(button => (
                <Link
                    key={button.id}
                    href={button.href}
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 rounded-lg bg-neutral-900 px-4 py-2.5 text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)] active:scale-[0.98]"
                >
                    <Image src={button.icon} alt="" width={button.iconSize.w} height={button.iconSize.h} />
                    <Image src={button.textIcon} alt={button.alt} width={78} height={25} className="h-6.25 w-19.5" />
                </Link>
            ))}
        </div>
    )
}
