import Image from 'next/image'
import Link from 'next/link'

export type AppButtonProps = {
    href: string
    icon: string
    textIcon: string
    alt: string
    iconSize: {
        w: number
        h: number
    }
}

export const AppButton = ({ href, icon, textIcon, alt, iconSize }: AppButtonProps) => {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 rounded-lg bg-neutral-900 px-4 py-2.5 text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)] active:scale-[0.98]"
        >
            <Image src={icon} alt="" width={iconSize.w} height={iconSize.h} />
            <Image src={textIcon} alt={alt} width={78} height={25} className="h-6.25 w-19.5" />
        </Link>
    )
}
