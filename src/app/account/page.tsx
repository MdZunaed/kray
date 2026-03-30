import { ShieldCheck, UserCircle2 } from "lucide-react";

export default function ProfilePage() {
    return (
        <div>
            <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2">
                    <UserCircle2 className="h-7 w-7 text-primary-700" />
                    <h1 className="text-3xl font-bold text-primary-900">My Profile</h1>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-xs font-medium text-primary-800">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Verified
                </span>
            </div>
            <p className="mt-2 text-gray-600">Keep your account information up to date.</p>
            <form className="mt-8 space-y-5">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="mt-2 block w-full rounded-lg border border-primary-200 px-3 py-2 text-sm shadow-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="mt-2 block w-full rounded-lg border border-primary-200 px-3 py-2 text-sm shadow-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
                    />
                </div>
                <button type="submit" className="rounded-lg bg-primary-600 px-6 py-3 font-medium text-white transition-colors hover:bg-primary-700">
                    Save
                </button>
            </form>
        </div>
    );
}
