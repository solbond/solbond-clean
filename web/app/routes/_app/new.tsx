import { createFileRoute } from "@tanstack/react-router"
import { UploadIcon, EyeIcon } from "lucide-react"
import { MinimalTiptapEditor } from "~/components/minimal-tiptap"
import { useForm } from "@tanstack/react-form"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { useState } from "react"
import { motion } from "framer-motion"
import { $createProduct } from "~/actions/actions"
import { useAuth } from "~/context/FirebaseContext"
import { cn } from "~/lib/utils"
import { Badge } from "~/components/Badge"

export interface ProductForm {
  name: string
  description: string
  image?: string
  price: number
  category: string
  tags: string[]
}

export const Route = createFileRoute("/_app/new")({
  component: RouteComponent,
})

function RouteComponent() {
  const [step, setStep] = useState<"type" | "customize">("type")
  const [category, setCategory] = useState<string>("")
  const [description, setDescription] = useState("")
  const [showPreview, setShowPreview] = useState(false)
  const { user } = useAuth()
  const [uploadedImages, setUploadedImages] = useState<string[]>([])
  const [inputTag, setInputTag] = useState("")

  const form = useForm({
    defaultValues: {
      name: "",
      description: "",
      image: "",
      price: 0,
      category: "",
      tags: [],
    },
  })

  const productTypes = [
    {
      id: "digital",
      title: "Digital product",
      description: "Any set of files to download or stream.",
      category: "digital",
    },
    {
      id: "ai-model",
      title: "AI Model",
      description: "Share your trained AI models, datasets, or custom prompts.",
      category: "ai",
    },
    {
      id: "research",
      title: "Research & Analysis",
      description:
        "Share market research, technical analysis, or academic papers.",
      category: "research",
    },
    {
      id: "template",
      title: "Design System",
      description: "Share UI kits, design systems, or Figma templates.",
      category: "template",
    },
    {
      id: "course",
      title: "Course or tutorial",
      description: "Sell a single lesson or teach a whole cohort of students.",
      category: "course",
    },
    {
      id: "nft",
      title: "NFT",
      description: "Sell your unique digital assets.",
      category: "nft",
    },
    {
      id: "game-assets",
      title: "Game Assets",
      description: "Sell game mechanics, levels, or complete game templates.",
      category: "game",
    },
    {
      id: "api",
      title: "API Access",
      description: "Provide access to your specialized APIs and web services.",
      category: "api",
    },
    {
      id: "blockchain",
      title: "Web3 Solutions",
      description: "Smart contracts, DeFi tools, or blockchain integrations.",
      category: "blockchain",
    },
  ]

  const suggestedTags = [
    "software",
    "ebook",
    "template",
    "source-code",
    "plugin",
    "audio",
    "video",
    "graphics",
    "wallpaper",
    "icon-pack",
    "3d-model",
    "animation",
  ]

  const handleNextStep = () => {
    if (category) {
      const selectedType = productTypes.find((type) => type.id === category)
      if (selectedType) {
        form.setFieldValue("category", selectedType.category)
        setStep("customize")
      }
    }
  }

  const isFormValid = (values: ProductForm) => {
    return (
      values.name.trim() !== "" && values.price > 0 && values.category !== ""
    )
  }

  const MAX_IMAGES = 4

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      if (uploadedImages.length + files.length > MAX_IMAGES) {
        alert(`You can only upload up to ${MAX_IMAGES} images`)
        return
      }

      Array.from(files).forEach((file) => {
        const reader = new FileReader()
        reader.onload = (e) => {
          setUploadedImages((prev) => [...prev, e.target?.result as string])
        }
        reader.readAsDataURL(file)
      })
    }
  }

  const handleAddTag = (tag: string) => {
    const normalizedTag = tag.toLowerCase().trim()
    if (
      normalizedTag &&
      !form.state.values.tags.includes(normalizedTag) &&
      form.state.values.tags.length < 5
    ) {
      form.setFieldValue("tags", [...form.state.values.tags, normalizedTag])
    }
    setInputTag("")
  }

  const handleRemoveTag = (tagToRemove: string) => {
    form.setFieldValue(
      "tags",
      form.state.values.tags.filter((tag) => tag !== tagToRemove),
    )
  }

  return (
    <div className="min-h-screen py-10">
      <div className="max-w-5xl mx-auto p-6">
        {step === "type" ? (
          <div className="space-y-8 flex flex-col items-center text-center">
            <div className="flex flex-col sm:flex-row items-center md:items-start justify-between w-full gap-4">
              <div className="flex flex-col text-left w-full md:w-[55%] gap-4">
                <p>Step 1</p>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Let's Create Something
                </h1>
                <p>
                  Transform your expertise and digital assets into market-ready
                  products. From educational content to collectibles — bring
                  your vision to life.
                </p>
              </div>

              <div className="flex gap-3">
                <Button
                  disabled={!category}
                  onClick={handleNextStep}
                  className={cn(
                    "flex-1 bg-gradient-to-r from-emerald-500 to-cyan-500 dark:from-emerald-600 dark:to-cyan-600 text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 dark:hover:shadow-cyan-900/30",
                    {
                      "opacity-50 cursor-not-allowed": !category,
                      "hover:opacity-90 hover:-translate-y-0.5": category,
                    },
                  )}
                >
                  Next: Customize
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {productTypes.map((type) => (
                <motion.div
                  key={type.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setCategory(type.id)}
                  className={cn(
                    "p-4 rounded-lg border-2 cursor-pointer transition-all",
                    "hover:shadow-lg hover:border-[var(--neon-cyan)]",
                    category === type.id
                      ? "border-[var(--neon-cyan)] bg-[#14F195]/10"
                      : "border-gray-300 dark:border-gray-700",
                  )}
                >
                  <motion.h3
                    className="font-semibold mb-1"
                    animate={
                      category === type.id
                        ? {
                            color: "#14F198",
                            textShadow: "0 0 10px rgba(20, 241, 149, 0.5)",
                          }
                        : {}
                    }
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                  >
                    {type.title}
                  </motion.h3>
                  <p
                    className={cn(
                      "text-sm text-black dark:text-white",
                      category === type.id ? "opacity-100" : "opacity-60",
                    )}
                  >
                    {type.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex gap-6 flex-col h-full w-full"
            onSubmit={(e) => {
              e.preventDefault()
              form.handleSubmit()
            }}
          >
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <button
                  type="button"
                  variant="outline"
                  onClick={() => setStep("type")}
                  className="flex-1 bg-inherit mb-[2em] text-[var(--neon-cyan)] border-none"
                >
                  Back to Step 1
                </button>

                <h2 className="text-sm font-semibold text-emerald-500 dark:text-emerald-400 flex items-center gap-4">
                  Step 2.{" "}
                  <span className="text-black text-sm lg:text-lg dark:text-white">
                    Customize Your Product
                  </span>
                  <div className="flex gap-2 items-center ml-4">
                    {[...Array(4)].map((_, index) => {
                      const filledFields = [
                        !!form.state.values.name,
                        !!description,
                        uploadedImages.length > 0,
                        form.state.values.price > 0,
                      ].filter(Boolean).length

                      return (
                        <div
                          key={index}
                          className={cn(
                            "w-3 h-3 rounded-full border-2 transition-all duration-300",
                            index < filledFields
                              ? "border-[var(--neon-cyan)] bg-[var(--neon-cyan)] shadow-[0_0_8px_var(--neon-cyan)]"
                              : "border-gray-300 dark:border-gray-600",
                          )}
                        />
                      )
                    })}
                  </div>
                </h2>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/5">
                {form.Field({
                  name: "tags",
                  children: (field) => (
                    <div className="mt-4">
                      <div className="flex flex-wrap gap-2 mb-2">
                        {field.state.value.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="px-2 py-1 bg-[#14F195]/20 dark:bg-[#14F195]/20 text-black dark:text-white"
                          >
                            {tag}
                            <button
                              onClick={() => handleRemoveTag(tag)}
                              className="ml-2 hover:text-red-500"
                            >
                              ×
                            </button>
                          </Badge>
                        ))}
                      </div>
                      <Input
                        type="text"
                        placeholder="Add tags (max 5)"
                        value={inputTag}
                        onChange={(e) => setInputTag(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault()
                            handleAddTag(inputTag)
                          }
                        }}
                        disabled={field.state.value.length >= 5}
                        className="mb-2"
                      />
                      <div className="flex flex-wrap gap-2">
                        {suggestedTags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="cursor-pointer border-[#14F195]/50 text-[#14F195] hover:bg-[#14F195]/10 transition-colors duration-200"
                            onClick={() => handleAddTag(tag)}
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ),
                })}
              </div>

              <div className="lg:w-3/5 flex flex-col gap-8">
                {form.Field({
                  name: "name",
                  children: (field) => (
                    <div className="w-full">
                      <Input
                        type="text"
                        placeholder="Product Name"
                        className="h-12 border-b placeholder:text-lg border-b-gray-300 dark:border-b-gray-700 hover:opacity-100 transition-all duration-300"
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                    </div>
                  ),
                })}
                {form.Field({
                  name: "description",
                  children: (field) => (
                    <motion.div
                      whileHover={{ scale: 1.005 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label className="text-md font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                        Description
                      </label>
                      <div className="relative rounded-xl  overflow-visible">
                        <MinimalTiptapEditor
                          onValueChange={(value) => setDescription(value)}
                          className="min-h-[200px] bg-white/50 dark:bg-black/50 backdrop-blur-sm text-black dark:text-white"
                        />
                      </div>
                    </motion.div>
                  ),
                })}

                {form.Field({
                  name: "image",
                  children: (field) => (
                    <motion.div
                      whileHover={{ scale: 1.005 }}
                      transition={{ duration: 0.2 }}
                      className="relative"
                    >
                      <label className="text-md font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                        Product Images
                      </label>
                      <div
                        className={cn(
                          "grid gap-4",
                          uploadedImages.length > 0
                            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                            : "grid-cols-1",
                        )}
                      >
                        {uploadedImages.map((image, index) => (
                          <div
                            key={index}
                            className="relative aspect-square rounded-lg overflow-hidden"
                          >
                            <img
                              src={image}
                              alt={`Upload ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                            <button
                              onClick={() =>
                                setUploadedImages((prev) =>
                                  prev.filter((_, i) => i !== index),
                                )
                              }
                              className="absolute top-2 right-2 px-2 bg-black/50 rounded-full text-white hover:opacity-50 transition-all duration-300"
                            >
                              ×
                            </button>
                          </div>
                        ))}
                        {uploadedImages.length < MAX_IMAGES && (
                          <motion.div
                            whileHover={{ borderColor: "var(--neon-cyan)" }}
                            className={cn(
                              "flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg hover:bg-white/60 dark:hover:bg-black/60 transition-all duration-300 backdrop-blur-sm",
                              "aspect-square md:aspect-[2/1]",
                              uploadedImages.length === 0
                                ? "col-span-full"
                                : "",
                            )}
                          >
                            <label className="flex flex-col items-center justify-center w-full h-full cursor-pointer">
                              <div className="flex flex-col items-center justify-center p-4">
                                <UploadIcon className="w-8 h-8 mb-2 text-gray-500 dark:text-gray-400" />
                                <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                                  Add Image{" "}
                                  {uploadedImages.length > 0 &&
                                    `(${uploadedImages.length}/${MAX_IMAGES})`}
                                </p>
                              </div>
                              <input
                                type="file"
                                className="hidden"
                                accept="image/*"
                                onChange={handleFileUpload}
                              />
                            </label>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  ),
                })}
              </div>

              <div className="lg:w-1/5 flex flex-col justify-start gap-3">
                {form.Field({
                  name: "price",
                  children: (field) => (
                    <div className="w-full">
                      <Input
                        type="text"
                        placeholder="$USD"
                        className="h-12 border-b border-b-gray-300 dark:border-b-gray-700 hover:opacity-100 transition-all duration-300"
                        value={field.state.value ? `$${field.state.value}` : ""}
                        onChange={(e) => {
                          const value = e.target.value.replace(/^\$/, "")
                          if (/^\d*\.?\d*$/.test(value)) {
                            field.handleChange(Number(value))
                          }
                        }}
                      />
                    </div>
                  ),
                })}

                <Button
                  type="submit"
                  disabled={!isFormValid(form.state.values)}
                  className={cn(
                    "w-full bg-gradient-to-r from-emerald-500 to-cyan-500 dark:from-emerald-600 dark:to-cyan-600 text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 dark:hover:shadow-cyan-900/30",
                    {
                      "opacity-50 cursor-not-allowed": !isFormValid(
                        form.state.values,
                      ),
                      "hover:opacity-90 hover:-translate-y-0.5": isFormValid(
                        form.state.values,
                      ),
                    },
                  )}
                >
                  Create Product
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowPreview(true)}
                  className="w-full dark:border-gray-300 hover:bg-white/60 dark:hover:bg-black/60 transition-all duration-300"
                >
                  <EyeIcon className="w-4 h-4 mr-2" />
                  Preview
                </Button>
              </div>
            </div>
          </motion.form>
        )}
      </div>
    </div>
  )
}
