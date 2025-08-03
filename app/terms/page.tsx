import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for Oswal Alankar jewellery shop",
}

export default function TermsPage() {
  return (
    <div className="relative bg-stone-50 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-serif font-bold text-amber-700 mb-4">Terms of Service</h1>
            <p className="text-xl text-stone-700">
              Please read these terms carefully before using our services.
            </p>
          </div>

          <div className="bg-white/90 p-8 md:p-12 rounded-xl shadow-2xl border border-stone-200 backdrop-blur-sm">
            <div className="prose prose-stone max-w-none">
              <div className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-stone-800 mb-4">1. Acceptance of Terms</h2>
                <p className="text-stone-700 mb-4">
                  By accessing and using the services of Oswal Alankar, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-stone-800 mb-4">2. About Oswal Alankar</h2>
                <p className="text-stone-700 mb-4">
                  Oswal Alankar is a jewellery shop located at Shop No 43 C Ward, Gujari Rd, near by H F Jewellers, Bazar, Kolhapur, Maharashtra 416002, India.
                </p>
                <p className="text-stone-700 mb-4">
                  Owners: Bharat Rupchand Oswal & Nitin Rupchand Oswal
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-stone-800 mb-4">3. Products and Services</h2>
                <p className="text-stone-700 mb-4">
                  We specialize in gold and silver jewellery, offering a wide range of traditional and contemporary designs.
                </p>
                <ul className="list-disc list-inside text-stone-700 mb-4 space-y-2">
                  <li>Gold jewellery (22K, 18K, 14K)</li>
                  <li>Silver jewellery</li>
                  <li>Custom designs and modifications</li>
                  <li>Jewellery repair and maintenance</li>
                  <li>Valuation services</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-stone-800 mb-4">4. Pricing and Payment</h2>
                <p className="text-stone-700 mb-4">
                  All prices are subject to change based on current market rates for precious metals.
                </p>
                <p className="text-stone-700 mb-4">
                  Payment can be made in cash, card, or through digital payment methods as accepted by the shop.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-stone-800 mb-4">5. Quality and Certification</h2>
                <p className="text-stone-700 mb-4">
                  All our jewellery comes with proper certification and hallmarking as per Indian standards.
                </p>
                <p className="text-stone-700 mb-4">
                  We guarantee the quality and purity of all our products.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-stone-800 mb-4">6. Return and Exchange Policy</h2>
                <p className="text-stone-700 mb-4">
                  Returns and exchanges are subject to our shop's policy and the condition of the jewellery.
                </p>
                <p className="text-stone-700 mb-4">
                  Custom-made jewellery may have different return policies.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-stone-800 mb-4">7. Business Hours</h2>
                <p className="text-stone-700 mb-4">
                  Our shop is open from Monday to Sunday, 10:00 AM to 8:00 PM, except Saturdays when we are closed.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-stone-800 mb-4">8. Contact Information</h2>
                <p className="text-stone-700 mb-4">
                  For any queries regarding these terms, please contact us:
                </p>
                <ul className="list-disc list-inside text-stone-700 mb-4 space-y-2">
                  <li>Phone: +91 8149829797 (Bharat Oswal)</li>
                  <li>Phone: +91 9822299998 (Nitin Oswal)</li>
                  <li>Address: Shop No 43 C Ward, Gujari Rd, near by H F Jewellers, Bazar, Kolhapur, Maharashtra 416002</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-stone-800 mb-4">9. Changes to Terms</h2>
                <p className="text-stone-700 mb-4">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-stone-800 mb-4">10. Governing Law</h2>
                <p className="text-stone-700 mb-4">
                  These terms shall be governed by and construed in accordance with the laws of India.
                </p>
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