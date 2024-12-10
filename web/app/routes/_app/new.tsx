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
import { cn } from "~/lib/utils"

export interface ProductForm {
  name: string
  description: string
  image?: string
  price: number
  categories: string[]
}

const CATEGORIES = [
  { title: "Code", value: "code" },
  { title: "Course", value: "course" },
  { title: "Game Assets", value: "game-assets" },
  { title: "Tutorial", value: "tutorial" },
  { title: "NFT", value: "nft" },
  { title: "3D", value: "3d" },
]

export const Route = createFileRoute("/_app/new")({
  component: RouteComponent,
})

function RouteComponent() {
  const [description, setDescription] = useState("")
  const { user } = useAuth()

  const isFormValid = (values: ProductForm) => {
    console.log(values)
    return (
      values.name.trim() !== "" &&
      description.trim() !== "" &&
      values.price > 0 &&
      values.categories.length > 0
    )
  }

  const form = useForm<ProductForm>({
    defaultValues: {
      name: "",
      description: "",
      image: null,
      price: 0,
      categories: [],
    },
    onSubmit: async (values) => {
      if (!isFormValid(values.value)) {
        return
      }
      try {
        const res = await $createProduct({
          data: {
            form: {
              name: values.value.name,
              description: description,
              image: values.value.image,
              price: values.value.price,
              categories: values.value.categories,
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
          className="flex gap-4 flex-col h-full cyber-card rounded-2xl w-full p-6"
          onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit()
          }}
        >
          <div>
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
            <div className="flex items-center gap-4">
              {form.Field({
                name: "categories",
                children: (field) => (
                  <div className="flex-1">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full h-12 bg-transparent hover:bg-gray-100/10 border-gray-800/20 dark:border-gray-800/20 dark:border-gray-200 hover:border-gray-700/30 transition-colors"
                        >
                          <span className="flex items-center gap-2">
                            <span className="text-black dark:text-[var(--neon-cyan)] opacity-70">
                              Categories:
                            </span>
                            <span className="text-black dark:text-[var(--neon-cyan)]">
                              {field.state.value?.length
                                ? field.state.value
                                    .map(
                                      (cat) =>
                                        CATEGORIES.find((c) => c.value === cat)
                                          ?.title,
                                    )
                                    .join(", ")
                                : "Select categories (max 3)"}
                            </span>
                          </span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="min-w-[200px] bg-white dark:bg-black">
                        {CATEGORIES.map((category) => (
                          <DropdownMenuItem
                            key={category.value}
                            onClick={() => {
                              const currentCategories = field.state.value || []
                              if (currentCategories.includes(category.value)) {
                                field.handleChange(
                                  currentCategories.filter(
                                    (cat) => cat !== category.value,
                                  ),
                                )
                              } else if (currentCategories.length < 3) {
                                field.handleChange([
                                  ...currentCategories,
                                  category.value,
                                ])
                              }
                            }}
                            className={`hover:bg-gray-100 dark:hover:bg-white/10 ${
                              field.state.value?.includes(category.value)
                                ? "bg-gray-100 dark:bg-white/20"
                                : ""
                            }`}
                          >
                            {category.title}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                ),
              })}

              {form.Field({
                name: "price",
                children: (field) => (
                  <div className="w-[200px]">
                    <Input
                      type="text"
                      placeholder="Price (USD)"
                      className="h-12 bg-transparent dark:border-gray-200 hover:bg-gray-100/10 border-gray-800/20 hover:border-gray-700/30 transition-colors"
                      value={field.state.value || ""}
                      onChange={(e) => {
                        const value = e.target.value
                        if (/^\d*\.?\d*$/.test(value)) {
                          field.handleChange(value)
                        }
                      }}
                    />
                  </div>
                ),
              })}
            </div>

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

          <Button
            type="submit"
            disabled={!isFormValid(form.state.values)}
            className={cn(
              "w-full bg-gradient-to-r from-emerald-500 to-cyan-500 dark:from-emerald-600 dark:to-cyan-600 text-white transition-all duration-200",
              {
                "opacity-50 cursor-not-allowed": !isFormValid(
                  form.state.values,
                ),
                "hover:opacity-90": isFormValid(form.state.values),
              },
            )}
          >
            Create Product
          </Button>
        </motion.form>

        {/* <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-4 flex-col w-[40%]"
        >
          <div className="cyber-card rounded-2xl overflow-hidden">
            <div className="h-[100px] bg-gradient-to-br from-emerald-500 to-cyan-500 dark:from-emerald-600 dark:to-cyan-600 relative">
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
        </motion.div> */}
      </div>
    </div>
  )
}
