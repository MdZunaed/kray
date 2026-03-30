import { siteConfig } from "@/config/site";
import { ShieldCheck, Sparkles } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-white to-secondary-50/40">
      <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-primary-200/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 top-24 h-72 w-72 rounded-full bg-secondary-200/60 blur-3xl" />
      <div className="container relative mx-auto px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white px-4 py-1.5 text-sm font-medium text-primary-800 shadow-sm">
            <Sparkles className="h-4 w-4" />
            Legal
          </p>
        </div>
        <div className="mx-auto max-w-4xl rounded-2xl border border-primary-100 bg-white/90 p-6 shadow-sm backdrop-blur-sm md:p-10">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-8 w-8 text-primary-700" />
            <h1 className="text-3xl font-bold text-primary-900">Privacy Policy</h1>
          </div>
          <p className="mt-2 text-sm text-gray-500">Effective date: March 30, 2026</p>

          <div className="mt-8 space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold text-primary-900">1. Overview</h2>
              <p className="mt-2">
                {siteConfig.name} respects your privacy and is committed to protecting your
                personal information when you use our website and services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-900">2. Information We Collect</h2>
              <p className="mt-2">
                We may collect account information (such as name, email, and password), order
                details, and usage data to provide and improve our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-900">3. How We Use Information</h2>
              <p className="mt-2">
                We use collected data to process orders, manage your account, provide support,
                improve platform experience, and maintain security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-900">4. Data Sharing</h2>
              <p className="mt-2">
                We do not sell your personal information. Data may be shared only with service
                providers needed to operate the store, comply with law, or protect legitimate
                business interests.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-900">5. Data Security</h2>
              <p className="mt-2">
                We apply reasonable administrative and technical safeguards to protect your
                information. No method of transmission or storage is fully secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-900">6. Your Rights</h2>
              <p className="mt-2">
                You may request access, correction, or deletion of your personal information by
                contacting us through the details provided on our contact page.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-900">7. Policy Updates</h2>
              <p className="mt-2">
                We may update this Privacy Policy from time to time. Updates will be posted on
                this page with a revised effective date.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
