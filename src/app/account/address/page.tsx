import { Building2, Home, MapPin } from "lucide-react";

export default function AddressPage() {
    return (
        <div>
            <div className="flex items-center gap-2">
                <MapPin className="h-7 w-7 text-primary-700" />
                <h1 className="text-3xl font-bold text-primary-900">My Addresses</h1>
            </div>
            <p className="mt-2 text-gray-600">Update where we should deliver your orders.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="mt-8 rounded-xl border border-primary-200 bg-primary-50/40 p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="flex items-center gap-2 text-xl font-bold text-primary-900">
                            <Home className="h-5 w-5" />
                            Home
                        </h2>
                        <span className="rounded-full border border-primary-200 bg-white px-3 py-1 text-xs font-medium text-primary-700">
                            Default
                        </span>
                    </div>
                    <p className="mt-2 text-gray-700">123 Main St</p>
                    <p className="text-gray-700">Anytown, USA 12345</p>
                    <div className="mt-4">
                        <button className="text-primary-700 hover:text-primary-800">Edit</button>
                        <button className="ml-4 text-red-500 hover:text-red-700">Delete</button>
                    </div>
                </div>
                <div className="mt-8 rounded-xl border border-primary-200 bg-primary-50/40 p-4">
                    <h2 className="flex items-center gap-2 text-xl font-bold text-primary-900">
                        <Building2 className="h-5 w-5" />
                        Work
                    </h2>
                    <p className="mt-2 text-gray-700">456 Oak Ave</p>
                    <p className="text-gray-700">Anytown, USA 12345</p>
                    <div className="mt-4">
                        <button className="text-primary-700 hover:text-primary-800">Edit</button>
                        <button className="ml-4 text-red-500 hover:text-red-700">Delete</button>
                    </div>
                </div>
            </div>
            <button className="mt-8 rounded-lg bg-primary-600 px-6 py-3 font-medium text-white transition-colors hover:bg-primary-700">
                Add New Address
            </button>
        </div>
    );
}
