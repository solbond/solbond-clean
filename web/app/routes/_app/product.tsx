import { createFileRoute } from "@tanstack/react-router"
import { ThumbsUpIcon, Tag, MessageCircle, Clock } from "lucide-react"
import { motion } from "framer-motion"
import { Badge } from "~/components/Badge"
import { cn } from "~/lib/utils"
import { useState } from "react"

export const Route = createFileRoute("/_app/product")({
  component: RouteComponent,
})

function RouteComponent() {
  const seller = {
    name: "John Doe",
    username: "johndoe",
    profileImage: "https://api.multiavatar.com/JohnDoe.svg",
    rating: 4.5,
    numSold: 100,
  }

  const product = {
    name: "Premium Figma UI Kit",
    price: 100,
    description:
      "A comprehensive UI kit containing over 1000+ components, perfectly organized and fully customizable. Includes dark mode, responsive layouts, and regular updates.",
    tags: ["ui-kit", "figma", "design"],
    mainImage: "https://robohash.org/nft-1484.png?set=set4&size=400x400",
    images: [
      "https://robohash.org/nft-1484.png?set=set4&size=400x400",
      "https://robohash.org/nft-1485.png?set=set4&size=400x400",
      "https://robohash.org/nft-1486.png?set=set4&size=400x400",
      "https://robohash.org/nft-1487.png?set=set4&size=400x400",
    ],
  }

  const [selectedImage, setSelectedImage] = useState(product.mainImage)

  return (
    <div className="min-h-screen py-10">
      <div className="max-w-5xl mx-auto p-6">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2 flex gap-4">
            <div className="flex flex-col gap-6">
              {product.images.map((image, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className={cn(
                    "w-20 aspect-square rounded-lg overflow-hidden cursor-pointer relative",
                    selectedImage === image &&
                      "border-2 border-[var(--neon-cyan)]",
                  )}
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="flex-1 aspect-square rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800"
            >
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <div className="lg:w-1/2 space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-pressStart text-[var(--neon-cyan)]">
                  ${product.price}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-black/5 dark:bg-white/5">
              <img
                src={seller.profileImage}
                alt={seller.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <div className="font-medium">{seller.name}</div>
                <div className="text-sm text-gray-500">@{seller.username}</div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="font-mono">
                  <ThumbsUpIcon size={14} />
                  {seller.rating * 20}%
                </Badge>
                <button className="px-3 py-1.5 rounded-xl bg-[var(--neon-cyan)]/10 text-[var(--neon-cyan)] hover:bg-[var(--neon-cyan)]/20 transition-colors">
                  <MessageCircle size={18} />
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <div
                  key={tag}
                  className="flex items-center gap-1.5 bg-black/5 dark:bg-white/5 backdrop-blur-sm rounded-lg px-3 py-1.5"
                >
                  <Tag className="w-4 h-4 text-[var(--neon-cyan)]" />
                  <span className="font-mono text-sm">{tag}</span>
                </div>
              ))}
            </div>

            <div className="prose dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300">
                {product.description}
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              className={cn(
                "w-full relative overflow-hidden",
                "bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-cyan)]",
                "text-black border border-[var(--neon-cyan)]",
                "transition-all duration-300",
                "before:absolute before:inset-0",
                "before:bg-[length:200%_100%]",
                "before:animate-shimmer",
                "before:bg-[linear-gradient(110deg,transparent,rgba(20,241,149,0.3),transparent)]",
                "text-lg py-4 rounded-xl font-bold",
                "hover:shadow-[0_0_20px_rgba(20,241,149,0.5)]",
              )}
            >
              Buy Now
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  )
}
