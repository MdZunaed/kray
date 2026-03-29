import { siteConfig } from '@/config/site';
import { User } from 'lucide-react';

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
    <div className="bg-white">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-primary-600 tracking-wide uppercase">About Us</h2>
          <p className="mt-2 text-3xl font-extrabold text-black tracking-tight sm:text-4xl">
            We are {siteConfig.name}
          </p>
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
            Welcome to {siteConfig.name}! We are a passionate team dedicated to providing you with the best products and an unparalleled shopping experience. Our journey began with a simple idea: to create a one-stop shop for high-quality, curated goods that enhance your lifestyle.
          </p>
        </div>
      </div>

      <div className="bg-gray-50">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-black tracking-tight sm:text-4xl">Our Mission</h2>
            <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
              Our mission is to bring joy and convenience to your shopping experience. We believe in quality, affordability, and customer satisfaction. We work tirelessly to source the best products, ensuring that every item in our store meets our high standards.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-black tracking-tight sm:text-4xl">Meet Our Team</h2>
            <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
              We are a group of dedicated professionals who are passionate about what we do.
            </p>
          </div>
          <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((person) => (
              <div key={person.name} className="pt-6">
                <div className="flow-root bg-primary-100 shadow50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-primary-500 rounded-md shadow-lg">
                        <User className="h-24 w-24 text-white" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-black tracking-tight">{person.name}</h3>
                    <p className="mt-5 text-base text-gray-500">
                      {person.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}