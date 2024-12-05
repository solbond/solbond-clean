import { useRouter } from "@tanstack/react-router"
import { signOut } from "firebase/auth"
import { motion } from "framer-motion"
import { SearchIcon } from "lucide-react"
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
      className="flex z-[100] justify-between bg-white/20 backdrop-blur-sm shadow-md h-[74px] fixed top-0 left-0 right-0 items-center p-4"
    >
      <h1 className="text-2xl">Solbond</h1>
      <div className="flex gap-2 items-center">
        <div className="bg-white hover:bg-gray-100 transition-all shadow-md w-fit p-2 rounded-full">
          <SearchIcon size={20} />
        </div>
        <button
          onClick={() =>
            user ? signOut(auth) : router.navigate({ to: "/auth" })
          }
          className="px-4 text-[14px] p-2 rounded-full bg-gradient-to-r from-rose-400 to-rose-600 text-white font-semibold"
        >
          {user ? "Logout" : "Login"}
        </button>
      </div>
    </motion.div>
  )
}
