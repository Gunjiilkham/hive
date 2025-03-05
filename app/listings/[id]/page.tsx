import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, MapPin, Clock, AlertCircle, Share2, Heart, Flag } from "lucide-react"

// Mock data for a single listing
const listing = {
  id: 1,
  title: "Calculus: Early Transcendentals (8th Edition)",
  category: "Textbooks",
  price: 15,
  period: "week",
  deposit: 50,
  image: "/placeholder.svg?height=400&width=600",
  images: [
    "/placeholder.svg?height=100&width=100",
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
}

export default function ListingDetailPage() {
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
              <Badge className="bg-amber-500">{listing.category}</Badge>
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
                <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                <Star className="h-4 w-4 fill-amber-500 text-amber-500 opacity-50" />
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

              <Button className="w-full mt-4 bg-amber-500 hover:bg-amber-600">Request to Rent</Button>

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
                        className={`h-4 w-4 ${i < review.rating ? "fill-amber-500 text-amber-500" : "text-gray-300"}`}
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

