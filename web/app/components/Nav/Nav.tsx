import { useRouter } from "@tanstack/react-router"
import { signOut } from "firebase/auth"
import { motion } from "framer-motion"
import { SearchIcon, MenuIcon, BellIcon, HomeIcon } from "lucide-react"
import { useAuth } from "~/context/FirebaseContext"
import { auth } from "~/lib/firebase"
import { ArrowRightIcon } from "lucide-react"

export const Nav = () => {
  const router = useRouter()
  const { user } = useAuth()

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="flex z-[100] justify-between border-b-[1px] bg-white/50 bg-blur-sm dark:bg-black/50 shadow-sm dark:shadow-[0_1px_12px_-2px_var(--neon-cyan)] h-[74px] fixed top-0 left-0 right-0 items-center px-6"
    >
      {/* Left section */}
      <div className="flex items-center gap-4">
        <motion.h1
          className="text-2xl font-bold text-black dark:text-[var(--neon-cyan)]"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          SVG
        </motion.h1>

        <div className="hidden md:flex gap-4 ml-8">
          <motion.button
            whileHover={{ y: -2 }}
            className="flex items-center gap-2 text-indigo-600 dark:text-[var(--neon-cyan)] opacity-70 hover:opacity-100 transition-opacity"
          >
            <HomeIcon size={18} />
            <span className="text-sm">Home</span>
          </motion.button>

          <motion.button
            whileHover={{ y: -2 }}
            className="flex items-center gap-2 text-indigo-600 dark:text-[var(--neon-cyan)] opacity-70 hover:opacity-100 transition-opacity"
          >
            <BellIcon size={18} />
            <span className="text-sm">Notifications</span>
          </motion.button>
        </div>
      </div>

      {/* Center section - Search */}
      <div className="hidden md:flex flex-1 max-w-xl mx-8"></div>

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
          <MenuIcon
            size={20}
            className="text-indigo-600 dark:text-[var(--neon-yellow)]"
          />
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() =>
            user ? signOut(auth) : router.navigate({ to: "/auth" })
          }
        >
          {user ? (
            <motion.div
              initial={{ width: "36px", scale: 0 }}
              animate={{ width: "140px", scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative border border-emerald-500/50 bg-black/5 dark:bg-black/40 backdrop-blur-sm overflow-hidden justify-end whitespace-nowrap dark:text-emerald-400 h-[44px] font-mono font-semibold rounded-full px-4 py-2 flex gap-2 items-center transition-all group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-blue-500/10 dark:from-emerald-500/20 dark:via-cyan-500/20 dark:to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="mr-auto relative z-10"
              >
                Logout
              </motion.span>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="relative z-10"
              >
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ width: "36px", scale: 0 }}
              animate={{ width: "180px", scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative border border-emerald-500/50 bg-black/5 dark:bg-black/40 backdrop-blur-sm overflow-hidden justify-end whitespace-nowrap dark:text-emerald-400 h-[44px] font-mono font-semibold rounded-full px-4 py-2 flex gap-2 items-center transition-all group"
            >
              <motion.div
                className="absolute inset-0 bg-inherit opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="mr-auto relative z-10"
              >
                Get Started
              </motion.span>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="relative z-10"
              >
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </motion.div>
          )}
        </motion.button>
      </div>
    </motion.div>
  )
}
