import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Oswal Alankar jewellery shop",
}

export default function PrivacyPage() {
  return (
    <div className="relative bg-stone-50 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-serif font-bold text-amber-700 mb-4">Privacy Policy</h1>
            <p className="text-xl text-stone-700">
              How we collect, use, and protect your information.
            </p>
          </div>

          <div className="bg-white/90 p-8 md:p-12 rounded-xl shadow-2xl border border-stone-200 backdrop-blur-sm">
            <div className="prose prose-stone max-w-none">
              <div className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-stone-800 mb-4">1. Introduction</h2>
                <p className="text-stone-700 mb-4">
                  Oswal Alankar ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our shop or use our services.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-stone-800 mb-4">2. Information We Collect</h2>
                <h3 className="text-xl font-semibold text-stone-800 mb-3">Personal Information</h3>
                <p className="text-stone-700 mb-4">
                  We may collect the following personal information:
                </p>
                <ul className="list-disc list-inside text-stone-700 mb-4 space-y-2">
                  <li>Name and contact details</li>
                  <li>Phone numbers</li>
                  <li>Email addresses (if provided)</li>
                  <li>Address information</li>
                  <li>Purchase history and preferences</li>
                </ul>

                <h3 className="text-xl font-semibold text-stone-800 mb-3">Website Information</h3>
                <p className="text-stone-700 mb-4">
                  When you visit our website, we may collect:
                </p>
                <ul className="list-disc list-inside text-stone-700 mb-4 space-y-2">
                  <li>IP address and browser information</li>
                  <li>Pages visited and time spent</li>
                  <li>Device information</li>
                  <li>Cookies and similar technologies</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-stone-800 mb-4">3. How We Use Your Information</h2>
                <p className="text-stone-700 mb-4">
                  We use the collected information for:
                </p>
                <ul className="list-disc list-inside text-stone-700 mb-4 space-y-2">
                  <li>Processing your jewellery purchases</li>
                  <li>Providing customer service and support</li>
                  <li>Sending order confirmations and updates</li>
                  <li>Improving our products and services</li>
                  <li>Complying with legal obligations</li>
                  <li>Marketing communications (with your consent)</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-stone-800 mb-4">4. Information Sharing</h2>
                <p className="text-stone-700 mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-stone-700 mb-4 space-y-2">
                  <li>With your explicit consent</li>
                  <li>To comply with legal requirements</li>
                  <li>To protect our rights and safety</li>
                  <li>With trusted service providers who assist in our operations</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-stone-800 mb-4">5. Data Security</h2>
                <p className="text-stone-700 mb-4">
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <p className="text-stone-700 mb-4">
                  However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-stone-800 mb-4">6. Data Retention</h2>
                <p className="text-stone-700 mb-4">
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-stone-800 mb-4">7. Your Rights</h2>
                <p className="text-stone-700 mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-stone-700 mb-4 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Withdraw consent for marketing communications</li>
                  <li>Lodge a complaint with relevant authorities</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-stone-800 mb-4">8. Cookies and Tracking</h2>
                <p className="text-stone-700 mb-4">
                  Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie settings through your browser preferences.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-stone-800 mb-4">9. Third-Party Links</h2>
                <p className="text-stone-700 mb-4">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-stone-800 mb-4">10. Children's Privacy</h2>
                <p className="text-stone-700 mb-4">
                  Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-stone-800 mb-4">11. Changes to This Policy</h2>
                <p className="text-stone-700 mb-4">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-stone-800 mb-4">12. Contact Us</h2>
                <p className="text-stone-700 mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <ul className="list-disc list-inside text-stone-700 mb-4 space-y-2">
                  <li>Phone: +91 8149829797 (Bharat Oswal)</li>
                  <li>Phone: +91 9822299998 (Nitin Oswal)</li>
                  <li>Address: Shop No 43 C Ward, Gujari Rd, near by H F Jewellers, Bazar, Kolhapur, Maharashtra 416002</li>
                </ul>
              </div>

              <div className="text-center mt-12 pt-8 border-t border-stone-200">
                <p className="text-sm text-stone-600">
                  Last updated: {new Date().toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 