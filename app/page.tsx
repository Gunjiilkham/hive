import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import FeaturedListings from "@/components/featured-listings"
import CategorySection from "@/components/category-section"
import HowItWorks from "@/components/how-it-works"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-black text-white">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-14 h-14">
              <Image 
                src="/images/hive-logo.png" 
                alt="Hive Logo" 
                fill 
                className="object-contain"
                priority
              />
            </div>
            <span className="text-2xl font-bold text-yellow-400">Hive</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/listings" className="font-medium transition-colors hover:text-yellow-400 rounded-full px-3 py-1 hover:bg-black/10">
              Browse
            </Link>
            <Link href="/how-it-works" className="font-medium transition-colors hover:text-yellow-400 rounded-full px-3 py-1 hover:bg-black/10">
              How It Works
            </Link>
            <Link href="/about" className="font-medium transition-colors hover:text-yellow-400 rounded-full px-3 py-1 hover:bg-black/10">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/login">
              <Button variant="ghost" size="sm" className="text-white hover:text-yellow-400 font-medium rounded-full">
                Log In
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-full">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#42A5F5] text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
                Rent What You Need,<br className="hidden sm:inline" /> Share What You Don't
              </h1>
              <p className="max-w-[700px] text-gray-100 md:text-xl">
                Connect with fellow students to rent textbooks, dorm essentials, and more at a fraction of the cost.
              </p>
              <div className="w-full max-w-md flex items-center space-x-2">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input type="search" placeholder="Search for textbooks, appliances, etc." className="pl-8 bg-white text-black" />
                </div>
                <Button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </section>

        <FeaturedListings />
        <CategorySection />
        <HowItWorks />

        <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                Ready to Join the Hive?
              </h2>
              <p className="max-w-[700px] text-gray-300 md:text-xl">
                Sign up today and start saving money while helping your fellow students.
              </p>
              <Link href="/signup">
                <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold px-8 py-6 text-lg mt-4 rounded-full">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0 bg-gray-100">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-6 md:h-20">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image 
                src="/images/hive-logo.png" 
                alt="Hive Logo" 
                fill 
                className="object-contain"
              />
            </div>
            <p className="text-base text-gray-600 font-medium">© 2025 Hive. All rights reserved.</p>
          </div>
          <nav className="flex items-center gap-6 text-base">
            <Link href="/terms" className="text-gray-600 hover:text-black hover:underline underline-offset-4 rounded-full px-3 py-1 hover:bg-gray-200">
              Terms
            </Link>
            <Link href="/privacy" className="text-gray-600 hover:text-black hover:underline underline-offset-4 rounded-full px-3 py-1 hover:bg-gray-200">
              Privacy
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-black hover:underline underline-offset-4 rounded-full px-3 py-1 hover:bg-gray-200">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

