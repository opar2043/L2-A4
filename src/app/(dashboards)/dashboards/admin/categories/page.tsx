import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { PlusIcon, PencilIcon, TrashIcon } from "lucide-react"

export default function CategoriesPage() {
  const [categories, setCategories] = useState([
    { id: "1", name: "Burgers", description: "Delicious burgers", mealsCount: 5 },
    { id: "2", name: "Pizza", description: "Italian pizza", mealsCount: 8 },
    { id: "3", name: "Salads", description: "Fresh salads", mealsCount: 3 },
  ])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingCategory, setEditingCategory] = useState<any>(null)
  const [formData, setFormData] = useState({ name: "", description: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (editingCategory) {
      setCategories(categories.map(cat => 
        cat.id === editingCategory.id 
          ? { ...cat, ...formData, mealsCount: cat.mealsCount }
          : cat
      ))
    } else {
      setCategories([...categories, { ...formData, id: Date.now().toString(), mealsCount: 0 }])
    }
    setIsDialogOpen(false)
    setEditingCategory(null)
    setFormData({ name: "", description: "" })
  }

  const handleEdit = (category: any) => {
    setEditingCategory(category)
    setFormData({ name: category.name, description: category.description || "" })
    setIsDialogOpen(true)
  }

  const handleDelete = (id: string) => {
    setCategories(categories.filter(cat => cat.id !== id))
  }

  return (
    <div className="w-full min-h-screen bg-white p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Categories</h1>
          <p className="text-sm text-muted-foreground">
            Manage food categories for menu organization.
          </p>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button 
              className="w-full sm:w-auto"
              onClick={() => {
                setEditingCategory(null)
                setFormData({ name: "", description: "" })
              }}
            >
              <PlusIcon className="w-4 h-4 mr-2" />
              Add Category
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {editingCategory ? "Edit Category" : "Add New Category"}
              </DialogTitle>
              <DialogDescription>
                {editingCategory 
                  ? "Update the category details below." 
                  : "Create a new food category for organizing meals."}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Category Name
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g., Burgers"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="description" className="text-sm font-medium">
                    Description
                  </label>
                  <Input
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="e.g., Delicious homemade burgers"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">
                  {editingCategory ? "Update" : "Create"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Table Card */}
      <div className="rounded-2xl border bg-white shadow-sm overflow-hidden">
        <div className="w-full overflow-x-auto">
          <Table className="min-w-[600px]">
            <TableHeader>
              <TableRow className="bg-muted/40">
                <TableHead>Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Meals</TableHead>
                <TableHead className="text-right pr-6">Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {categories.map((category) => (
                <TableRow
                  key={category.id}
                  className="hover:bg-muted/40 transition"
                >
                  <TableCell className="font-medium">
                    {category.name}
                  </TableCell>

                  <TableCell className="text-muted-foreground">
                    {category.description || "-"}
                  </TableCell>

                  <TableCell>
                    <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-600 font-medium">
                      {category.mealsCount} meals
                    </span>
                  </TableCell>

                  <TableCell className="text-right pr-6">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="size-8"
                        onClick={() => handleEdit(category)}
                      >
                        <PencilIcon className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="size-8 text-red-600 hover:text-red-700"
                        onClick={() => handleDelete(category.id)}
                      >
                        <TrashIcon className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
