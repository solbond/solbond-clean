import { createFileRoute } from "@tanstack/react-router"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { motion } from "framer-motion"
import { useState } from "react"
import LinkSentCase from "~/components/auth/LinkSentCase"
import SignInCase from "~/components/auth/SignInCase"
import SignUpCase from "~/components/auth/SignUpCase"
import VerifiedCase from "~/components/auth/VerifiedCase"
import { useAuth } from "~/context/FirebaseContext"
import { auth } from "~/lib/firebase"

export type ErrorType = {
  type: "email" | "password" | "other"
  message: string
} | null

function RouteComponent() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { user } = useAuth()

  const [currentCase, setCurrentCase] = useState<
    "signup" | "login" | "link-sent" | "verified" | "forgot-password"
  >("signup")

  return (
    <div className="h-screen w-full overflow-hidden relative flex">
      <div className="w-2/3 relative bg-gradient-to-br from-rose-500 to-indigo-500">
        {/* Left */}
        <motion.div
          initial={{ scale: 1.5 }}
          animate={{ scale: [1.5, 1.7, 1.5] }}
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
          className="absolute bottom-[-20px] rotate-[30deg] left-[-20px] bg-white/10 w-[200px] h-[200px] rounded-2xl"
        >
          <motion.div className="bg-white/20 w-[180px] absolute bottom-0 left-0 h-[180px] rounded-2xl"></motion.div>
          <motion.div className="bg-white/30 w-[160px] absolute bottom-0 left-0 h-[160px] rounded-2xl"></motion.div>
          <motion.div className="bg-white/40 w-[140px] absolute bottom-0 left-0 h-[140px] rounded-2xl"></motion.div>
          <motion.div className="bg-white/50 w-[120px] absolute bottom-0 left-0 h-[120px] rounded-2xl"></motion.div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: [1.2, 1.3, 1.2] }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 1,
          }}
          className="absolute top-[-40px] right-[-40px] bg-white/20 w-[300px] h-[300px] rounded-2xl"
        >
          <motion.div className="bg-white/30 w-[300px] absolute top-0 right-0 h-[300px] rounded-2xl"></motion.div>
          <motion.div className="bg-white/10 w-[270px] absolute top-[15px] right-[15px] h-[270px] rounded-2xl"></motion.div>
          <motion.div className="bg-white/10 w-[240px] absolute top-[30px] right-[30px] h-[240px] rounded-2xl"></motion.div>
          <motion.div className="bg-white/10 w-[210px] absolute top-[45px] right-[45px] h-[210px] rounded-2xl"></motion.div>
          <motion.div className="bg-white/20 w-[180px] absolute top-[60px] right-[60px] h-[180px] rounded-2xl"></motion.div>
          <motion.div className="bg-white/40 w-[150px] absolute top-[75px] right-[75px] h-[150px] rounded-2xl"></motion.div>
          <motion.div className="bg-white/0 w-[120px] absolute top-[90px] right-[90px] h-[120px] rounded-2xl"></motion.div>
        </motion.div>
      </div>

      <div className="w-1/3 bg-white h-full">
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="h-full w-full p-8 flex items-center justify-center"
        >
          <motion.div
            key={currentCase}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: 0.4,
            }}
            className="w-full"
          >
            {currentCase === "signup" && (
              <SignUpCase setCurrentCase={setCurrentCase} />
            )}
            {currentCase === "login" && (
              <SignInCase setCurrentCase={setCurrentCase} />
            )}
            {currentCase === "link-sent" && (
              <LinkSentCase
                currentCase={currentCase}
                setCurrentCase={setCurrentCase}
              />
            )}
            {currentCase === "verified" && <VerifiedCase />}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export const Route = createFileRoute("/_app/auth")({
  component: RouteComponent,
})
