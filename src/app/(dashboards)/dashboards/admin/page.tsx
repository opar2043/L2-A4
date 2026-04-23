import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { UsersIcon, ShoppingCartIcon, FolderIcon, TrendingUpIcon, DollarSignIcon } from "lucide-react"
import Link from "next/link"

export default function AdminDashboardPage() {
  return (
    <div className="w-full min-h-screen bg-white p-4 sm:p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
        <p className="text-muted-foreground">Overview of platform activity and management.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <UsersIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">+45 new this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
            <ShoppingCartIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,456</div>
            <p className="text-xs text-muted-foreground">+12% from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Categories</CardTitle>
            <FolderIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">All active</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            <DollarSignIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,450</div>
            <p className="text-xs text-muted-foreground">+18% from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className="cursor-pointer hover:shadow-lg transition">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UsersIcon className="w-5 h-5" />
              Manage Users
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">View and manage all users</p>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/dashboard/admin/all-users">View Users</Link>
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
            <p className="text-sm text-muted-foreground mb-4">View all platform orders</p>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/dashboard/admin/all-orders">View Orders</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-lg transition">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FolderIcon className="w-5 h-5" />
              Categories
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">Manage food categories</p>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/dashboard/admin/categories">Manage Categories</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-lg transition">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUpIcon className="w-5 h-5" />
              Analytics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">View platform analytics</p>
            <Button variant="outline" className="w-full">
              Coming Soon
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { id: "ORD-001", customer: "John Doe", total: 45.99, status: "Delivered", time: "2 hours ago" },
                { id: "ORD-002", customer: "Jane Smith", total: 32.50, status: "Preparing", time: "30 min ago" },
                { id: "ORD-003", customer: "Bob Johnson", total: 28.00, status: "Pending", time: "15 min ago" },
              ].map((order) => (
                <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-semibold">{order.customer}</p>
                    <p className="text-sm text-muted-foreground">{order.time}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">${order.total.toFixed(2)}</p>
                    <p className={`text-sm ${
                      order.status === "Delivered" ? "text-green-600" : 
                      order.status === "Preparing" ? "text-blue-600" : 
                      "text-yellow-600"
                    }`}>{order.status}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4" asChild>
              <Link href="/dashboard/admin/all-orders">View All Orders</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Alice Williams", email: "alice@example.com", role: "Customer", time: "1 hour ago" },
                { name: "Charlie Brown", email: "charlie@example.com", role: "Provider", time: "3 hours ago" },
                { name: "Diana Prince", email: "diana@example.com", role: "Customer", time: "5 hours ago" },
              ].map((user, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-semibold">{user.name}</p>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-sm px-2 py-1 rounded-full ${
                      user.role === "Provider" ? "bg-blue-100 text-blue-600" : "bg-green-100 text-green-600"
                    }`}>{user.role}</p>
                    <p className="text-xs text-muted-foreground">{user.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4" asChild>
              <Link href="/dashboard/admin/all-users">View All Users</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
