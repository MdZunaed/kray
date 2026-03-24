export default function ProfilePage() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">My Profile</h1>
            <form>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
                    <input type="text" id="name" name="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
                    <input type="email" id="email" name="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <button type="submit" className="mt-4 bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600">
                    Save
                </button>
            </form>
        </div>
    );
}
