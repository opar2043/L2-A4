import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCartIcon, UtensilsIcon, TrendingUpIcon, DollarSignIcon, PlusIcon } from "lucide-react"
import Link from "next/link"

export default function ProviderDashboardPage() {
  return (
    <div className="w-full min-h-screen bg-white p-4 sm:p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Provider Dashboard</h1>
        <p className="text-muted-foreground">Manage your menu and track your orders.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
            <ShoppingCartIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">+12% from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Menu Items</CardTitle>
            <UtensilsIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">3 out of stock</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            <DollarSignIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2,450</div>
            <p className="text-xs text-muted-foreground">+8% from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Orders</CardTitle>
            <TrendingUpIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">5 need attention</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <Card className="bg-gradient-to-br from-orange-500 to-red-500 text-white cursor-pointer hover:shadow-lg transition">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PlusIcon className="w-5 h-5" />
              Add New Item
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm opacity-90 mb-4">Add a new meal to your menu</p>
            <Button variant="secondary" className="w-full" asChild>
              <Link href="/dashboard/provider/add-items">Add Item</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-lg transition">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UtensilsIcon className="w-5 h-5" />
              Manage Menu
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">Edit or remove existing menu items</p>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/dashboard/provider/manage-items">Manage Menu</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-lg transition">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShoppingCartIcon className="w-5 h-5" />
              View Orders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">View and manage incoming orders</p>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/dashboard/provider/all-orders">View Orders</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Orders */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { id: "ORD-001", customer: "John Doe", items: "Burger, Fries", total: 25.99, status: "Preparing", time: "5 min ago" },
              { id: "ORD-002", customer: "Jane Smith", items: "Pizza x2", total: 29.98, status: "Pending", time: "10 min ago" },
              { id: "ORD-003", customer: "Bob Johnson", items: "Salad, Soup", total: 18.00, status: "Ready", time: "15 min ago" },
            ].map((order) => (
              <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-semibold">{order.customer}</p>
                  <p className="text-sm text-muted-foreground">{order.items}</p>
                  <p className="text-xs text-muted-foreground">{order.time}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">${order.total.toFixed(2)}</p>
                  <p className={`text-sm ${
                    order.status === "Ready" ? "text-green-600" : 
                    order.status === "Preparing" ? "text-blue-600" : 
                    "text-yellow-600"
                  }`}>{order.status}</p>
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-4" asChild>
            <Link href="/dashboard/provider/all-orders">View All Orders</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
