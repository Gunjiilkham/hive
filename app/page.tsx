import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import FeaturedListings from "@/components/featured-listings"
import CategorySection from "@/components/category-section"
import HowItWorks from "@/components/how-it-works"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-amber-500">Hive</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/listings" className="font-medium transition-colors hover:text-amber-500">
              Browse
            </Link>
            <Link href="/how-it-works" className="font-medium transition-colors hover:text-amber-500">
              How It Works
            </Link>
            <Link href="/about" className="font-medium transition-colors hover:text-amber-500">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Log In
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm" className="bg-amber-500 hover:bg-amber-600">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-amber-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Rent What You Need, Share What You Don't
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl">
                Connect with fellow students to rent textbooks, dorm essentials, and more at a fraction of the cost.
              </p>
              <div className="w-full max-w-md flex items-center space-x-2">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input type="search" placeholder="Search for textbooks, appliances, etc." className="pl-8 bg-white" />
                </div>
                <Button type="submit" className="bg-amber-500 hover:bg-amber-600">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </section>

        <FeaturedListings />
        <CategorySection />
        <HowItWorks />

        <section className="w-full py-12 md:py-24 lg:py-32 bg-amber-500">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                Ready to Join the Hive?
              </h2>
              <p className="max-w-[700px] text-amber-100 md:text-xl">
                Sign up today and start saving money while helping your fellow students.
              </p>
              <Link href="/signup">
                <Button size="lg" className="bg-white text-amber-500 hover:bg-gray-100">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-6 md:h-16">
          <p className="text-sm text-gray-500">© 2025 Hive. All rights reserved.</p>
          <nav className="flex items-center gap-4 text-sm">
            <Link href="/terms" className="text-gray-500 hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="/privacy" className="text-gray-500 hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="/contact" className="text-gray-500 hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

