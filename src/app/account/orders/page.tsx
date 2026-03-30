import { siteConfig } from "@/config/site";
import { CircleCheckBig, PackageSearch, Truck } from "lucide-react";

export default function OrdersPage() {
    return (
        <div>
            <div className="flex items-center gap-2">
                <PackageSearch className="h-7 w-7 text-primary-700" />
                <h1 className="text-3xl font-bold text-primary-900">My Orders</h1>
            </div>
            <p className="mt-2 text-gray-600">Track your recent purchases and order status.</p>
            <div className="mt-8 space-y-4">
                <div className="flex items-center justify-between rounded-xl border border-primary-200 bg-primary-50/40 p-4">
                    <div>
                        <h2 className="text-xl font-bold text-primary-900">Order #12345</h2>
                        <p className="text-gray-600">Date: 2023-03-18</p>
                    </div>
                    <div>
                        <p className="font-bold text-gray-900">{siteConfig.currency}110.00</p>
                        <p className="inline-flex items-center gap-1 rounded-full border border-green-200 bg-green-50 px-2 py-1 text-xs font-medium text-green-700">
                            <CircleCheckBig className="h-3.5 w-3.5" />
                            Delivered
                        </p>
                    </div>
                    <button className="text-primary-700 hover:text-primary-800">View Details</button>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-primary-200 bg-primary-50/40 p-4">
                    <div>
                        <h2 className="text-xl font-bold text-primary-900">Order #12346</h2>
                        <p className="text-gray-600">Date: 2023-03-15</p>
                    </div>
                    <div>
                        <p className="font-bold text-gray-900">{siteConfig.currency}45.00</p>
                        <p className="inline-flex items-center gap-1 rounded-full border border-secondary-300 bg-secondary-50 px-2 py-1 text-xs font-medium text-secondary-700">
                            <Truck className="h-3.5 w-3.5" />
                            Shipped
                        </p>
                    </div>
                    <button className="text-primary-700 hover:text-primary-800">View Details</button>
                </div>
            </div>
        </div>
    );
}
