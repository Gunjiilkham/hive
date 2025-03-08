import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, MapPin, Clock, AlertCircle, Share2, Heart, Flag } from "lucide-react"
import { notFound } from "next/navigation"

// Define types for our listings
interface Review {
  id: number
  user: string
  avatar: string
  rating: number
  date: string
  comment: string
}

interface Owner {
  name: string
  image: string
  rating: number
  reviews: number
  joined: string
}

interface Listing {
  id: number
  title: string
  category: string
  price: number
  period: string
  deposit: number
  image: string
  images: string[]
  description: string
  condition: string
  owner: Owner
  location: string
  availability: string
  reviews: Review[]
}

// Mock data for listings
const listings: Record<string, Listing> = {
  "1": {
    id: 1,
    title: "Calculus: Early Transcendentals (8th Edition)",
    category: "Textbooks",
    price: 15,
    period: "week",
    deposit: 50,
    image: "/images/textbooks/calculus-stewart-8th.jpg",
    images: [
      "/images/textbooks/calculus-stewart-8th.jpg",
      "/placeholder.svg?height=100&width=100",
      "/placeholder.svg?height=100&width=100",
      "/placeholder.svg?height=100&width=100",
    ],
    description:
      "This is the standard calculus textbook used in Math 101 and 102. In excellent condition with no highlighting or notes. Perfect for students who don't want to buy the expensive new version for just one semester.",
    condition: "Like New",
    owner: {
      name: "Alex K.",
      image: "/placeholder.svg?height=40&width=40",
      rating: 4.8,
      reviews: 24,
      joined: "Sep 2023",
    },
    location: "North Campus Library",
    availability: "Available Now",
    reviews: [
      {
        id: 1,
        user: "Jamie L.",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 5,
        date: "October 15, 2024",
        comment:
          "The book was in perfect condition and Alex was very flexible with pickup times. Would definitely rent from again!",
      },
      {
        id: 2,
        user: "Taylor S.",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 4,
        date: "September 28, 2024",
        comment:
          "Great textbook, saved me a lot of money. Only giving 4 stars because the pickup location was a bit far from my dorm.",
      },
    ],
  },
  "2": {
    id: 2,
    title: "Mini Refrigerator",
    category: "Appliances",
    price: 25,
    period: "month",
    deposit: 75,
    image: "/images/appliances/mini.jpg",
    images: [
      "/images/appliances/mini.jpg",
      "/placeholder.svg?height=100&width=100",
      "/placeholder.svg?height=100&width=100",
      "/placeholder.svg?height=100&width=100",
    ],
    description:
      "Compact 3.2 cubic feet mini refrigerator, perfect for dorm rooms. Includes a small freezer compartment and adjustable shelves. Energy efficient and quiet operation.",
    condition: "Good",
    owner: {
      name: "Jamie L.",
      image: "/placeholder.svg?height=40&width=40",
      rating: 4.5,
      reviews: 18,
      joined: "Aug 2023",
    },
    location: "East Dorms",
    availability: "Available Now",
    reviews: [
      {
        id: 1,
        user: "Morgan P.",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 5,
        date: "November 2, 2024",
        comment:
          "The mini fridge was clean and worked perfectly. Jamie was very helpful with delivery and pickup.",
      },
      {
        id: 2,
        user: "Casey R.",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 4,
        date: "October 15, 2024",
        comment:
          "Good fridge, kept everything cold. Only issue was a small dent on the side, but it didn't affect functionality.",
      },
    ],
  },
  "3": {
    id: 3,
    title: "TI-84 Plus Calculator",
    category: "Electronics",
    price: 8,
    period: "week",
    deposit: 40,
    image: "/images/electronics/calculator.jpg",
    images: [
      "/images/electronics/calculator.jpg",
      "/placeholder.svg?height=100&width=100",
      "/placeholder.svg?height=100&width=100",
      "/placeholder.svg?height=100&width=100",
    ],
    description:
      "TI-84 Plus graphing calculator, essential for math, science, and engineering courses. All buttons work perfectly and screen is clear with no dead pixels. Comes with fresh batteries and USB cable.",
    condition: "Excellent",
    owner: {
      name: "Taylor S.",
      image: "/placeholder.svg?height=40&width=40",
      rating: 4.9,
      reviews: 32,
      joined: "Oct 2023",
    },
    location: "West Campus",
    availability: "Available Now",
    reviews: [
      {
        id: 1,
        user: "Riley T.",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 5,
        date: "November 10, 2024",
        comment:
          "Saved me so much money! Calculator works perfectly and Taylor was super responsive.",
      },
      {
        id: 2,
        user: "Jordan B.",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 5,
        date: "October 22, 2024",
        comment:
          "Calculator was in great condition and had all the programs I needed already installed. Highly recommend!",
      },
    ],
  },
  "4": {
    id: 4,
    title: "Psychology 101 Textbook",
    category: "Textbooks",
    price: 12,
    period: "week",
    deposit: 45,
    image: "/images/textbooks/psyc101.jpg",
    images: [
      "/images/textbooks/psyc101.jpg",
      "/placeholder.svg?height=100&width=100",
      "/placeholder.svg?height=100&width=100",
      "/placeholder.svg?height=100&width=100",
    ],
    description:
      "Introduction to Psychology textbook, required for PSYC 101. Contains all the essential concepts and theories with minimal highlighting. Perfect condition with no torn or missing pages.",
    condition: "Very Good",
    owner: {
      name: "Morgan P.",
      image: "/placeholder.svg?height=40&width=40",
      rating: 4.7,
      reviews: 15,
      joined: "Sep 2023",
    },
    location: "South Dorms",
    availability: "Available Now",
    reviews: [
      {
        id: 1,
        user: "Quinn P.",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 5,
        date: "November 5, 2024",
        comment:
          "Morgan was great to work with and the textbook was in perfect condition. Saved me over $100!",
      },
      {
        id: 2,
        user: "Alex K.",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 4,
        date: "October 18, 2024",
        comment:
          "The book had a few more highlights than I expected, but overall it was in good condition and worked well for my class.",
      },
    ],
  },
}

