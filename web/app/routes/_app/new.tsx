import { createFileRoute } from "@tanstack/react-router"
import { ThumbsUpIcon, UploadIcon } from "lucide-react"
import { MinimalTiptapEditor } from "~/components/minimal-tiptap"
import { useForm } from "@tanstack/react-form"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
import { $createProduct, $getProducts } from "~/actions/actions"
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
        console.log(user?.uid, "user")
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
    <div className="pt-[74px] h-screen">
      <div className="max-w-[1200px] h-full mx-auto p-4 flex gap-4">
        <form
          className="flex gap-2 flex-col h-full bg-white shadow-lg rounded-2xl w-full"
          onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit()
          }}
        >
          <div className="text-[32px] p-[20px] border-b-2 border-slate-400/20 w-full">
            {form.Field({
              name: "name",
              children: (field) => (
                <div>
                  <Input
                    type="text"
                    placeholder="Product Name"
                    className="text-[32px] font-semibold border-none focus-visible:ring-0"
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

          <div className="p-[20px] flex flex-col gap-4">
            {form.Field({
              name: "category",
              children: (field) => (
                <div>
                  <label className="text-sm font-medium">Category</label>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-between"
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
                  {field.state.meta.errors && (
                    <div className="text-red-500 text-sm">
                      {field.state.meta.errors}
                    </div>
                  )}
                </div>
              ),
            })}

            {form.Field({
              name: "price",
              children: (field) => (
                <div>
                  <label className="text-sm font-medium">Price (USD)</label>
                  <Input
                    type="number"
                    placeholder="0.00"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(Number(e.target.value))}
                  />
                  <div className="text-sm text-gray-500">
                    Set your product price in USD
                  </div>
                  {field.state.meta.errors && (
                    <div className="text-red-500 text-sm">
                      {field.state.meta.errors}
                    </div>
                  )}
                </div>
              ),
            })}

            {form.Field({
              name: "description",
              children: (field) => (
                <div>
                  <label className="text-sm font-medium">Description</label>
                  <MinimalTiptapEditor
                    onValueChange={(value) => setDescription(value)}
                    className="min-h-[200px]"
                  />
                  {field.state.meta.errors && (
                    <div className="text-red-500 text-sm">
                      {field.state.meta.errors}
                    </div>
                  )}
                </div>
              ),
            })}

            {form.Field({
              name: "image",
              children: (field) => (
                <div>
                  <label className="text-sm font-medium">Product Image</label>
                  <div className="flex items-center gap-2 border-2 border-dashed rounded-lg p-4 hover:bg-gray-50 transition-colors cursor-pointer">
                    <label
                      htmlFor="image-upload"
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <UploadIcon className="h-6 w-6" />
                      <span>Upload Product Image</span>
                    </label>
                  </div>
                  <div className="text-sm text-gray-500">
                    Upload a high-quality image of your product
                  </div>
                  {field.state.meta.errors && (
                    <div className="text-red-500 text-sm">
                      {field.state.meta.errors}
                    </div>
                  )}
                </div>
              ),
            })}
          </div>

          <div className="mt-auto p-[20px] border-t">
            <Button type="submit" className="w-full">
              Create Product
            </Button>
          </div>
        </form>

        {/* Right sidebar */}
        <div className="flex gap-2 flex-col w-[40%]">
          <div className="h-fit w-full bg-white shadow-lg overflow-hidden rounded-2xl">
            <div className="h-[100px] bg-gradient-to-br  from-orange-500 to-orange-300 relative">
              <div className="absolute top-1 left-1 flex gap-1 items-center">
                <div className="flex gap-1 items-center font-semibold text-green-500 bg-white text-[12px] rounded-full px-4 p-1">
                  <ThumbsUpIcon size={15} /> 94.05%
                </div>
                <div className="flex gap-1 items-center text-neutral-500 font-semibold bg-white/50 text-[12px] rounded-full px-4 p-1">
                  750 sold
                </div>
              </div>
              <div className="absolute bottom-[-40px] h-[80px] left-[50%] translate-x-[-50%] w-[80px] rounded-full bg-white p-1">
                <img
                  src="https://via.placeholder.com/150"
                  alt="seller"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <div className="p-4  pt-[40px] ">
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-[20px] font-semibold">Seller Name</h2>
                <p className="text-[14px] text-gray-500">@sellerusername</p>
              </div>
            </div>
          </div>
          <div className="h-fit w-full bg-white shadow-lg overflow-hidden rounded-2xl">
            <h2 className="text-[20px] flex justify-between items-center font-semibold p-4">
              <div>Total Amount: </div>
              <div className="flex items-end gap-1">
                100 <span className="text-[14px] font-normal mb-1">USD</span>
              </div>
            </h2>
            <button className="w-full bg-black text-white p-4 rounded-b-xl">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
