import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { UserIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react"

export default function CustomerProfilePage() {
  return (
    <div className="w-full min-h-screen bg-white p-4 sm:p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">My Profile</h1>
        <p className="text-sm text-muted-foreground">
          Manage your account information and preferences.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
            <CardDescription>Your personal details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white text-3xl font-bold">
                JD
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-lg">John Doe</h3>
                <p className="text-sm text-muted-foreground">Customer</p>
              </div>
            </div>

            <Separator />

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <UserIcon className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">Member since:</span>
                <span className="font-medium">January 2024</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MailIcon className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">Email:</span>
                <span className="font-medium">john@example.com</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Edit Profile Form */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Edit Profile</CardTitle>
            <CardDescription>Update your personal information</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="john@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" defaultValue="+1 234 567 8900" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Delivery Address</Label>
                <Input id="address" defaultValue="123 Main Street, City, State 12345" />
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-semibold">Change Password</h3>
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <Input id="currentPassword" type="password" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input id="newPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input id="confirmPassword" type="password" />
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <Button variant="outline">Cancel</Button>
                <Button type="submit">Save Changes</Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Saved Addresses */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Saved Addresses</CardTitle>
            <CardDescription>Manage your delivery addresses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg space-y-2">
                <div className="flex items-start justify-between">
                  <MapPinIcon className="w-4 h-4 text-muted-foreground mt-1" />
                  <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-600">Default</span>
                </div>
                <p className="font-medium">Home</p>
                <p className="text-sm text-muted-foreground">123 Main Street, City, State 12345</p>
              </div>
              <div className="p-4 border rounded-lg space-y-2">
                <MapPinIcon className="w-4 h-4 text-muted-foreground" />
                <p className="font-medium">Office</p>
                <p className="text-sm text-muted-foreground">456 Business Ave, Suite 100, City 67890</p>
              </div>
              <div className="p-4 border rounded-lg border-dashed flex items-center justify-center cursor-pointer hover:bg-muted/50 transition">
                <div className="text-center">
                  <p className="font-medium text-sm">Add New Address</p>
                  <p className="text-xs text-muted-foreground">Click to add</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
