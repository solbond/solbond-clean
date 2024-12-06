import { useRouter } from "@tanstack/react-router"
import { signOut } from "firebase/auth"
import { motion } from "framer-motion"
import { SearchIcon, MenuIcon, BellIcon, HomeIcon } from "lucide-react"
import { useAuth } from "~/context/FirebaseContext"
import { auth } from "~/lib/firebase"

export const Nav = () => {
  const router = useRouter()
  const { user } = useAuth()

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="flex z-[100] justify-between border-b-[1px] bg-white/95 dark:bg-black/95 shadow-sm dark:shadow-[0_1px_12px_-2px_var(--neon-cyan)] h-[74px] fixed top-0 left-0 right-0 items-center px-6"
    >
      {/* Left section */}
      <div className="flex items-center gap-4">
        <motion.h1
          className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          SVG
        </motion.h1>

        <div className="hidden md:flex gap-4 ml-8">
          <motion.button
            whileHover={{ y: -2 }}
            className="flex items-center gap-2 text-indigo-600 dark:text-cyan-400 opacity-70 hover:opacity-100 transition-opacity"
          >
            <HomeIcon size={18} />
            <span className="text-sm">Home</span>
          </motion.button>

          <motion.button
            whileHover={{ y: -2 }}
            className="flex items-center gap-2 text-indigo-600 dark:text-cyan-400 opacity-70 hover:opacity-100 transition-opacity"
          >
            <BellIcon size={18} />
            <span className="text-sm">Notifications</span>
          </motion.button>
        </div>
      </div>

      {/* Center section - Search */}
      <div className="hidden md:flex flex-1 max-w-xl mx-8">
        <div className="w-full relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 dark:from-cyan-500 dark:to-purple-500 rounded-lg opacity-25 group-hover:opacity-40 transition-opacity" />
          <div className="relative flex items-center bg-white dark:bg-black/40 rounded-lg border border-indigo-200 dark:border-white/10 px-4 py-2 w-full">
            <SearchIcon
              size={20}
              className="text-indigo-600 dark:text-cyan-400 mr-2"
            />
            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent w-full outline-none text-indigo-600 dark:text-cyan-400 placeholder:text-indigo-400/50 dark:placeholder:text-cyan-400/50"
            />
          </div>
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-3">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="md:hidden p-2 rounded-full border border-indigo-200 dark:border-cyan-400/30 cursor-pointer"
        >
          <SearchIcon
            size={20}
            className="text-indigo-600 dark:text-cyan-400"
          />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="md:hidden p-2 rounded-full border border-indigo-200 dark:border-cyan-400/30 cursor-pointer"
        >
          <MenuIcon size={20} className="text-indigo-600 dark:text-cyan-400" />
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() =>
            user ? signOut(auth) : router.navigate({ to: "/auth" })
          }
          className="px-6 py-2 rounded-full border border-indigo-200 dark:border-cyan-400/30 text-indigo-600 dark:text-cyan-400 font-semibold transition-all hover:bg-indigo-50 dark:hover:bg-cyan-400/10"
        >
          {user ? "Logout" : "Login"}
        </motion.button>
      </div>
    </motion.div>
  )
}
