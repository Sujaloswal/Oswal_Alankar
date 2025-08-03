import { AuthForm } from "@/components/auth-form"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create a new account with Oswal Alankar.",
}

export default function SignupPage() {
  return (
    <div className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center py-12 px-4 overflow-hidden">
      <Image
        src="/placeholder.svg?height=1080&width=1920"
        alt="Elegant Jewellery Background"
        layout="fill"
        objectFit="cover"
        quality={80}
        className="absolute inset-0 z-0 opacity-40 animate-fade-in"
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-tl from-stone-50/20 to-amber-50/20"></div>{" "}
      {/* Subtle gradient overlay */}
      <div className="relative z-10 w-full max-w-md">
        <AuthForm type="signup" />
      </div>
    </div>
  )
}
