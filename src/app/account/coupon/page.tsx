import { siteConfig } from "@/config/site";
import { Clock3, Sparkles, TicketPercent } from "lucide-react";

export default function CouponPage() {
    return (
        <div>
            <div className="flex items-center gap-2">
                <TicketPercent className="h-7 w-7 text-primary-700" />
                <h1 className="text-3xl font-bold text-primary-900">My Coupons</h1>
            </div>
            <p className="mt-2 text-gray-600">Use available offers before checkout.</p>
            <div className="mt-8 space-y-4">
                <div className="flex items-center justify-between rounded-xl border border-primary-200 bg-primary-50/60 p-4">
                    <div>
                        <h2 className="text-xl font-bold text-primary-900">10% OFF</h2>
                        <p className="text-gray-600">On your next purchase</p>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full border border-primary-300 bg-white px-3 py-1 text-xs font-medium text-primary-700">
                        <Sparkles className="h-3.5 w-3.5" />
                        Active
                    </span>
                    <button className="rounded-md border border-primary-300 px-4 py-2 text-primary-700 hover:bg-primary-100">Apply</button>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-secondary-300 bg-secondary-50 p-4">
                    <div>
                        <h2 className="text-xl font-bold text-secondary-900">{siteConfig.currency}5 OFF</h2>
                        <p className="text-gray-600">On orders over {siteConfig.currency}50</p>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full border border-secondary-300 bg-white px-3 py-1 text-xs font-medium text-secondary-700">
                        <Clock3 className="h-3.5 w-3.5" />
                        Ends Soon
                    </span>
                    <button className="rounded-md border border-secondary-400 px-4 py-2 text-secondary-700 hover:bg-secondary-100">Apply</button>
                </div>
            </div>
        </div>
    );
}
