import { ReactNode } from 'react'

export default function LegalLayout({ children }: Readonly<{ children: ReactNode }>) {
    return <div className="m-auto min-h-full max-w-250 flex-col bg-white px-4 py-10 sm:py-16 md:px-12">{children}</div>
}
