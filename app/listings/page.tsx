import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import ListingCard from "@/components/listing-card"
import { Search, SlidersHorizontal } from "lucide-react"

// Mock data for listings
const listings = [
  {
    id: 1,
    title: "Calculus: Early Transcendentals (8th Edition)",
    category: "Textbooks",
    price: 15,
    period: "week",
    image: "/images/textbooks/calculus-stewart-8th.jpg",
    owner: "Alex K.",
    location: "North Campus",
    rating: 4.8,
  },
  {
    id: 2,
    title: "Mini Refrigerator",
    category: "Appliances",
    price: 25,
    period: "month",
    image: "/images/appliances/mini.jpg",
    owner: "Jamie L.",
    location: "East Dorms",
    rating: 4.5,
  },
  {
    id: 3,
    title: "TI-84 Plus Calculator",
    category: "Electronics",
    price: 8,
    period: "week",
    image: "/images/electronics/calculator.jpg",
    owner: "Taylor S.",
    location: "West Campus",
    rating: 4.9,
  },
  {
    id: 4,
    title: "Psychology 101 Textbook",
    category: "Textbooks",
    price: 12,
    period: "week",
    image: "/images/textbooks/psyc101.jpg",
    owner: "Morgan P.",
    location: "South Dorms",
    rating: 4.7,
  },
  {
    id: 5,
    title: "Desk Lamp",
    category: "Furniture",
    price: 5,
    period: "week",
    image: "/placeholder.svg?height=200&width=300",
    owner: "Jordan B.",
    location: "Central Campus",
    rating: 4.6,
  },
  {
    id: 6,
    title: "Bluetooth Speaker",
    category: "Electronics",
    price: 10,
    period: "week",
    image: "/placeholder.svg?height=200&width=300",
    owner: "Casey R.",
    location: "North Campus",
    rating: 4.4,
  },
  {
    id: 7,
    title: "Chemistry Lab Coat",
    category: "Clothing",
    price: 6,
    period: "week",
    image: "/placeholder.svg?height=200&width=300",
    owner: "Riley T.",
    location: "Science Building",
    rating: 4.8,
  },
  {
    id: 8,
    title: "Microwave Oven",
    category: "Appliances",
    price: 15,
    period: "month",
    image: "/placeholder.svg?height=200&width=300",
    owner: "Quinn P.",
    location: "West Dorms",
    rating: 4.3,
  },
]

export default function ListingsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 py-6">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            {/* Filters Sidebar */}
            <div className="w-full md:w-64 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Filters</h2>
                <Button variant="ghost" size="sm" className="text-[#42A5F5] hover:text-blue-600">
                  Reset
                </Button>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Category</h3>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="textbooks">Textbooks</SelectItem>
                      <SelectItem value="appliances">Appliances</SelectItem>
                      <SelectItem value="electronics">Electronics</SelectItem>
                      <SelectItem value="furniture">Furniture</SelectItem>
                      <SelectItem value="clothing">Clothing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Location</h3>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All Locations" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Locations</SelectItem>
                      <SelectItem value="north">North Campus</SelectItem>
                      <SelectItem value="south">South Campus</SelectItem>
                      <SelectItem value="east">East Campus</SelectItem>
                      <SelectItem value="west">West Campus</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Price Range</h3>
                    <span className="text-sm text-gray-500">$0 - $50</span>
                  </div>
                  <Slider defaultValue={[50]} max={100} step={1} />
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Rental Period</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="day" />
                      <label htmlFor="day" className="text-sm">
                        Day
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="week" defaultChecked />
                      <label htmlFor="week" className="text-sm">
                        Week
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="month" defaultChecked />
                      <label htmlFor="month" className="text-sm">
                        Month
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="semester" />
                      <label htmlFor="semester" className="text-sm">
                        Semester
                      </label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Availability</h3>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="available-now" defaultChecked />
                    <label htmlFor="available-now" className="text-sm">
                      Available Now
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h1 className="text-2xl font-bold">All Listings</h1>
                <div className="flex items-center w-full sm:w-auto gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <Input type="search" placeholder="Search listings..." className="pl-8" />
                  </div>
                  <Button variant="outline" size="icon" className="hidden sm:flex">
                    <SlidersHorizontal className="h-4 w-4" />
                  </Button>
                  <Select defaultValue="newest">
                    <SelectTrigger className="w-[130px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {listings.map((listing) => (
                  <ListingCard key={listing.id} listing={listing} />
                ))}
              </div>

              <div className="flex justify-center mt-8">
                <Button variant="outline" className="mr-2">
                  Previous
                </Button>
                <Button variant="outline" className="bg-yellow-400 text-black hover:bg-yellow-500">
                  1
                </Button>
                <Button variant="outline" className="mx-1">
                  2
                </Button>
                <Button variant="outline" className="mx-1">
                  3
                </Button>
                <Button variant="outline" className="ml-2">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

