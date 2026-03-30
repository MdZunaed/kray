"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { routes } from '@/lib/routes';

const sidebarNavItems = [
    { href: routes.account, title: 'Profile' },
    { href: routes.accountAddress, title: 'Address' },
    { href: routes.accountOrders, title: 'Orders' },
    { href: routes.accountWallet, title: 'Wallet' },
    { href: routes.accountCoupon, title: 'Coupon' },
]

export default function AccountLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname();

    return (
        <div className="bg-gradient-to-b from-primary-50 to-white">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
                    <aside className="hidden lg:col-span-1 lg:block">
                        <div className="rounded-2xl border border-primary-200 bg-white p-5 shadow-sm">
                            <h2 className="text-2xl font-bold text-primary-900">My Account</h2>
                            <p className="mt-1 text-sm text-gray-600">Manage your profile, orders, and rewards.</p>
                            <nav className="mt-5 flex flex-col space-y-2">
                        {sidebarNavItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`rounded-lg px-3 py-2 text-base transition-colors ${
                                    pathname === item.href
                                        ? 'bg-primary-100 font-semibold text-primary-800'
                                        : 'text-gray-700 hover:bg-primary-50 hover:text-primary-700'
                                }`}
                            >
                                {item.title}
                            </Link>
                        ))}
                            </nav>
                        </div>
                    </aside>
                    <main className="lg:col-span-3">
                        <div className="rounded-2xl border border-primary-100 bg-white p-6 shadow-sm md:p-8">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}
