export default function AddressPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">My Addresses</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border p-4 rounded-lg">
                    <h2 className="text-xl font-bold">Home</h2>
                    <p>123 Main St</p>
                    <p>Anytown, USA 12345</p>
                    <div className="mt-4">
                        <button className="text-indigo-500 hover:text-indigo-700">Edit</button>
                        <button className="ml-4 text-red-500 hover:text-red-700">Delete</button>
                    </div>
                </div>
                <div className="border p-4 rounded-lg">
                    <h2 className="text-xl font-bold">Work</h2>
                    <p>456 Oak Ave</p>
                    <p>Anytown, USA 12345</p>
                    <div className="mt-4">
                        <button className="text-indigo-500 hover:text-indigo-700">Edit</button>
                        <button className="ml-4 text-red-500 hover:text-red-700">Delete</button>
                    </div>
                </div>
            </div>
            <button className="mt-8 bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600">
                Add New Address
            </button>
        </div>
    );
}
