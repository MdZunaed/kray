import { siteConfig } from "@/config/site";

export default function OrdersPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">My Orders</h1>
            <div className="space-y-4">
                <div className="border p-4 rounded-lg flex justify-between items-center">
                    <div>
                        <h2 className="text-xl font-bold">Order #12345</h2>
                        <p className="text-gray-600">Date: 2023-03-18</p>
                    </div>
                    <div>
                        <p className="font-bold">{siteConfig.currency}110.00</p>
                        <p className="text-green-500">Delivered</p>
                    </div>
                    <button className="text-indigo-500 hover:text-indigo-700">View Details</button>
                </div>
                <div className="border p-4 rounded-lg flex justify-between items-center">
                    <div>
                        <h2 className="text-xl font-bold">Order #12346</h2>
                        <p className="text-gray-600">Date: 2023-03-15</p>
                    </div>
                    <div>
                        <p className="font-bold">{siteConfig.currency}45.00</p>
                        <p className="text-yellow-500">Shipped</p>
                    </div>
                    <button className="text-indigo-500 hover:text-indigo-700">View Details</button>
                </div>
            </div>
        </div>
    );
}
