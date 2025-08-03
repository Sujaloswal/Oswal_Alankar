import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Oswal Alankar for inquiries, support, or appointments.",
}

export default function ContactPage() {
  return <ContactPageClient />
}
