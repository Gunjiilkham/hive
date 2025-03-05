import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

interface Listing {
  id: number
  title: string
  category: string
  price: number
  period: string
  image: string
  owner: string
  location: string
  rating: number
}

interface ListingCardProps {
  listing: Listing
}

export default function ListingCard({ listing }: ListingCardProps) {
  return (
    <Link href={`/listings/${listing.id}`}>
      <Card className="overflow-hidden transition-all hover:shadow-md h-full flex flex-col">
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={listing.image || "/placeholder.svg"}
            alt={listing.title}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
          <Badge className="absolute top-2 right-2 bg-amber-500">{listing.category}</Badge>
        </div>
        <CardHeader className="p-4">
          <CardTitle className="line-clamp-1">{listing.title}</CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0 flex-grow">
          <p className="text-sm text-gray-500">{listing.location}</p>
          <div className="flex items-center mt-2">
            <Star className="h-4 w-4 fill-amber-500 text-amber-500 mr-1" />
            <span className="text-sm font-medium">{listing.rating}</span>
          </div>
        </CardContent>
        <CardFooter className="p-4 flex items-center justify-between border-t">
          <p className="text-sm text-gray-500">By {listing.owner}</p>
          <p className="font-medium">
            ${listing.price}/{listing.period}
          </p>
        </CardFooter>
      </Card>
    </Link>
  )
}

