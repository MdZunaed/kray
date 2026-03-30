"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ShieldCheck, Sparkles } from "lucide-react";
import { routes } from "@/lib/routes";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      router.push(routes.account);
      return;
    }

    const data = await res.json();
    setError(data.message || "Invalid credentials");
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-white to-secondary-50/50 px-4 py-10">
      <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-primary-200/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 top-24 h-72 w-72 rounded-full bg-secondary-200/60 blur-3xl" />

      <div className="relative mx-auto grid min-h-[calc(100vh-10rem)] w-full max-w-5xl grid-cols-1 items-center gap-8 lg:grid-cols-2">
        <div className="hidden rounded-2xl border border-primary-200 bg-white/80 p-8 shadow-sm backdrop-blur-sm lg:block">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white px-4 py-1.5 text-sm font-medium text-primary-800">
            <Sparkles className="h-4 w-4" />
            Welcome back
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-primary-950">Sign In to Continue</h1>
          <p className="mt-3 text-gray-600">
            Access your account, view recent orders, manage addresses, and keep track of rewards.
          </p>
          <p className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary-50 px-3 py-2 text-sm text-primary-800">
            <ShieldCheck className="h-4 w-4" />
            Protected by secure authentication
          </p>
        </div>

        <main className="w-full rounded-2xl border border-primary-200 bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-2xl font-bold text-primary-900">Sign In</h2>
          <p className="mt-2 text-sm text-gray-600">Welcome back to Kray.</p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 block w-full rounded-lg border border-primary-200 px-3 py-2 text-sm shadow-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 block w-full rounded-lg border border-primary-200 px-3 py-2 text-sm shadow-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            className="w-full rounded-lg bg-primary-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-700"
          >
            Login
          </button>
          </form>

          <p className="mt-4 text-sm text-gray-600">
            New here?{" "}
            <Link href={routes.register} className="font-medium text-primary-700 hover:text-primary-800">
              Create an account
            </Link>
          </p>
        </main>
      </div>
    </div>
  );
}