export default function ListingDetailPage({ params }: { params: { id: string } }) {
  const listing = listings[params.id]
  
  if (!listing) {
    notFound()
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Images */}
        <div className="lg:col-span-2 space-y-4">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image src={listing.image || "/placeholder.svg"} alt={listing.title} fill className="object-cover" />
          </div>
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {listing.images.map((img, index) => (
              <div key={index} className="relative w-24 h-24 flex-shrink-0 rounded-md overflow-hidden">
                <Image
                  src={img || "/placeholder.svg"}
                  alt={`${listing.title} - image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Details and Booking */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between">
              <Badge className="bg-yellow-400 text-black">{listing.category}</Badge>
              <div className="flex space-x-2">
                <Button variant="ghost" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Flag className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <h1 className="text-2xl font-bold mt-2">{listing.title}</h1>
            <div className="flex items-center mt-2">
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 opacity-50" />
              </div>
              <span className="ml-2 text-sm font-medium">
                {listing.owner.rating} ({listing.owner.reviews} reviews)
              </span>
            </div>
            <div className="flex items-center mt-2 text-sm text-gray-500">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{listing.location}</span>
            </div>
            <div className="flex items-center mt-1 text-sm text-gray-500">
              <Clock className="h-4 w-4 mr-1" />
              <span>{listing.availability}</span>
            </div>
          </div>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold">${listing.price}</span>
                  <span className="text-gray-500">/{listing.period}</span>
                </div>
                <div className="text-sm text-gray-500">${listing.deposit} deposit</div>
              </div>

              <div className="mt-4">
                <Calendar mode="single" className="rounded-md border" />
              </div>

              <Button className="w-full mt-4 bg-yellow-400 hover:bg-yellow-500 text-black">Request to Rent</Button>

              <div className="flex items-center justify-center mt-4 text-sm text-gray-500">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span>You won't be charged yet</span>
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={listing.owner.image} alt={listing.owner.name} />
              <AvatarFallback>{listing.owner.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-medium">Listed by {listing.owner.name}</h3>
              <p className="text-sm text-gray-500">Joined {listing.owner.joined}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Tabs defaultValue="details">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="policies">Policies</TabsTrigger>
          </TabsList>
          <TabsContent value="details" className="mt-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">Description</h3>
                <p className="mt-2 text-gray-700">{listing.description}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Condition</h3>
                <p className="mt-2 text-gray-700">{listing.condition}</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="mt-4">
            <div className="space-y-6">
              {listing.reviews.map((review) => (
                <div key={review.id} className="border-b pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={review.avatar} alt={review.user} />
                        <AvatarFallback>{review.user.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{review.user}</span>
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <p className="mt-2 text-gray-700">{review.comment}</p>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="policies" className="mt-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">Rental Policy</h3>
                <ul className="mt-2 space-y-2 text-gray-700 list-disc list-inside">
                  <li>Items must be returned in the same condition as received</li>
                  <li>Late returns will incur additional daily charges</li>
                  <li>Deposit will be refunded upon successful return</li>
                  <li>Cancellations must be made at least 24 hours in advance</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium">Damage Policy</h3>
                <p className="mt-2 text-gray-700">
                  Any damage beyond normal wear and tear may result in partial or full loss of deposit. All damages must
                  be reported immediately.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

