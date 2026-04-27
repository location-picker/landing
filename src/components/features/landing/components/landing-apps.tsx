import Image from 'next/image'

const NAVIGATORS = [
    { id: 'waze', name: 'Waze', icon: '/images/apps/waze.png' },
    { id: 'apple-maps', name: 'Apple', icon: '/images/apps/apple-maps.png' },
    { id: 'google-maps', name: 'Google', icon: '/images/apps/google-maps.png' },
    { id: 'mapsme', name: 'Maps.me', icon: '/images/apps/mapsme.png' },
    { id: 'uber', name: 'Uber', icon: '/images/apps/uber.png' },
    { id: 'lyft', name: 'Lyft', icon: '/images/apps/lyft.png' },
    { id: 'yandex-maps', name: 'Yandex Maps', icon: '/images/apps/yandex-maps.png' },
    { id: 'yandex-go', name: 'Yandex Go', icon: '/images/apps/yandex-go.png' },
    { id: 'yandex-navi', name: 'Yandex Navi', icon: '/images/apps/yandex-navi.png' },
]

export const LandingApps = () => {
    return (
        <div className="mb-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            {NAVIGATORS.map(nav => (
                <div key={nav.id} className="group flex flex-col items-center gap-2">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-orange-100 group-hover:shadow-md">
                        <Image src={nav.icon} width={28} height={28} className="rounded-lg" alt={nav.name} />
                    </div>
                    <span className="text-xs font-semibold text-gray-500">{nav.name}</span>
                </div>
            ))}
        </div>
    )
}
