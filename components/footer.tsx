import Link from "next/link"
import { Gem, Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white py-10 text-stone-700">
      <div className="container flex flex-col items-center justify-between gap-6 px-4 md:flex-row md:px-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link
            href="/"
            className="flex items-center gap-2 font-serif text-amber-700 hover:text-amber-800 transition-colors group"
          >
            <Gem className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-xl font-bold tracking-wide">Oswal Alankar</span>
          </Link>
          <p className="text-sm text-stone-600 text-center md:text-left mt-2">
            &copy; {new Date().getFullYear()} Oswal Alankar. All rights reserved.
            <br />
            Owners: Bharat Rupchand Oswal & Nitin Rupchand Oswal
          </p>
        </div>
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm md:gap-x-10 md:gap-y-0">
          <Link href="/about" className="hover:text-amber-700 transition-colors relative group">
            About Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-700 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/contact" className="hover:text-amber-700 transition-colors relative group">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-700 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/privacy" className="hover:text-amber-700 transition-colors relative group">
            Privacy Policy
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-700 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/terms" className="hover:text-amber-700 transition-colors relative group">
            Terms of Service
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-700 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="#" className="text-stone-700 hover:text-amber-700 transition-colors">
            <Facebook className="h-6 w-6" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="#" className="text-stone-700 hover:text-amber-700 transition-colors">
            <Instagram className="h-6 w-6" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="#" className="text-stone-700 hover:text-amber-700 transition-colors">
            <Twitter className="h-6 w-6" />
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
