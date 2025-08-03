"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Loader2 } from "lucide-react"

interface AuthFormProps {
  type: "login" | "signup"
}

export function AuthForm({ type }: AuthFormProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    if (type === "signup" && password !== confirmPassword) {
      alert("Passwords do not match!")
      setIsLoading(false)
      return
    }
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log(`${type} submitted:`, { email, password })
    alert(
      `Successfully ${type === "login" ? "logged in" : "signed up"}! (This is a demo, no actual authentication implemented)`,
    )
    setIsLoading(false)
  }

  return (
    <Card className="w-full max-w-md mx-auto shadow-2xl border-stone-200 bg-white/90 backdrop-blur-sm animate-fade-in-up">
      <CardHeader className="text-center">
        <CardTitle className="text-4xl font-serif font-bold text-amber-700">
          {type === "login" ? "Welcome Back!" : "Join Oswal Alankar"}
        </CardTitle>
        <CardDescription className="text-stone-600 mt-2">
          {type === "login"
            ? "Enter your credentials to access your exquisite collection."
            : "Create an account to unlock exclusive designs and offers."}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="email" className="text-stone-700">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-stone-300 focus-visible:ring-amber-700 focus-visible:ring-offset-2 transition-all duration-200"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password" className="text-stone-700">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-stone-300 focus-visible:ring-amber-700 focus-visible:ring-offset-2 transition-all duration-200"
            />
          </div>
          {type === "signup" && (
            <div className="grid gap-2">
              <Label htmlFor="confirm-password" className="text-stone-700">
                Confirm Password
              </Label>
              <Input
                id="confirm-password"
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border-stone-300 focus-visible:ring-amber-700 focus-visible:ring-offset-2 transition-all duration-200"
              />
            </div>
          )}
          <Button
            type="submit"
            className="w-full bg-amber-700 text-amber-50 hover:bg-amber-800 transition-colors shadow-lg py-3 text-lg font-semibold"
            disabled={isLoading}
          >
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {type === "login" ? "Login" : "Sign Up"}
          </Button>
        </form>
        <div className="mt-6 text-center text-sm text-stone-600">
          {type === "login" ? (
            <>
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="underline text-amber-700 hover:text-amber-800 transition-colors">
                Sign up
              </Link>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <Link href="/login" className="underline text-amber-700 hover:text-amber-800 transition-colors">
                Login
              </Link>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
