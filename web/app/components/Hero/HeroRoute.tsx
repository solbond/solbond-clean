import {
  ArrowRightIcon,
  CornerUpRightIcon,
  MailIcon,
  SearchIcon,
  SendIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  ThumbsUpIcon,
  UserIcon,
} from "lucide-react"
import { animate, motion } from "framer-motion"

const USERS = [
  {
    name: "John Doe",
    image: "https://picsum.photos/100/100?random=1",
  },
  {
    name: "John Doe",
    image: "https://picsum.photos/100/100?random=1",
  },
]

const PRODUCTS = [
  {
    id: "3460",
    price: "22.37 SOL",
    lastSale: "20.2 SOL",
    image: "https://picsum.photos/400/400?random=1",
  },
  {
    id: "372",
    price: "22.45 SOL",
    lastSale: "11.38 SOL",
    image: "https://picsum.photos/400/400?random=2",
  },
  {
    id: "7697",
    price: "22.4742 ETH",
    lastSale: "20.16 ETH",
    image: "https://picsum.photos/400/400?random=3",
  },
]

const CATEGORIES = [
  {
    title: "Design",
    products: "564",
    images: [
      "https://picsum.photos/100/100?1",
      "https://picsum.photos/100/100?2",
      "https://picsum.photos/100/100?3",
      "https://picsum.photos/100/100?4",
    ],
  },
  {
    title: "3D Assets",
    products: "152",
    images: [
      "https://picsum.photos/100/100?5",
      "https://picsum.photos/100/100?6",
      "https://picsum.photos/100/100?7",
      "https://picsum.photos/100/100?8",
    ],
  },
  {
    title: "Game Assets",
    products: "445",
    images: [
      "https://picsum.photos/100/100?13",
      "https://picsum.photos/100/100?14",
      "https://picsum.photos/100/100?15",
      "https://picsum.photos/100/100?16",
    ],
  },
  {
    title: "UI Templates",
    products: "328",
    images: [
      "https://picsum.photos/100/100?17",
      "https://picsum.photos/100/100?18",
      "https://picsum.photos/100/100?19",
      "https://picsum.photos/100/100?20",
    ],
  },
]

