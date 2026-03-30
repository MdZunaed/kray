import { siteConfig } from "@/config/site";
import { ArrowDownToLine, ArrowUpRight, WalletCards } from "lucide-react";

export default function WalletPage() {
    return (
        <div>
            <div className="flex items-center gap-2">
                <WalletCards className="h-7 w-7 text-primary-700" />
                <h1 className="text-3xl font-bold text-primary-900">My Wallet</h1>
            </div>
            <p className="mt-2 text-gray-600">See your current balance and recent activity.</p>
            <div className="mt-8 rounded-xl bg-primary-600 p-8 text-center text-white">
                <p className="text-xl">Current Balance</p>
                <p className="text-5xl font-bold mt-2">{siteConfig.currency}500.00</p>
            </div>
            <div className="mt-8">
                <h2 className="text-2xl font-bold text-primary-900 mb-4">Transaction History</h2>
                <div className="space-y-4">
                    <div className="flex items-center justify-between rounded-xl border border-primary-200 bg-primary-50/40 p-4">
                        <div>
                            <p className="font-bold">Added to wallet</p>
                            <p className="text-gray-600">Date: 2023-03-18</p>
                        </div>
                        <p className="inline-flex items-center gap-1 rounded-full border border-green-200 bg-green-50 px-2 py-1 text-xs font-medium text-green-700">
                            <ArrowDownToLine className="h-3.5 w-3.5" />
                            +{siteConfig.currency}100.00
                        </p>
                    </div>
                    <div className="flex items-center justify-between rounded-xl border border-primary-200 bg-primary-50/40 p-4">
                        <div>
                            <p className="font-bold">Order #12345</p>
                            <p className="text-gray-600">Date: 2023-03-18</p>
                        </div>
                        <p className="inline-flex items-center gap-1 rounded-full border border-red-200 bg-red-50 px-2 py-1 text-xs font-medium text-red-700">
                            <ArrowUpRight className="h-3.5 w-3.5" />
                            -{siteConfig.currency}110.00
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
