import { siteConfig } from '@/config/site';
import { Sparkles, Target, Users, User } from 'lucide-react';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'CEO & Founder',
  },
  {
    name: 'Jane Smith',
    role: 'Chief Operating Officer',
  },
  {
    name: 'Samuel Green',
    role: 'Lead Designer',
  },
];

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-white to-secondary-50/40">
      <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-primary-200/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 top-24 h-72 w-72 rounded-full bg-secondary-200/60 blur-3xl" />

      <div className="container relative mx-auto px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white px-4 py-1.5 text-sm font-medium text-primary-800 shadow-sm">
            <Sparkles className="h-4 w-4" />
            About {siteConfig.name}
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-primary-950 sm:text-5xl">
            We Are {siteConfig.name}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
            Welcome to {siteConfig.name}! We are a passionate team dedicated to providing you with
            the best products and an unparalleled shopping experience.
          </p>
        </div>

        <div className="mx-auto max-w-5xl rounded-2xl border border-primary-100 bg-white/90 p-6 shadow-sm backdrop-blur-sm md:p-10">
          <section className="rounded-xl border border-primary-200 bg-primary-50/50 p-5 md:p-6">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-primary-900">
              <Target className="h-6 w-6 text-primary-700" />
              Our Mission
            </h2>
            <p className="mt-3 text-gray-700">
              Our mission is to bring joy and convenience to your shopping experience. We believe in quality, affordability, and customer satisfaction. We work tirelessly to source the best products, ensuring that every item in our store meets our high standards.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-primary-900">
              <Users className="h-6 w-6 text-primary-700" />
              Meet Our Team
            </h2>
            <p className="mt-2 text-gray-600">
              We are a group of dedicated professionals who are passionate about what we do.
            </p>
          </section>

          <div className="mt-6 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((person) => (
              <div key={person.name} className="rounded-xl border border-primary-200 bg-white p-5 shadow-sm">
                <span className="inline-flex items-center justify-center rounded-lg bg-primary-500 p-3">
                  <User className="h-7 w-7 text-white" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-primary-900">{person.name}</h3>
                <p className="mt-1 text-sm text-gray-600">{person.role}</p>
                <span className="mt-4 inline-block rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700">
                  Team {siteConfig.name}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-secondary-200 bg-secondary-50 p-5 text-center">
            <p className="text-sm text-secondary-800">
              Our journey began with a simple idea: to create a one-stop shop for high-quality,
              curated goods that enhance your lifestyle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
