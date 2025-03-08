import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const featuredListings = [
  {
    id: 1,
    title: "Calculus: Early Transcendentals",
    category: "Textbooks",
    price: 15,
    period: "week",
    image: "/placeholder.svg?height=200&width=300",
    owner: "Alex K.",
    location: "North Campus",
  },
  {
    id: 2,
    title: "Mini Refrigerator",
    category: "Appliances",
    price: 25,
    period: "month",
    image: "/placeholder.svg?height=200&width=300",
    owner: "Jamie L.",
    location: "East Dorms",
  },
  {
    id: 3,
    title: "TI-84 Plus Calculator",
    category: "Electronics",
    price: 8,
    period: "week",
    image: "/placeholder.svg?height=200&width=300",
    owner: "Taylor S.",
    location: "West Campus",
  },
  {
    id: 4,
    title: "Psychology 101 Textbook",
    category: "Textbooks",
    price: 12,
    period: "week",
    image: "/placeholder.svg?height=200&width=300",
    owner: "Morgan P.",
    location: "South Dorms",
  },
]

export default function FeaturedListings() {
  return (
    <section className="w-full py-12 md:py-24 bg-gray-100">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Listings</h2>
          <p className="max-w-[700px] text-gray-600 md:text-xl">Check out what other students are renting right now.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {featuredListings.map((listing) => (
            <Link href={`/listings/${listing.id}`} key={listing.id} className="group">
              <Card className="overflow-hidden transition-all hover:shadow-md bg-white">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={listing.image || "/placeholder.svg"}
                    alt={listing.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <Badge className="absolute top-2 right-2 bg-yellow-400 text-black">{listing.category}</Badge>
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="line-clamp-1">{listing.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm text-gray-600">{listing.location}</p>
                </CardContent>
                <CardFooter className="p-4 flex items-center justify-between border-t">
                  <p className="text-sm text-gray-600">By {listing.owner}</p>
                  <p className="font-medium">
                    ${listing.price}/{listing.period}
                  </p>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/listings">
            <Badge variant="outline" className="text-base py-2 px-4 hover:bg-blue-500 hover:text-white cursor-pointer border-blue-500 text-blue-500">
              View All Listings
            </Badge>
          </Link>
        </div>
      </div>
    </section>
  )
}

