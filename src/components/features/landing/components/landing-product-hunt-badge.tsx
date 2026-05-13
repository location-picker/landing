import Image from 'next/image'
import Link from 'next/link'

export const LandingProductHuntBadge = () => {
    return (
        <div className="mt-5 flex justify-center lg:justify-start">
            <Link
                href="https://www.producthunt.com/products/my-saved-places?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-my-saved-places-2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex transition hover:-translate-y-0.5 hover:opacity-90 active:scale-[0.98]"
            >
                <Image
                    src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1145877&theme=neutral&t=1778671792035"
                    alt="My Saved Places - Save places once. Open them in any map, navigation, or taxi. | Product Hunt"
                    width={250}
                    height={54}
                    unoptimized
                />
            </Link>
        </div>
    )
}
