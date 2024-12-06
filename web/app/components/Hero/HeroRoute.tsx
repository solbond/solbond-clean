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
    <div className="flex  p-2 pt-[82px] gap-2 w-full relative h-screen">
      <div className="w-full relative z-10 h-full flex flex-col gap-2">
        <div className="w-full h-full flex flex-col gap-2">
          <div className="flex flex-col items-center relative justify-center p-4 leading-tight h-full w-full">
            <h1 className="text-[64px] font-bold z-10">SolBond</h1>
            <motion.button
              initial={{ width: "36px", scale: 0 }}
              animate={{ width: "160px", scale: 1 }}
              transition={{
                scale: { duration: 0.2 },
                width: {
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.2,
                },
              }}
              className="bg-black overflow-hidden justify-end whitespace-nowrap text-white h-[36px] font-semibold rounded-full px-4 p-2 flex gap-2 items-center"
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
          <div className="bg-gradient-to-tr overflow-hidden relative shadow-lg flex items-center p-4 to-rose-400 from-rose-600 w-full h-full rounded-xl">
            <motion.h2
              className="text-white/60 absolute top-4 left-4 text-[18px] font-semibold"
              animate={{ x: [-200, 0] }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Solbond.co
            </motion.h2>
            <motion.p
              className="text-[28px] text-white w-[70%]"
              animate={{ y: [10, 0], filter: ["blur(10px)", "blur(0px)"] }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1 }} // Increased delay
            >
              <span className="font-semibold">
                Your one-stop marketplace to buy and sell digital products.
              </span>
            </motion.p>
            <motion.div
              animate={{
                x: [100, 0],
                y: [100, 0],
              }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute bottom-[-40px] scale-x-[1.5] right-[-20px]  bg-white/10 w-[200px] h-[200px] rounded-2xl"
            >
              <motion.div
                animate={{
                  x: [100, 0],
                  y: [100, 0],
                }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                className="bg-white/20 w-[180px] absolute bottom-0 right-0 h-[180px] rounded-2xl"
              ></motion.div>
              <motion.div
                animate={{
                  x: [100, 0],
                  y: [100, 0],
                }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                className="bg-white/30 w-[160px] absolute bottom-0 right-0 h-[160px] rounded-2xl"
              ></motion.div>
              <motion.div
                animate={{
                  x: [100, 0],
                  y: [100, 0],
                }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                className="bg-white/40 w-[140px] absolute bottom-0 right-0 h-[140px] rounded-2xl"
              ></motion.div>
              <motion.div
                animate={{
                  x: [100, 0],
                  y: [100, 0],
                }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
                className="bg-white/50 w-[120px] absolute bottom-0 right-0 h-[120px] rounded-2xl"
              ></motion.div>
            </motion.div>
          </div>
        </div>
        <div className="h-[50%] w-full flex gap-2">
          <div className="flex flex-col gap-1 w-full h-full rounded-xl">
            <div className="relative bg-black/80 backdrop-blur-xl rounded-xl overflow-hidden">
              <div className="relative p-8 z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center backdrop-blur-sm">
                    <UserIcon size={28} className="text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 2 }}
                      className="text-[42px] leading-none font-bold bg-gradient-to-r from-blue-400 to-rose-400 bg-clip-text text-transparent"
                    >
                      {activeUsers.toLocaleString()}
                    </motion.p>
                    <p className="text-gray-400 mt-1">Active users</p>
                  </div>
                </div>
                <div className="w-full bg-gray-800/50 relative rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500 to-rose-500 [box-shadow:0_0_20px_rgba(59,130,246,0.5)]"
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{ duration: 2, ease: "easeInOut", delay: 2.5 }}
                  />
                </div>
              </div>
            </div>

            <div className="relative bg-black/80 backdrop-blur-xl rounded-xl overflow-hidden">
              <div className="relative p-8 z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-rose-500/20 flex items-center justify-center backdrop-blur-sm">
                    <ShoppingBagIcon size={28} className="text-rose-400" />
                  </div>
                  <div className="flex-1">
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 2 }}
                      className="text-[42px] leading-none font-bold bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent"
                    >
                      {productsSold.toLocaleString()}
                    </motion.p>
                    <p className="text-gray-400 mt-1">Products Sold</p>
                  </div>
                </div>
                <div className="w-full bg-gray-800/50 relative rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-rose-500 to-orange-500 [box-shadow:0_0_20px_rgba(244,63,94,0.5)]"
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{ duration: 2, ease: "easeInOut", delay: 2.5 }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-b gap-2 flex-col overflow-hidden relative flex items-center justify-center text-white from-blue-400 to-blue-600 shadow-lg w-full h-full rounded-xl">
            <h2 className="text-[24px] font-semibold">Contact Us</h2>
            <div className="flex text-[14px] gap-2 font-semibold z-10">
              <motion.p
                animate={{ y: [10, 0], opacity: [0, 1] }}
                whileHover={{
                  y: -4,
                  x: 4,
                  transition: { duration: 0.2 },
                }}
                transition={{ type: "spring", stiffness: 100, delay: 2 }}
                className="flex cursor-pointer gap-1 px-2 p-0.5 rounded-full hover:bg-white hover:text-black transition-all duration-300 items-center"
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
                className="flex cursor-pointer gap-1 px-2 p-0.5 rounded-full hover:bg-white hover:text-black transition-all duration-300 items-center"
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
                className="flex cursor-pointer gap-1 px-2 p-0.5 rounded-full hover:bg-white hover:text-black transition-all duration-300 items-center"
              >
                <SendIcon size={16} /> Email
              </motion.p>
            </div>
            <motion.div
              initial={{ rotate: "30deg", scaleX: 1.5 }}
              animate={{
                y: [100, 0],
              }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute bottom-[-100px] scale-x-[1.5] rotate-[30deg] left-[-20px]  bg-white/10 w-[200px] h-[200px] rounded-2xl"
            >
              <motion.div
                animate={{
                  y: [100, 0],
                }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                className="bg-white/20 w-[180px] absolute bottom-0 left-0 h-[180px] rounded-2xl"
              ></motion.div>
              <motion.div
                animate={{
                  y: [100, 0],
                }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                className="bg-white/30 w-[160px] absolute bottom-0 left-0 h-[160px] rounded-2xl"
              ></motion.div>
              <motion.div
                animate={{
                  y: [100, 0],
                }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                className="bg-white/40 w-[140px] absolute bottom-0 left-0 h-[140px] rounded-2xl"
              ></motion.div>
              <motion.div
                animate={{
                  y: [100, 0],
                }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
                className="bg-white/50 w-[120px] absolute bottom-0 left-0 h-[120px] rounded-2xl"
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-tr p-4 flex flex-col gap-2 shadow-lg from-rose-400 to-rose-600 rounded-xl relative z-10 w-full h-full">
        <motion.div
          initial={{ x: "-50%", scaleX: 2.4 }}
          animate={{
            y: [-100, 0],
          }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute top-[-124px]   left-[50%] translate-x-[-50%]  bg-white/10 w-[200px] h-[200px] rounded-2xl"
        >
          <motion.div
            initial={{ x: "-50%" }}
            animate={{
              y: [-100, 0],
            }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="bg-white/20 w-[180px] absolute top-0 left-[50%] translate-x-[-50%] h-[180px] rounded-2xl"
          ></motion.div>
          <motion.div
            initial={{ x: "-50%" }}
            animate={{
              y: [-100, 0],
            }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="bg-white/30 w-[160px] absolute top-0 left-[50%] translate-x-[-50%] h-[160px] rounded-2xl"
          ></motion.div>
          <motion.div
            initial={{ x: "-50%" }}
            animate={{
              y: [-100, 0],
            }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            className="bg-white/40 w-[140px] absolute top-0 left-[50%] translate-x-[-50%] h-[140px] rounded-2xl"
          ></motion.div>
          <motion.div
            initial={{ x: "-50%" }}
            animate={{
              y: [-100, 0],
            }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
            className="bg-white/50 w-[120px] absolute top-0 left-[50%] translate-x-[-50%] h-[120px] rounded-2xl"
          ></motion.div>
        </motion.div>
        <div className=" flex items-center min-h-[25%] pt-8 justify-center flex-col gap-2">
          <h2 className="text-[28px] text-white font-semibold">
            Your digital quest starts here
          </h2>
          <div className="bg-white gap-2 rounded-full w-[60%] overflow-hidden flex items-center p-2">
            <SearchIcon />
            <input
              type="text"
              placeholder="Explore"
              className="w-full bg-transparent outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 overflow">
          {users.map((user, index) => (
            <div
              key={index}
              className={`bg-white overflow-hidden w-full rounded-xl ${
                index < 2 ? "col-span-1" : "col-span-2"
              }`}
            >
              <div
                className={`h-[100px] relative ${index === 1 ? "bg-gradient-to-tr from-orange-400 to-yellow-400" : "bg-gradient-to-b from-teal-400 to-teal-600"}`}
              >
                <motion.button
                  whileHover={{
                    scale: 1.1,
                    y: -2,
                    transition: { type: "spring", stiffness: 400 },
                  }}
                  className="bg-black text-[12px] px-3 py-1 font-semibold rounded-full text-white absolute top-2 right-2"
                >
                  Visit me!
                </motion.button>
                <div className="absolute p-1 bottom-[-40px] left-[20px] w-[80px] h-[80px] bg-white rounded-full">
                  <img
                    src={user.image || "https://picsum.photos/100/100?random=1"}
                    alt={`${user.name}'s profile`}
                    className="w-full h-full rounded-full"
                  />
                </div>
              </div>
              <div className="p-4 text-end">
                <h2 className="text-[20px] font-semibold">{user.name}</h2>
                <p className="text-[14px] text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="w-full p-1 flex gap-1 text-[10px] self-start">
                <div className="bg-gray-200 font-semibold text-black/40 rounded-full px-2 py-1 w-fit">
                  200 sold
                </div>
                <div className="bg-gray-200 flex gap-1 font-semibold text-black/40 rounded-full px-2 py-1 w-fit">
                  96% <ThumbsUpIcon size={12} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2 overflow-hidden h-full ">
          {products.map((product, index) => (
            <div
              key={index}
              className={`bg-white overflow-hidden flex justify-between flex-col w-full rounded-xl ${
                index < 2 ? "col-span-1" : "col-span-2"
              }`}
            >
              <div
                className={`h-[100px] overflow-hidden relative ${index === 1 ? "bg-gradient-to-tr from-orange-400 to-yellow-400" : "bg-gradient-to-b from-teal-400 to-teal-600"}`}
              >
                <img
                  src={
                    product.image || "https://picsum.photos/100/100?random=1"
                  }
                  alt={`${product.name}'s profile`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-end">
                <h2 className="text-[20px] font-semibold">{product.name}</h2>
                <p className="text-[14px] text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="w-full p-2 flex gap-1 text-[10px] self-start">
                <div className="bg-gray-200 font-semibold text-black/40 rounded-full px-2 py-1 w-fit">
                  200 sold
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
