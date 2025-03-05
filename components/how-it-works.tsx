import { Search, Calendar, CreditCard, ThumbsUp } from "lucide-react"

const steps = [
  {
    title: "Find What You Need",
    description: "Search through thousands of listings from students at your college.",
    icon: Search,
  },
  {
    title: "Book Your Rental",
    description: "Choose your rental period and request to book from the owner.",
    icon: Calendar,
  },
  {
    title: "Secure Payment",
    description: "Pay through our secure platform. Your payment is held until pickup.",
    icon: CreditCard,
  },
  {
    title: "Return & Rate",
    description: "Return the item on time and rate your experience.",
    icon: ThumbsUp,
  },
]

export default function HowItWorks() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">How Hive Works</h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl">
            Renting from fellow students is easy, secure, and affordable.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 text-amber-500 mb-4">
                <step.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-500">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

