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
    "signup" | "login" | "link-sent" | "verified"
  >("signup")

  return (
    <div className="h-screen w-full flex-col flex gap-1 items-center justify-center">
      <div className="bg-gray-100 shadow-lg rounded-xl p-4 h-[300px] w-[260px]">
        <motion.div
          key={currentCase}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
            delay: 0.4,
          }}
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
      </div>
      <button
        className="bg-black text-white p-2 w-[260px] rounded-md "
        onClick={() => console.log(user)}
      >
        Get User
      </button>
    </div>
  )
}

export const Route = createFileRoute("/_app/auth")({
  component: RouteComponent,
})
