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
    <div className="h-screen w-full overflow-hidden relative flex-col flex gap-1 bg-gradient-to-br from-rose-500 to-indigo-500 items-center justify-center">
      <motion.div
        initial={{
          scale: 2,
        }}
        animate={{
          y: [100, 0],
          x: [-100, 0],
        }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute bottom-[-20px] scale-x-[1.5] rotate-[30deg] left-[-20px]  bg-white/10 w-[200px] h-[200px] rounded-2xl"
      >
        <motion.div
          animate={{
            y: [100, 0],
            x: [-100, 0],
          }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="bg-white/20 w-[180px] absolute bottom-0 left-0 h-[180px] rounded-2xl"
        ></motion.div>
        <motion.div
          animate={{
            y: [100, 0],
            x: [-100, 0],
          }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="bg-white/30 w-[160px] absolute bottom-0 left-0 h-[160px] rounded-2xl"
        ></motion.div>
        <motion.div
          animate={{
            y: [100, 0],
            x: [-100, 0],
          }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="bg-white/40 w-[140px] absolute bottom-0 left-0 h-[140px] rounded-2xl"
        ></motion.div>
        <motion.div
          animate={{
            y: [100, 0],
            x: [-100, 0],
          }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="bg-white/50 w-[120px] absolute bottom-0 left-0 h-[120px] rounded-2xl"
        ></motion.div>
      </motion.div>
      <div className="absolute z-10 right-0 top-0  h-full">
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="bg-white  backdrop-blur-md  shadow-lg  p-8 flex items-center justify-center h-full w-[480px]"
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
