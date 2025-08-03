import Link from "next/link"
import Image from "next/image"
import { Home, Crown, Sparkles, Users, Phone, LogIn, UserPlus } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity group"
        >
          <div className="relative w-14 h-14 md:w-20 md:h-20 translate-y-1">
            <Image
              src="/Grey_Modern_Clean_Special_Promo_Jewelry_Instagram_Post-removebg-preview.png"
              alt="Oswal Alankar Jewellery"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="hidden md:block font-serif text-amber-700 text-xl font-bold tracking-wide group-hover:text-amber-800 transition-colors">
            Oswal Alankar
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-stone-700 hover:text-amber-700 transition-colors relative group"
          >
            <Home className="h-4 w-4" />
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-700 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/gold"
            className="flex items-center gap-2 text-sm font-medium text-stone-700 hover:text-amber-700 transition-colors relative group"
          >
            <Crown className="h-4 w-4" />
            Gold
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-700 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/silver"
            className="flex items-center gap-2 text-sm font-medium text-stone-700 hover:text-amber-700 transition-colors relative group"
          >
            <Sparkles className="h-4 w-4" />
            Silver
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-700 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/about"
            className="flex items-center gap-2 text-sm font-medium text-stone-700 hover:text-amber-700 transition-colors relative group"
          >
            <Users className="h-4 w-4" />
            About Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-700 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2 text-sm font-medium text-stone-700 hover:text-amber-700 transition-colors relative group"
          >
            <Phone className="h-4 w-4" />
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-700 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="ghost"
            className="flex items-center gap-2 text-stone-700 hover:text-amber-700 hover:bg-amber-50 transition-colors"
          >
            <Link href="/login">
              <LogIn className="h-4 w-4" />
              Login
            </Link>
          </Button>
          <Button asChild className="flex items-center gap-2 bg-amber-700 text-amber-50 hover:bg-amber-800 transition-colors shadow-md">
            <Link href="/signup">
              <UserPlus className="h-4 w-4" />
              Sign Up
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
