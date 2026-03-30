"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ShieldCheck, Sparkles, UserPlus } from "lucide-react";
import { routes } from "@/lib/routes";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setIsSubmitting(true);

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (res.ok) {
      router.push(routes.login);
    } else {
      const data = await res.json();
      setError(data.message || "Something went wrong");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-white to-secondary-50/50 px-4 py-10">
      <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-primary-200/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 top-24 h-72 w-72 rounded-full bg-secondary-200/60 blur-3xl" />

      <div className="relative mx-auto grid min-h-[calc(100vh-10rem)] w-full max-w-5xl grid-cols-1 items-center gap-8 lg:grid-cols-2">
        <div className="hidden rounded-2xl border border-primary-200 bg-white/80 p-8 shadow-sm backdrop-blur-sm lg:block">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white px-4 py-1.5 text-sm font-medium text-primary-800">
            <Sparkles className="h-4 w-4" />
            Create your Kray account
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-primary-950">Join the Experience</h1>
          <p className="mt-3 text-gray-600">
            Save addresses, track orders, manage rewards, and enjoy faster checkout every time.
          </p>
          <div className="mt-6 space-y-3">
            <p className="inline-flex items-center gap-2 rounded-lg bg-primary-50 px-3 py-2 text-sm text-primary-800">
              <ShieldCheck className="h-4 w-4" />
              Secure account access
            </p>
            <p className="inline-flex items-center gap-2 rounded-lg bg-secondary-50 px-3 py-2 text-sm text-secondary-800">
              <UserPlus className="h-4 w-4" />
              One-click order tracking
            </p>
          </div>
        </div>

        <main className="w-full rounded-2xl border border-primary-200 bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-2xl font-bold text-primary-900">Create Account</h2>
          <p className="mt-2 text-sm text-gray-600">Start shopping with a personalized experience.</p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="mt-2 block w-full rounded-lg border border-primary-200 px-3 py-2 text-sm shadow-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
              />
            </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
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
          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
              Confirm password
            </label>
            <input
              id="confirm-password"
              name="confirm-password"
              type="password"
              autoComplete="new-password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-2 block w-full rounded-lg border border-primary-200 px-3 py-2 text-sm shadow-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg bg-primary-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Creating account..." : "Create Account"}
          </button>
          </form>

          <p className="mt-4 text-sm text-gray-600">
            Already have an account?{" "}
            <Link href={routes.login} className="font-medium text-primary-700 hover:text-primary-800">
              Login
            </Link>
          </p>
        </main>
      </div>
    </div>
  );
}
