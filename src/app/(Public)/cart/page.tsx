import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { TrashIcon, PlusIcon, MinusIcon, ShoppingBagIcon } from "lucide-react"
import Link from "next/link"

export default function CartPage() {
  // Mock cart data - in a real app, this would come from your cart service
  const cartItems = [
    {
      id: "1",
      name: "Classic Cheese Burger",
      price: 12.99,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200",
    },
    {
      id: "2",
      name: "Margherita Pizza",
      price: 14.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=200",
    },
    {
      id: "3",
      name: "Caesar Salad",
      price: 8.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=200",
    },
  ]

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const deliveryFee = 2.99
  const total = subtotal + deliveryFee

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

        {cartItems.length === 0 ? (
          <Card className="p-12 text-center">
            <ShoppingBagIcon className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Add some delicious items to get started!</p>
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600" asChild>
              <Link href="/menu">Browse Menu</Link>
            </Button>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                        <p className="text-orange-600 font-bold">${item.price.toFixed(2)}</p>
                        
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="icon" className="size-8">
                              <MinusIcon className="w-4 h-4" />
                            </Button>
                            <span className="w-8 text-center font-semibold">{item.quantity}</span>
                            <Button variant="outline" size="icon" className="size-8">
                              <PlusIcon className="w-4 h-4" />
                            </Button>
                          </div>
                          <Button variant="ghost" size="icon" className="text-red-600 hover:text-red-700">
                            <TrashIcon className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Delivery Fee</span>
                      <span>${deliveryFee.toFixed(2)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span className="text-orange-600">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                      Proceed to Checkout
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/menu">Continue Shopping</Link>
                    </Button>
                  </div>

                  <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Cash on Delivery</span> available. Pay when your order arrives!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
