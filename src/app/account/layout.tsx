"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const sidebarNavItems = [
    { href: '/account', title: 'Profile' },
    { href: '/account/address', title: 'Address' },
    { href: '/account/orders', title: 'Orders' },
    { href: '/account/wallet', title: 'Wallet' },
    { href: '/account/coupon', title: 'Coupon' },
]

export default function AccountLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname();

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex">
                <aside className="w-1/4">
                    <h2 className="text-2xl font-bold mb-4">My Account</h2>
                    <nav className="flex flex-col space-y-2">
                        {sidebarNavItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`text-lg hover:text-indigo-500 ${pathname === item.href ? 'font-bold text-indigo-500' : ''}`}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </nav>
                </aside>
                <main className="w-3/4 pl-8">
                    {children}
                </main>
            </div>
        </div>
    )
}
