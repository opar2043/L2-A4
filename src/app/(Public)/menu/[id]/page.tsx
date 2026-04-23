import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { StarIcon, ClockIcon, PlusIcon, MinusIcon, ShoppingCartIcon } from "lucide-react"
import Link from "next/link"

export default async function MealDetailPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the meal by ID from your API
  const meal = {
    id: params.id,
    name: "Classic Cheese Burger",
    description: "Juicy beef patty with melted cheese, fresh lettuce, tomatoes, and our secret sauce on a toasted brioche bun.",
    price: 12.99,
    ingredients: ["Beef Patty", "Cheddar Cheese", "Lettuce", "Tomato", "Onion", "Secret Sauce", "Brioche Bun"],
    rating: 4.8,
    reviews: 124,
    preparationTime: "15-20 min",
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
    provider: "Burger Palace",
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <Link href="/menu" className="text-orange-600 hover:text-orange-700 font-semibold mb-6 inline-block">
          ← Back to Menu
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
          {/* Image Section */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={meal.image}
                alt={meal.name}
                className="w-full h-full object-cover"
              />
            </div>
            <Badge className="absolute top-4 right-4 bg-orange-500 text-white text-lg px-4 py-2">
              ${meal.price.toFixed(2)}
            </Badge>
          </div>

          {/* Details Section */}
          <div className="space-y-6">
            <div>
              <Badge variant="outline" className="mb-3">
                {meal.category}
              </Badge>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {meal.name}
              </h1>
              <p className="text-gray-600 text-lg">
                {meal.description}
              </p>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <StarIcon className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{meal.rating}</span>
                <span className="text-gray-500">({meal.reviews} reviews)</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <ClockIcon className="w-5 h-5" />
                <span>{meal.preparationTime}</span>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold text-lg mb-3">Ingredients</h3>
              <div className="flex flex-wrap gap-2">
                {meal.ingredients.map((ingredient, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {ingredient}
                  </Badge>
                ))}
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold text-lg mb-3">Provider</h3>
              <p className="text-gray-600">{meal.provider}</p>
            </div>

            <Separator />

            {/* Add to Cart Section */}
            <Card>
              <CardHeader>
                <CardTitle>Add to Cart</CardTitle>
                <CardDescription>Select quantity and add to your order</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" className="size-10">
                      <MinusIcon className="w-4 h-4" />
                    </Button>
                    <span className="text-2xl font-semibold w-8 text-center">1</span>
                    <Button variant="outline" size="icon" className="size-10">
                      <PlusIcon className="w-4 h-4" />
                    </Button>
                  </div>
                  <Button className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                    <ShoppingCartIcon className="w-5 h-5 mr-2" />
                    Add to Cart - ${(meal.price).toFixed(2)}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Button variant="outline" className="flex-1" asChild>
                <Link href="/cart">
                  View Cart
                </Link>
              </Button>
              <Button className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600" asChild>
                <Link href="/cart">
                  Checkout Now
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white font-bold">
                      JD
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold">John Doe</span>
                        <div className="flex gap-0.5">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <StarIcon key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="text-gray-500 text-sm">2 days ago</span>
                      </div>
                      <p className="text-gray-600">
                        Absolutely delicious! The burger was perfectly cooked and the sauce was amazing. Will definitely order again.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
