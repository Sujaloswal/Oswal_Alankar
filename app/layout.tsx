import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google" // Import Playfair_Display
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" }) // Define Playfair_Display

export const metadata: Metadata = {
  title: {
    default: "Oswal Alankar - Exquisite Jewellery",
    template: "%s | Oswal Alankar",
  },
  description:
    "Discover exquisite gold and silver jewellery from Oswal Alankar, a legacy of elegance and craftsmanship.",
  generator: 'v0.dev',
  icons: {
    icon: 'public/Grey_Modern_Clean_Special_Promo_Jewelry_Instagram_Post-removebg-preview.png',
    shortcut: '/placeholder-logo.png',
    apple: '/placeholder-logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-stone-50 text-stone-800`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
