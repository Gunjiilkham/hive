import Link from "next/link"
import { Book, Tv, Laptop, Utensils, Shirt, BikeIcon as Bicycle, Briefcase, MoreHorizontal } from "lucide-react"

const categories = [
  {
    name: "Textbooks",
    icon: Book,
    href: "/category/textbooks",
  },
  {
    name: "Appliances",
    icon: Tv,
    href: "/category/appliances",
  },
  {
    name: "Electronics",
    icon: Laptop,
    href: "/category/electronics",
  },
  {
    name: "Kitchen",
    icon: Utensils,
    href: "/category/kitchen",
  },
  {
    name: "Clothing",
    icon: Shirt,
    href: "/category/clothing",
  },
  {
    name: "Transportation",
    icon: Bicycle,
    href: "/category/transportation",
  },
  {
    name: "School Supplies",
    icon: Briefcase,
    href: "/category/school-supplies",
  },
  {
    name: "More",
    icon: MoreHorizontal,
    href: "/categories",
  },
]

export default function CategorySection() {
  return (
    <section className="w-full py-12 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Browse by Category</h2>
          <p className="max-w-[700px] text-gray-600 md:text-xl">Find exactly what you need for your college life.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 mt-8">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow hover:bg-gray-200"
            >
              <category.icon className="h-8 w-8 mb-2 text-sky-400" />
              <span className="text-sm font-medium">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

