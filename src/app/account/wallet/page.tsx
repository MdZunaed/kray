import { siteConfig } from "@/config/site";

export default function WalletPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">My Wallet</h1>
            <div className="bg-indigo-500 text-white p-8 rounded-lg text-center">
                <p className="text-xl">Current Balance</p>
                <p className="text-5xl font-bold mt-2">{siteConfig.currency}500.00</p>
            </div>
            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Transaction History</h2>
                <div className="space-y-4">
                    <div className="border p-4 rounded-lg flex justify-between items-center">
                        <div>
                            <p className="font-bold">Added to wallet</p>
                            <p className="text-gray-600">Date: 2023-03-18</p>
                        </div>
                        <p className="text-green-500 font-bold">+{siteConfig.currency}100.00</p>
                    </div>
                    <div className="border p-4 rounded-lg flex justify-between items-center">
                        <div>
                            <p className="font-bold">Order #12345</p>
                            <p className="text-gray-600">Date: 2023-03-18</p>
                        </div>
                        <p className="text-red-500 font-bold">-{siteConfig.currency}110.00</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