export const HeroRoute = () => {
  return (
    <div className="flex flex-col sm:flex-row p-2 pt-[82px] gap-2 w-full relative min-h-screen bg-white dark:bg-black">
      <div className="absolute inset-0 neon-grid"></div>

      <div className="w-full relative z-10 flex flex-col gap-2">
        <div className="w-full flex flex-col gap-2 order-1">
          <div className="flex flex-col items-center relative justify-center p-4 leading-tight">
            <h1 className="text-[64px] font-bold dark:bg-gradient-to-r dark:from-emerald-400 dark:via-fuchsia-500 dark:to-violet-600 dark:bg-clip-text dark:text-transparent text-black">
              SolBond
            </h1>
            <motion.button
              initial={{ width: "36px", scale: 0 }}
              animate={{ width: "160px", scale: 1 }}
              className="border border-emerald-500/50 bg-black dark:bg-inherit text-white  overflow-hidden justify-end whitespace-nowrap  dark:text-emerald-400 h-[36px] hover:animate-pulse hover:border-2 font-semibold rounded-full px-4 p-2 flex gap-2 items-center transition-all dark:[box-shadow:0_0_15px_rgba(16,185,129,0.3)]"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="mr-auto"
              >
                Get Started
              </motion.span>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <ArrowRightIcon size={20} />
              </motion.div>
            </motion.button>
          </div>

          <div className=" overflow-hidden px-4 relative shadow-lg flex items-center w-full rounded-xl min-h-[200px]">
            <motion.p
              className="text-[23px] w-[70%] relative z-20"
              animate={{ y: [10, 0], filter: ["blur(10px)", "blur(0px)"] }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
            >
              <span className="font-semibold">
                Your one-stop marketplace to buy and sell digital products.
              </span>
            </motion.p>
            <motion.div
              animate={{
                x: [100, 0],
                y: [100, 0],
                rotate: [45, 0],
                scale: [0.8, 1],
              }}
              transition={{
                duration: 1.2,
                ease: [0.6, 0.01, -0.05, 0.95],
              }}
              className="absolute bottom-[-40px] scale-x-[1.5] right-[-20px] z-10 bg-blue-500/10 dark:bg-cyan-500/10 w-[200px] h-[200px] rounded-2xl"
            >
              <motion.div
                animate={{
                  x: [100, 0],
                  y: [100, 0],
                  rotate: [35, 0],
                  scale: [0.7, 1],
                }}
                transition={{
                  duration: 1.2,
                  delay: 0.15,
                  ease: [0.6, 0.01, -0.05, 0.95],
                }}
                className="bg-blue-500/10 dark:bg-cyan-500/10 w-[180px] absolute bottom-0 right-0 h-[180px] rounded-2xl"
              />
              <motion.div
                animate={{
                  x: [100, 0],
                  y: [100, 0],
                  rotate: [25, 0],
                  scale: [0.6, 1],
                }}
                transition={{
                  duration: 1.2,
                  delay: 0.3,
                  ease: [0.6, 0.01, -0.05, 0.95],
                }}
                className="bg-blue-500/10 dark:bg-cyan-500/10 w-[160px] absolute bottom-0 right-0 h-[160px] rounded-2xl"
              />
              <motion.div
                animate={{
                  x: [100, 0],
                  y: [100, 0],
                  rotate: [15, 0],
                  scale: [0.5, 1],
                }}
                transition={{
                  duration: 1.2,
                  delay: 0.45,
                  ease: [0.6, 0.01, -0.05, 0.95],
                }}
                className="bg-blue-500/10 dark:bg-cyan-500/10 w-[140px] absolute bottom-0 right-0 h-[140px] rounded-2xl"
              />
              <motion.div
                animate={{
                  x: [100, 0],
                  y: [100, 0],
                  rotate: [15, 0],
                  scale: [0.5, 1],
                }}
                transition={{
                  duration: 1.2,
                  delay: 0.45,
                  ease: [0.6, 0.01, -0.05, 0.95],
                }}
                className="bg-blue-500/10 dark:bg-cyan-500/10 w-[120px] absolute bottom-0 right-0 h-[120px] rounded-2xl"
              />
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col gap-4 relative z-20 order-3 sm:order-last">
          <h2 className="text-[24px] font-semibold text-gray-800 dark:text-gray-200">
            Popular Categories
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {CATEGORIES.map((category) => (
              <motion.div
                key={category.title}
                whileHover={{ scale: 1.02 }}
                className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800
                  bg-white dark:bg-black/40 shadow-lg hover:shadow-xl
                  dark:[box-shadow:0_0_15px_rgba(139,92,246,0.2)]
                  transition-all duration-300"
              >
                <div className="grid grid-cols-2 gap-1 p-2">
                  {category.images.map((img, i) => (
                    <div
                      key={i}
                      className="aspect-square overflow-hidden rounded-lg"
                    >
                      <img
                        src={img}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                    {category.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <ShoppingBagIcon size={14} />
                      {category.products} products
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4 flex flex-col gap-4 shadow-lg rounded-xl relative z-10 w-full order-2 sm:order-none  ">
        <div className="flex py-4 items-center justify-center flex-col gap-2">
          <h2 className="text-[28px] text-opacity-85  font-semibold monospace neon-text">
            Your digital quest starts here
          </h2>
          <div className="border border-gray-300 dark:border-white/50 hover:border-blue-500 dark:hover:border-cyan-500/50 bg-white/80 dark:bg-black/80 gap-2 rounded-full w-full max-w-[500px] overflow-hidden flex items-center p-2">
            <SearchIcon className="text-gray-600 dark:text-cyan-400" />
            <input
              type="text"
              placeholder="Explore"
              className="w-full bg-transparent outline-none text-gray-800 dark:text-cyan-400 monospace"
            />
          </div>
          <div className="flex flex-wrap justify-center items-center gap-2 mt-4 relative z-20 order-2">
            {["All", "NFTs", "Code", "Design", "3D Assets", "Game Assets"].map(
              (category) => (
                <motion.button
                  key={category}
                  initial={{
                    textShadow: "0 0 0 rgba(34,211,238,0)",
                    boxShadow: "0 0 0 rgba(34,211,238,0)",
                  }}
                  whileHover={{
                    scale: 1.05,
                    textShadow: "0 0 8px rgb(34,211,238)",
                    boxShadow: "0 0 12px rgb(34,211,238)",
                  }}
                  className="cyber-card px-4 py-2 rounded-full text-sm font-mono"
                >
                  {category}
                </motion.button>
              ),
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {USERS.map((user, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl hover:scale-[1.02] transition-all duration-300 bg-white dark:bg-black/40 border border-gray-100 dark:border-gray-800"
            >
              <div className="flex gap-4 p-4">
                <div className="relative">
                  <div className="w-[64px] h-[64px] rounded-xl overflow-hidden">
                    <img
                      src={user.image}
                      alt={`${user.name}'s profile`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white dark:border-black" />
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-[16px] font-bold text-gray-900 dark:text-gray-100">
                        {user.name}
                      </h2>
                      <p className="text-[12px] text-gray-600 dark:text-gray-400">
                        Digital creator
                      </p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="text-[12px] px-3 h-7 font-medium rounded-lg
                        bg-gray-100 dark:bg-gray-800
                        text-gray-900 dark:text-gray-100
                        hover:bg-gray-200 dark:hover:bg-gray-700
                        transition-colors"
                    >
                      Follow
                    </motion.button>
                  </div>

                  <div className="mt-3 flex items-center gap-4 text-[12px] text-gray-600 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <ShoppingBagIcon size={14} />
                      200 items
                    </span>
                    <span className="flex items-center gap-1">
                      <ThumbsUpIcon size={14} />
                      96% positive
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PRODUCTS.map((product, index) => (
            <div
              key={index}
              className="group overflow-hidden cyber-card rounded-2xl hover:scale-[1.02] transition-all duration-300 bg-white dark:bg-black/40 shadow-lg hover:shadow-xl dark:[box-shadow:0_0_15px_rgba(139,92,246,0.3)]"
            >
              <div className="aspect-square overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 bg-black/80 backdrop-blur-md z-10">
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      delay: 0.3,
                      duration: 0.8,
                    }}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="relative px-8 py-3 rounded-xl overflow-hidden bg-[#14F195]/5 group/btn"
                  >
                    <motion.div
                      className="absolute inset-0"
                      animate={{
                        background: [
                          "radial-gradient(200% 200% at 50% 50%, rgba(20, 241, 149, 0.05) 0%, rgba(20, 241, 149, 0) 50%)",
                          "radial-gradient(100% 100% at 50% 50%, rgba(20, 241, 149, 0.1) 0%, rgba(20, 241, 149, 0) 50%)",
                          "radial-gradient(200% 200% at 50% 50%, rgba(20, 241, 149, 0.05) 0%, rgba(20, 241, 149, 0) 50%)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover/btn:opacity-100"
                      animate={{
                        background: [
                          "linear-gradient(45deg, rgba(20, 241, 149, 0) 0%, rgba(20, 241, 149, 0) 45%, rgba(20, 241, 149, 0.1) 50%, rgba(20, 241, 149, 0) 55%, rgba(20, 241, 149, 0) 100%)",
                          "linear-gradient(45deg, rgba(20, 241, 149, 0) 0%, rgba(20, 241, 149, 0) 40%, rgba(20, 241, 149, 0.2) 50%, rgba(20, 241, 149, 0) 60%, rgba(20, 241, 149, 0) 100%)",
                          "linear-gradient(45deg, rgba(20, 241, 149, 0) 0%, rgba(20, 241, 149, 0) 45%, rgba(20, 241, 149, 0.1) 50%, rgba(20, 241, 149, 0) 55%, rgba(20, 241, 149, 0) 100%)",
                        ],
                        backgroundPosition: [
                          "200% 200%",
                          "-100% -100%",
                          "200% 200%",
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />

                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover/btn:opacity-100"
                      animate={{
                        boxShadow: [
                          "inset 0 0 20px rgba(20, 241, 149, 0.1)",
                          "inset 0 0 30px rgba(20, 241, 149, 0.2)",
                          "inset 0 0 20px rgba(20, 241, 149, 0.1)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    <motion.span
                      className="relative z-10 text-[#14F195] font-mono text-lg tracking-wide font-medium"
                      animate={{
                        textShadow: [
                          "0 0 8px rgba(20, 241, 149, 0.3)",
                          "0 0 12px rgba(20, 241, 149, 0.4)",
                          "0 0 8px rgba(20, 241, 149, 0.3)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      Buy Now
                    </motion.span>

                    {/* Рамка */}
                    <div className="absolute inset-0 border border-[#14F195]/20 rounded-xl group-hover/btn:border-[#14F195]/40 transition-colors duration-500" />

                    <motion.div
                      className="absolute inset-0 rounded-xl"
                      animate={{
                        boxShadow: [
                          "0 0 15px rgba(20, 241, 149, 0.15), 0 0 25px rgba(20, 241, 149, 0.1)",
                          "0 0 20px rgba(20, 241, 149, 0.2), 0 0 35px rgba(20, 241, 149, 0.15)",
                          "0 0 15px rgba(20, 241, 149, 0.15), 0 0 25px rgba(20, 241, 149, 0.1)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.button>
                </div>
                <div className="relative h-full">
                  <img
                    src={product.image}
                    alt={`NFT #${product.id}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent dark:to-black/90 to-white/20 pointer-events-none" />
                </div>
              </div>
              <div className="p-4 sm:p-3 space-y-3 sm:space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[16px] sm:text-[14px] font-mono font-semibold text-gray-800 dark:text-gray-200">
                    #{product.id}
                  </span>
                  <span className="text-[16px] sm:text-[14px] font-mono font-bold text-emerald-500 dark:text-emerald-400">
                    {product.price}
                  </span>
                </div>
                <div className="text-[14px] sm:text-[12px] font-mono text-gray-600 dark:text-gray-400">
                  Last sale: {product.lastSale}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
