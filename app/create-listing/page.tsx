"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Upload, X } from "lucide-react"

export default function CreateListingPage() {
  const [images, setImages] = useState<string[]>(["/placeholder.svg?height=100&width=100"])

  const addImage = () => {
    if (images.length < 5) {
      setImages([...images, "/placeholder.svg?height=100&width=100"])
    }
  }

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index))
  }

  return (
    <div className="container max-w-4xl py-8 px-4 md:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Create a New Listing</h1>
        <p className="text-gray-500 mt-2">Share your items with fellow students and earn some extra cash.</p>
      </div>

      <Tabs defaultValue="details" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="details">Item Details</TabsTrigger>
          <TabsTrigger value="photos">Photos</TabsTrigger>
          <TabsTrigger value="pricing">Pricing & Availability</TabsTrigger>
        </TabsList>

        <TabsContent value="details">
          <Card>
            <CardHeader>
              <CardTitle>Item Details</CardTitle>
              <CardDescription>Provide information about the item you want to rent out.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="e.g., Calculus Textbook 8th Edition" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="textbooks">Textbooks</SelectItem>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="appliances">Appliances</SelectItem>
                    <SelectItem value="furniture">Furniture</SelectItem>
                    <SelectItem value="clothing">Clothing</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your item in detail. Include condition, features, and any other relevant information."
                  rows={5}
                />
              </div>

              <div className="space-y-2">
                <Label>Condition</Label>
                <RadioGroup defaultValue="like-new">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="like-new" id="like-new" />
                    <Label htmlFor="like-new">Like New</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="very-good" id="very-good" />
                    <Label htmlFor="very-good">Very Good</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="good" id="good" />
                    <Label htmlFor="good">Good</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="acceptable" id="acceptable" />
                    <Label htmlFor="acceptable">Acceptable</Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="bg-amber-500 hover:bg-amber-600">Next: Photos</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="photos">
          <Card>
            <CardHeader>
              <CardTitle>Photos</CardTitle>
              <CardDescription>
                Add up to 5 photos of your item. Clear photos increase your chances of renting out your item.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {images.map((image, index) => (
                  <div key={index} className="relative aspect-square border rounded-md overflow-hidden">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Item preview ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <Button
                      variant="destructive"
                      size="icon"
                      className="absolute top-2 right-2 h-6 w-6"
                      onClick={() => removeImage(index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}

                {images.length < 5 && (
                  <button
                    onClick={addImage}
                    className="flex flex-col items-center justify-center aspect-square border border-dashed rounded-md p-4 hover:bg-gray-50"
                  >
                    <Upload className="h-8 w-8 text-gray-400 mb-2" />
                    <span className="text-sm text-gray-500">Add Photo</span>
                  </button>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Back</Button>
              <Button className="bg-amber-500 hover:bg-amber-600">Next: Pricing</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="pricing">
          <Card>
            <CardHeader>
              <CardTitle>Pricing & Availability</CardTitle>
              <CardDescription>Set your rental rates and when your item is available.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="daily-rate">Daily Rate ($)</Label>
                  <Input id="daily-rate" type="number" min="0" step="0.01" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="weekly-rate">Weekly Rate ($)</Label>
                  <Input id="weekly-rate" type="number" min="0" step="0.01" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="monthly-rate">Monthly Rate ($)</Label>
                  <Input id="monthly-rate" type="number" min="0" step="0.01" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="deposit">Security Deposit ($)</Label>
                  <Input id="deposit" type="number" min="0" step="0.01" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Pickup/Dropoff Location</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="north">North Campus</SelectItem>
                    <SelectItem value="south">South Campus</SelectItem>
                    <SelectItem value="east">East Campus</SelectItem>
                    <SelectItem value="west">West Campus</SelectItem>
                    <SelectItem value="library">Main Library</SelectItem>
                    <SelectItem value="student-center">Student Center</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Availability</Label>
                <RadioGroup defaultValue="available-now">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="available-now" id="available-now" />
                    <Label htmlFor="available-now">Available Now</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="available-later" id="available-later" />
                    <Label htmlFor="available-later">Available Later (Specify Dates)</Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Back</Button>
              <Button className="bg-amber-500 hover:bg-amber-600">Create Listing</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

