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
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "~/components/ui/dialog"

export interface ProductForm {
  name: string
  description: string
  image?: string
  price: number
  category: string
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

  const form = useForm({
    defaultValues: {
      name: "",
      description: "",
      image: "",
      price: 0,
      category: "",
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

  return (
    <div className="min-h-screen py-10 bg-white dark:bg-black">
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

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {productTypes.map((type) => (
                <motion.div
                  key={type.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setCategory(type.id)}
                  className={cn(
                    "p-4 rounded-lg border-2 cursor-pointer transition-all",
                    "hover:shadow-lg hover:border-cyan-500/50",
                    category === type.id
                      ? "border-cyan-500 bg-cyan-50/50 dark:bg-cyan-900/20"
                      : "border-gray-300 dark:border-gray-700",
                  )}
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {type.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
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
            className="flex gap-6 flex-col h-full cyber-card rounded-2xl w-full p-8 backdrop-blur-sm bg-white/50 dark:bg-black/50 border border-gray-300 dark:border-gray-700"
            onSubmit={(e) => {
              e.preventDefault()
              form.handleSubmit()
            }}
          >
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep("type")}
                  className="flex-1 bg-gradient-to-r from-emerald-500 to-cyan-500 dark:from-emerald-600 dark:to-cyan-600 text-white transition-all duration-300 hover:shadow-lg border-none mb-2 hover:shadow-cyan-500/20 dark:hover:shadow-cyan-900/30"
                >
                  Back to Step 1
                </Button>

                <p className="text-emerald-500 text-sm dark:text-emerald-400 pr-2">
                  Step 2.
                </p>

                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Customize Your Product
                </h2>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4 flex-wrap md:flex-nowrap border-b border-gray-300 dark:border-gray-700 pb-4 mb-4">
                {form.Field({
                  name: "price",
                  children: (field) => (
                    <div className="w-[200px]">
                      <Input
                        type="text"
                        placeholder="Price (USD)"
                        className="h-12 bg-white/50 dark:bg-black/50 backdrop-blur-sm border-gray-300 dark:border-gray-700 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 transition-all duration-300"
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
                  <motion.div
                    whileHover={{ scale: 1.005 }}
                    transition={{ duration: 0.2 }}
                    className="relative border-b border-gray-300 dark:border-gray-700 pb-4 mb-4"
                  >
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                      Description
                    </label>
                    <div className="relative rounded-xl overflow-hidden">
                      <MinimalTiptapEditor
                        onValueChange={(value) => setDescription(value)}
                        className="min-h-[200px] bg-white/50 dark:bg-black/50 backdrop-blur-sm border border-gray-300 dark:border-gray-700 text-black dark:text-white"
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
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                      Product Image
                    </label>
                    <motion.div
                      whileHover={{ borderColor: "var(--neon-cyan)" }}
                      className="flex items-center gap-2 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-8 hover:bg-white/60 dark:hover:bg-black/60 transition-all duration-300 backdrop-blur-sm"
                    >
                      <div className="flex items-center justify-center w-full">
                        <label className="flex flex-col items-center justify-center w-full h-64 cursor-pointer">
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <UploadIcon className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" />
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                              <span className="font-semibold">
                                Click to upload
                              </span>{" "}
                              or drag and drop
                            </p>
                          </div>
                          <input type="file" className="hidden" />
                        </label>
                      </div>
                    </motion.div>
                  </motion.div>
                ),
              })}
            </div>

            <div className="flex gap-3">
              <Button
                type="submit"
                disabled={!isFormValid(form.state.values)}
                className={cn(
                  "flex-1 bg-gradient-to-r from-emerald-500 to-cyan-500 dark:from-emerald-600 dark:to-cyan-600 text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 dark:hover:shadow-cyan-900/30",
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
                className="dark:border-gray-300 hover:bg-white/60 dark:hover:bg-black/60 transition-all duration-300"
              >
                <EyeIcon className="w-4 h-4 mr-2" />
                Preview
              </Button>
            </div>
          </motion.form>
        )}
      </div>

      {/* <Dialog open={showPreview} onOpenChange={setShowPreview}>
        <DialogContent className="max-w-[600px] bg-white/80 dark:bg-black/80 backdrop-blur-md border border-gray-300 dark:border-gray-700">
          <DialogHeader>
            <DialogTitle>Preview</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog> */}
    </div>
  )
}
