import { createFileRoute } from "@tanstack/react-router"
import { ThumbsUpIcon, UploadIcon } from "lucide-react"
import { MinimalTiptapEditor } from "~/components/minimal-tiptap"
import { useForm } from "@tanstack/react-form"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { useState } from "react"
import { motion } from "framer-motion"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
import { $createProduct } from "~/actions/actions"
import { useAuth } from "~/context/FirebaseContext"

export interface ProductForm {
  name: string
  description: string
  image: string | null
  price: number
  category: string
}

const CATEGORIES = [
  { title: "Electronics", value: "electronics" },
  { title: "Clothing", value: "clothing" },
]

export const Route = createFileRoute("/_app/new")({
  component: RouteComponent,
})

function RouteComponent() {
  const [description, setDescription] = useState("")
  const { user } = useAuth()

  const form = useForm<ProductForm>({
    defaultValues: {
      name: "",
      description: "",
      image: null,
      price: 0,
      category: "",
    },
    onSubmit: async (values) => {
      try {
        const res = await $createProduct({
          data: {
            form: {
              name: values.value.name,
              description: description,
              image: values.value.image,
              price: values.value.price,
              category: values.value.category,
            },
            sellerId: user?.uid as string,
          },
        })
        console.log(res, "res")
      } catch (error) {
        console.log(error)
      }
    },
  })

  return (
    <div className="pt-[74px] min-h-screen bg-white dark:bg-black relative">
      <div className="absolute inset-0 neon-grid"></div>

      <div className="max-w-[1200px] relative z-10 mx-auto p-4 flex gap-4">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex gap-4 flex-col h-full cyber-card w-full p-6"
          onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit()
          }}
        >
          <div className="border-b border-gray-200/20 pb-6">
            {form.Field({
              name: "name",
              children: (field) => (
                <div>
                  <Input
                    type="text"
                    placeholder="Product Name"
                    className="text-[32px] font-semibold bg-transparent border-none focus-visible:ring-0 text-gray-900 dark:text-gray-100"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  {field.state.meta.errors && (
                    <div className="text-red-500 text-sm">
                      {field.state.meta.errors}
                    </div>
                  )}
                </div>
              ),
            })}
          </div>

          <div className="flex flex-col gap-6">
            {form.Field({
              name: "category",
              children: (field) => (
                <div>
                  <label className="text-sm font-medium">Category</label>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full bg-inherit border text-gray-500 dark:text-white text-left border-gray-200/20"
                      >
                        {field.state.value || "Select category"}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-full">
                      {CATEGORIES.map((category) => (
                        <DropdownMenuItem
                          key={category.value}
                          onClick={() => field.handleChange(category.value)}
                        >
                          {category.title}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ),
            })}

            {/* Price Field with Neon Styling */}
            {form.Field({
              name: "price",
              children: (field) => (
                <motion.div whileHover={{ scale: 1.01 }} className="relative">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Price (USD)
                  </label>
                  <Input
                    type="number"
                    placeholder="0.00"
                    className="bg-transparent border border-gray-200 dark:border-gray-800"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(Number(e.target.value))}
                  />
                </motion.div>
              ),
            })}

            {/* Description Field with Neon Border */}
            {form.Field({
              name: "description",
              children: (field) => (
                <motion.div whileHover={{ scale: 1.01 }} className="relative">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Description
                  </label>
                  <div className="relative rounded-lg overflow-hidden">
                    <MinimalTiptapEditor
                      onValueChange={(value) => setDescription(value)}
                      className="min-h-[200px] bg-transparent border text-black dark:text-white border-gray-200 dark:border-gray-800"
                    />
                  </div>
                </motion.div>
              ),
            })}

            {/* Image Upload with Neon Effect */}
            {form.Field({
              name: "image",
              children: (field) => (
                <motion.div whileHover={{ scale: 1.01 }} className="relative">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Product Image
                  </label>
                  <motion.div
                    whileHover={{ borderColor: "var(--neon-cyan)" }}
                    className="flex items-center gap-2 border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors cursor-pointer"
                  >
                    <label
                      htmlFor="image-upload"
                      className="flex items-center gap-2 cursor-pointer text-gray-600 dark:text-gray-400"
                    >
                      <UploadIcon className="h-6 w-6" />
                      <span>Upload Product Image</span>
                    </label>
                  </motion.div>
                </motion.div>
              ),
            })}
          </div>

          <motion.div
            className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-800"
            whileHover={{ scale: 1.01 }}
          >
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 dark:from-emerald-600 dark:to-cyan-600 text-white hover:opacity-90"
            >
              Create Product
            </Button>
          </motion.div>
        </motion.form>

        {/* Right Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-4 flex-col w-[40%]"
        >
          <div className="cyber-card overflow-hidden">
            <div className="h-[100px] bg-gradient-to-br from-emerald-500 to-cyan-500 dark:from-emerald-600 dark:to-cyan-600 relative">
              <div className="absolute top-2 left-2 flex gap-2">
                <div className="flex items-center gap-1 bg-white/90 dark:bg-black/90 text-emerald-600 dark:text-emerald-400 text-sm rounded-full px-3 py-1">
                  <ThumbsUpIcon size={14} /> 94.05%
                </div>
              </div>
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full p-1 bg-white dark:bg-gray-900">
                <img
                  src="https://via.placeholder.com/150"
                  alt="seller"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
            <div className="p-4 pt-12 text-center">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Preview
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                How your product will appear
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
