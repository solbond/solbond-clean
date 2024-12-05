import { ArrowRightIcon, SearchIcon, SendIcon } from "lucide-react"
import { FaDiscord, FaTwitter } from "react-icons/fa"
import { motion, animate } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { UserIcon, ShoppingBagIcon } from "lucide-react"

export const HeroRoute = () => {
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

  const searchSectionRef = useRef(null)
  const statsSectionRef = useRef(null)
  const contactSectionRef = useRef(null)

  const isSearchVisible = useInView(searchSectionRef, { once: true })
  const isStatsVisible = useInView(statsSectionRef, { once: true })
  const isContactVisible = useInView(contactSectionRef, { once: true })

  const [activeUsers, setActiveUsers] = useState(0)
  const [productsSold, setProductsSold] = useState(0)

  useEffect(() => {
    if (isStatsVisible) {
      animate(0, 4000, {
        duration: 2,
        onUpdate: (value) => setActiveUsers(Math.round(value)),
      })
      animate(0, 13000, {
        duration: 2,
        onUpdate: (value) => setProductsSold(Math.round(value)),
      })
    }
  }, [isStatsVisible])

  return (
    <div className="flex flex-col p-2 pt-[82px] gap-8 w-full max-w-3xl mx-auto relative min-h-screen">
      <div className="w-full relative z-10 flex flex-col gap-8">
        <div className="flex flex-col items-center relative justify-center p-4 leading-tight">
          <h1 className="text-[48px] md:text-[64px] font-bold z-10">Solbond</h1>
          <motion.button
            animate={{
              width: ["0px", "160px"],
            }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="bg-black overflow-hidden justify-center whitespace-nowrap text-white h-[36px] font-semibold rounded-full px-4 p-2 flex gap-2 items-center"
          >
            Get Started <ArrowRightIcon size={20} />
          </motion.button>
        </div>
        <div className="bg-gradient-to-br relative overflow-hidden shadow-xl flex flex-col justify-center p-10 from-rose-500 via-rose-600 to-purple-600 w-full rounded-2xl min-h-[220px]">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute w-40 h-40 bg-white/10 rounded-full -top-20 -left-20 blur-2xl" />
            <div className="absolute w-40 h-40 bg-purple-500/20 rounded-full -bottom-20 -right-20 blur-2xl" />
          </div>

          <motion.h2
            className="text-white/80 mb-3 text-xl font-bold tracking-wide"
            animate={{ x: [-200, 0], opacity: [0, 1] }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Solbond.co
          </motion.h2>

          <motion.p
            className="text-3xl md:text-4xl text-white leading-tight"
            animate={{
              y: [20, 0],
              opacity: [0, 1],
              filter: ["blur(8px)", "blur(0px)"],
            }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <span className="font-bold">
              Your one-stop marketplace to buy and sell digital products.
            </span>
          </motion.p>
        </div>
      </div>
      <motion.div
        ref={searchSectionRef}
        initial={{ opacity: 0, y: 20 }}
        animate={isSearchVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 1.2 }}
        className="bg-gradient-to-tr p-8 md:p-10 flex flex-col gap-8 shadow-2xl from-rose-400 to-pink-600 rounded-3xl relative z-10 w-full"
      >
        <div className="flex items-center justify-center flex-col gap-6">
          <h2 className="text-[24px] md:text-[28px] text-white font-semibold text-center">
            Your digital quest starts here
          </h2>
          <div className="bg-white gap-2 rounded-full w-full max-w-[400px] overflow-hidden flex items-center p-2">
            <SearchIcon />
            <input
              type="text"
              placeholder="Explore"
              className="w-full bg-transparent outline-none"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {users.map((user, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl aspect-[3/2] flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-12 h-12 rounded-full"
                />
                <button className="bg-black text-white text-xs px-3 py-1 rounded-full">
                  Visit me!
                </button>
              </div>
              <div className="mt-2">
                <h3 className="font-semibold">{user.name}</h3>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="flex gap-2 mt-2">
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                  200 sold
                </span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                  96% ⭐
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden flex flex-col"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col flex-1">
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full mt-auto inline-block">
                  200 sold
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        ref={statsSectionRef}
        initial={{ opacity: 0, y: 20 }}
        animate={isStatsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 1.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
      >
        <motion.div
          initial={{ scale: 0.95 }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative bg-black/80 backdrop-blur-xl rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-rose-500/10 blur-xl" />
          <div className="relative p-8 z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center backdrop-blur-sm">
                <UserIcon size={28} className="text-blue-400" />
              </div>
              <div className="flex-1">
                <p className="text-[42px] leading-none font-bold bg-gradient-to-r from-blue-400 to-rose-400 bg-clip-text text-transparent">
                  {activeUsers.toLocaleString()}
                </p>
                <p className="text-gray-400 mt-1">Active users</p>
              </div>
            </div>
            <div className="w-full bg-gray-800/50 relative rounded-full h-2 overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500 to-rose-500 [box-shadow:0_0_20px_rgba(59,130,246,0.5)]"
                initial={{ x: "-100%" }}
                animate={isStatsVisible ? { x: "0%" } : { x: "-100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.95 }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative bg-black/80 backdrop-blur-xl rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 to-orange-500/10 blur-xl" />
          <div className="relative p-8 z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-rose-500/20 flex items-center justify-center backdrop-blur-sm">
                <ShoppingBagIcon size={28} className="text-rose-400" />
              </div>
              <div className="flex-1">
                <p className="text-[42px] leading-none font-bold bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                  {productsSold.toLocaleString()}
                </p>
                <p className="text-gray-400 mt-1">Products Sold</p>
              </div>
            </div>
            <div className="w-full bg-gray-800/50 relative rounded-full h-2 overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-rose-500 to-orange-500 [box-shadow:0_0_20px_rgba(244,63,94,0.5)]"
                initial={{ x: "-100%" }}
                animate={isStatsVisible ? { x: "0%" } : { x: "-100%" }}
                transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        ref={contactSectionRef}
        initial={{ opacity: 0, y: 20 }}
        animate={
          isContactVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
        }
        transition={{ duration: 1.2 }}
        className="bg-gradient-to-br relative overflow-hidden from-rose-500 to-purple-600 rounded-2xl p-8 text-white shadow-2xl [box-shadow:0_20px_70px_-10px_rgba(244,114,182,0.6)] border border-white/10"
      >
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute w-40 h-40 bg-white/10 rounded-full -top-20 -left-20 blur-2xl animate-pulse" />
          <div className="absolute w-40 h-40 bg-purple-500/20 rounded-full -bottom-20 -right-20 blur-2xl animate-pulse [animation-delay:1s]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        <div className="relative z-10">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={isContactVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold text-center mb-8 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
          >
            Let's Connect
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                boxShadow: "0 0 20px rgba(255,255,255,0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ x: -50, opacity: 0 }}
              animate={isContactVisible ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
            >
              <div className="relative">
                <FaTwitter size={20} className="relative z-10" />
                <div className="absolute inset-0 blur-sm bg-blue-400 opacity-50" />
              </div>
              <span className="font-semibold">Twitter</span>
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                boxShadow: "0 0 20px rgba(255,255,255,0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ y: 50, opacity: 0 }}
              animate={isContactVisible ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
            >
              <div className="relative">
                <FaDiscord size={20} className="relative z-10" />
                <div className="absolute inset-0 blur-sm bg-indigo-400 opacity-50" />
              </div>
              <span className="font-semibold">Discord</span>
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                boxShadow: "0 0 20px rgba(255,255,255,0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ x: 50, opacity: 0 }}
              animate={isContactVisible ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
            >
              <div className="relative">
                <SendIcon size={20} className="relative z-10" />
                <div className="absolute inset-0 blur-sm bg-rose-400 opacity-50" />
              </div>
              <span className="font-semibold">Email</span>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
