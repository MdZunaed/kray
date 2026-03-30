import { siteConfig } from "@/config/site";
import { Scale, Sparkles } from "lucide-react";

export default function TermsAndConditionsPage() {
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
            <Scale className="h-8 w-8 text-primary-700" />
            <h1 className="text-3xl font-bold text-primary-900">Terms & Conditions</h1>
          </div>
          <p className="mt-2 text-sm text-gray-500">Effective date: March 30, 2026</p>

          <div className="mt-8 space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold text-primary-900">1. Acceptance of Terms</h2>
              <p className="mt-2">
                By accessing or using {siteConfig.name}, you agree to these Terms & Conditions.
                If you do not agree, please discontinue use of the platform.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-900">2. Accounts</h2>
              <p className="mt-2">
                You are responsible for keeping your account credentials secure and for all
                activities that occur under your account.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-900">3. Orders and Payments</h2>
              <p className="mt-2">
                All orders are subject to acceptance and availability. Prices and offers may
                change without prior notice. You agree to provide valid payment and billing
                information for purchases.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-900">4. Shipping and Delivery</h2>
              <p className="mt-2">
                Delivery estimates are provided for convenience and may vary. Delays caused by
                carriers, weather, or other external factors are beyond our direct control.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-900">5. Returns and Refunds</h2>
              <p className="mt-2">
                Return and refund eligibility depends on item condition and return window rules.
                Approved refunds are issued to the original payment method where possible.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-900">6. Prohibited Use</h2>
              <p className="mt-2">
                You may not misuse the service, attempt unauthorized access, disrupt operations,
                or use the platform for unlawful activities.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-900">7. Limitation of Liability</h2>
              <p className="mt-2">
                To the maximum extent permitted by law, {siteConfig.name} is not liable for
                indirect, incidental, or consequential damages arising from use of the service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-900">8. Changes to Terms</h2>
              <p className="mt-2">
                We may update these Terms & Conditions from time to time. Continued use after
                updates indicates acceptance of the revised terms.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
