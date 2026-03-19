import Image from 'next/image'

const NAVIGATORS = [
    { id: 'waze', name: 'Waze', icon: '/images/navigators/waze.png' },
    { id: 'google', name: 'Google', icon: '/images/navigators/google.png' },
    { id: 'yandex', name: 'Yandex', icon: '/images/navigators/yandex.png' },
    { id: 'apple', name: 'Apple', icon: '/images/navigators/apple.png' },
]

export const LandingNavigators = () => {
    return (
        <div className="mb-10 flex items-center justify-center gap-4 lg:justify-start">
            {NAVIGATORS.map(nav => (
                <div key={nav.id} className="group flex flex-col items-center gap-2">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-orange-100 group-hover:shadow-md">
                        <Image src={nav.icon} width={28} height={28} alt={nav.name} />
                    </div>
                    <span className="text-xs font-semibold text-gray-500">{nav.name}</span>
                </div>
            ))}
        </div>
    )
}
