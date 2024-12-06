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
import { FaDiscord, FaTwitter } from "react-icons/fa"
import { animate, motion } from "framer-motion"
import { useEffect, useState } from "react"

export const HeroRoute = () => {
  const [activeUsers, setActiveUsers] = useState(0)
  const [productsSold, setProductsSold] = useState(0)
  const users = [
    {
      name: "John Doe",
      image: "https://picsum.photos/100/100?random=1",
    },
    {
      name: "John Doe",
      image: "https://picsum.photos/100/100?random=1",
    },
  ]
  const products = [
    {
      name: "Product 1",
      image: "https://picsum.photos/400/400?random=2",
    },
    {
      name: "Product 2",
      image: "https://picsum.photos/400/400?random=3",
    },
  ]

  useEffect(() => {
    setTimeout(() => {
      animate(0, 4000, {
        duration: 2,
        onUpdate: (value) => setActiveUsers(Math.round(value)),
      })
      animate(0, 13000, {
        duration: 2,
        onUpdate: (value) => setProductsSold(Math.round(value)),
      })
    }, 1800)
  }, [])

  return (
    <div className="flex flex-col sm:flex-row p-2 pt-[82px] gap-2 w-full relative min-h-screen bg-white dark:bg-black">
      <div className="absolute inset-0 neon-grid"></div>

      <div className="w-full relative z-10 flex flex-col gap-2">
        <div className="w-full flex flex-col gap-2 order-1 sm:order-none">
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

          <div className="border border-fuchsia-500/50  backdrop-blur-sm overflow-hidden relative shadow-lg flex items-center p-4 w-full rounded-xl min-h-[200px] [box-shadow:0_0_15px_rgba(219,39,119,0.3)]">
            <motion.h2
              className="text-fuchsia-400 absolute hidden md:block top-4 left-4 text-[18px] font-semibold z-20"
              animate={{ x: [-200, 0] }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Solbond.co
            </motion.h2>
            <motion.p
              className="text-[23px]  w-[70%] relative z-20"
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
              className="absolute bottom-[-40px] scale-x-[1.5] right-[-20px] z-10 bg-black/10 dark:bg-rose-500/10 w-[200px] h-[200px] rounded-2xl"
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
                className="bg-black/10 dark:bg-rose-500/10 w-[180px] absolute bottom-0 right-0 h-[180px] rounded-2xl"
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
                className="bg-black/10 dark:bg-rose-500/10 w-[160px] absolute bottom-0 right-0 h-[160px] rounded-2xl"
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
                className="bg-black/10 dark:bg-rose-500/10 w-[140px] absolute bottom-0 right-0 h-[140px] rounded-2xl"
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
                className="bg-black/10 dark:bg-rose-500/10 w-[120px] absolute bottom-0 right-0 h-[120px] rounded-2xl"
              />
            </motion.div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-4 order-3 sm:order-none">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1  p-8 rounded-xl border border-cyan-500/50 [box-shadow:0_0_15px_rgba(139,92,246,0.3)]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl neon-border flex items-center justify-center">
                  <UserIcon size={28} className="text-cyan-400" />
                </div>
                <div className="flex-1">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 2 }}
                    className="text-[42px] text-cyan-400 leading-none font-bold monospace neon-text"
                  >
                    {activeUsers.toLocaleString()}
                  </motion.p>
                  <p className="text-cyan-400 mt-1 monospace">Active users</p>
                </div>
              </div>
              <div className="w-full bg-black/50 relative rounded-full h-2 overflow-hidden neon-border">
                <motion.div
                  className="absolute top-0 left-0 w-full h-full bg-cyan-400"
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{ duration: 2, ease: "easeInOut", delay: 2.5 }}
                />
              </div>
            </div>

            <div className="flex-1 relative bg-gradient-to-br from-rose-50 to-rose-100 dark:from-red-500/10 dark:to-black/80 backdrop-blur-xl rounded-xl overflow-hidden border border-rose-200 dark:border-rose-500/50 shadow-lg hover:shadow-xl transition-all duration-300 [box-shadow:0_0_15px_rgba(244,63,94,0.1)] dark:[box-shadow:0_0_15px_rgba(244,63,94,0.3)]">
              <div className="relative p-8 z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-rose-100 dark:bg-rose-500/20 flex items-center justify-center backdrop-blur-sm">
                    <ShoppingBagIcon
                      size={28}
                      className="text-rose-500 dark:text-rose-400"
                    />
                  </div>
                  <div className="flex-1">
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 2 }}
                      className="text-[42px] leading-none font-bold text-rose-500 dark:bg-gradient-to-r dark:from-rose-400 dark:to-orange-400 dark:bg-clip-text dark:text-transparent"
                    >
                      {productsSold.toLocaleString()}
                    </motion.p>
                    <p className="text-rose-600/70 dark:text-gray-400 mt-1">
                      Products Sold
                    </p>
                  </div>
                </div>
                <div className="w-full bg-rose-200/50 dark:bg-gray-800/50 relative rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="absolute top-0 left-0 w-full h-full bg-rose-400 dark:bg-gradient-to-r dark:from-rose-500 dark:to-orange-500 [box-shadow:0_0_20px_rgba(244,63,94,0.3)] dark:[box-shadow:0_0_20px_rgba(244,63,94,0.5)]"
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{ duration: 2, ease: "easeInOut", delay: 2.5 }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border border-gray-200/50 shadow-lg backdrop-blur-sm p-6 rounded-xl relative hover:shadow-xl transition-all duration-300">
            <h2 className="text-[24px] font-semibold  text-center mb-4">
              Contact Us
            </h2>
            <div className="flex justify-center gap-4 text-[14px] font-semibold z-10">
              <motion.p
                animate={{ y: [10, 0], opacity: [0, 1] }}
                whileHover={{
                  y: -4,
                  x: 4,
                  transition: { duration: 0.2 },
                }}
                transition={{ type: "spring", stiffness: 100, delay: 2 }}
                className="flex cursor-pointer gap-1 px-4 py-2 rounded-full bg-inherit border border-indigo-200 dark:border-indigo-100 text-indigo-600 hover:bg-indigo-100 dark:hover:bg-indigo-50 transition-all duration-300 items-center shadow-sm hover:shadow-md"
              >
                <FaTwitter /> Twitter
              </motion.p>
              <motion.p
                animate={{ y: [10, 0], opacity: [0, 1] }}
                whileHover={{
                  y: -4,
                  x: 4,
                  transition: { duration: 0.2 },
                }}
                transition={{ type: "spring", stiffness: 100, delay: 2.1 }}
                className="flex cursor-pointer gap-1 px-4 py-2 rounded-full bg-inherit border border-indigo-200 dark:border-indigo-100 text-indigo-600 hover:bg-indigo-100 dark:hover:bg-indigo-50 transition-all duration-300 items-center shadow-sm hover:shadow-md"
              >
                <FaDiscord /> Discord
              </motion.p>
              <motion.p
                animate={{ y: [10, 0], opacity: [0, 1] }}
                whileHover={{
                  y: -4,
                  x: 4,
                  transition: { duration: 0.2 },
                }}
                transition={{ type: "spring", stiffness: 100, delay: 2.2 }}
                className="flex cursor-pointer gap-1 px-4 py-2 rounded-full bg-inherit border border-emerald-200 dark:border-emerald-100 text-emerald-600 hover:bg-emerald-100 dark:hover:bg-emerald-50 transition-all duration-300 items-center shadow-sm hover:shadow-md"
              >
                <SendIcon size={16} /> Email
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 flex flex-col gap-4 shadow-lg rounded-xl relative z-10 w-full order-2 sm:order-none border border-gray-200 dark:border-violet-500/50 [box-shadow:0_0_15px_rgba(0,0,0,0.1)] dark:[box-shadow:0_0_15px_rgba(139,92,246,0.3)]">
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
        </div>

        <div className="grid grid-cols-2 gap-4">
          {users.map((user, index) => (
            <div
              key={index}
              className="group overflow-hidden cyber-card rounded-2xl hover:scale-[1.02] transition-all duration-300"
            >
              <div className="h-[80px] relative bg-gradient-to-r from-cyan-700/50 to-gray-200 dark:from-cyan-900/30 dark:to-cyan-600/30">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    y: -1,
                  }}
                  className="neon-border bg-white/80 backdrop-blur-sm hover:bg-white/100 dark:bg-black/80 dark:hover:bg-black/100 text-[10px] px-3 py-1 font-mono rounded-full text-cyan-400 absolute top-2 right-2"
                >
                  <span className="flex items-center gap-1">
                    Visit Profile <CornerUpRightIcon size={12} />
                  </span>
                </motion.button>
                <div className="absolute p-1 bottom-[-30px] left-[16px] w-[60px] h-[60px] bg-gradient-to-tr from-white/20 to-white/80 rounded-xl shadow-xl">
                  <img
                    src={user.image}
                    alt={`${user.name}'s profile`}
                    className="w-full h-full rounded-lg object-cover"
                  />
                </div>
              </div>
              <div className="p-4 pt-8 text-end">
                <h2 className="text-[16px] font-bold text-gray-900 dark:text-white">
                  {user.name}
                </h2>
                <p className="text-[12px] text-gray-600 dark:text-white/60">
                  Digital creator & NFT artist
                </p>
              </div>
              <div className="w-full px-3 pb-3 flex gap-2 text-[10px] justify-end">
                <div className="border border-black/10 dark:border-white/10 font-medium text-opacity-60 rounded-full px-2 py-1 backdrop-blur-sm">
                  <span className="flex items-center gap-1">
                    <ShoppingBagIcon size={12} /> 200 sold
                  </span>
                </div>
                <div className="border border-black/10 dark:border-white/10 font-medium text-opacity-60 rounded-full px-2 py-1 backdrop-blur-sm">
                  <span className="flex items-center gap-1">
                    96% <ThumbsUpIcon size={12} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="group overflow-hidden cyber-card rounded-2xl hover:scale-[1.02] transition-all duration-300 border-2 border-white"
            >
              <div className="h-[140px] overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    y: -1,
                  }}
                  className="neon-border text-[10px] bg-white/80 backdrop-blur-sm hover:bg-white/100 dark:bg-black/80 dark:hover:bg-black/100 px-3 py-1 font-mono rounded-full text-cyan-400 absolute top-2 right-2"
                >
                  <span className="flex items-center gap-1">
                    Buy Now <CornerUpRightIcon size={12} />
                  </span>
                </motion.button>
                <div className="absolute p-1 left-[16px] w-[60px] bg-gradient-to-tr from-white/20 to-white/80 rounded-xl shadow-xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full rounded-lg object-cover"
                  />
                </div>
              </div>
              <div className="p-4 text-end">
                <h2 className="text-[16px] font-bold ">{product.name}</h2>
                <p className="text-[12px] text-opacity-60">
                  Digital creator & NFT artist
                </p>
              </div>
              <div className="w-full px-3 pb-3 flex gap-2 text-[10px] justify-end">
                <div className="border border-black/10 dark:border-white/10 font-medium text-opacity-60 rounded-full px-2 py-1 backdrop-blur-sm">
                  <span className="flex items-center gap-1">
                    <ShoppingBagIcon size={12} /> 200 sold
                  </span>
                </div>
                <div className=" border border-black/10 dark:border-white/10 flex gap-1 font-medium text-opacity-60 rounded-full px-2 py-1 backdrop-blur-sm">
                  <span className="flex items-center gap-1">
                    96% <ThumbsUpIcon size={12} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
