import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth"
import { useState } from "react"
import { $createUser } from "~/actions/actions"
import { auth } from "~/lib/firebase"
import { ErrorType } from "~/routes/_app/auth"

export default function SignUpCase({
  setCurrentCase,
}: {
  setCurrentCase: (
    currentCase: "signup" | "login" | "link-sent" | "verified",
  ) => void
}) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<ErrorType>(null)

  const handleSignUp = () => {
    setError(null)

    const isValidEmail = (email: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(email)
    }

    if (!isValidEmail(email)) {
      setError({
        type: "email",
        message: "Please type in a correct email address",
      })
      return
    }

    if (password.trim() === "") {
      setError({
        type: "password",
        message: "Password is required",
      })
      return
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user

        if (user) {
          // $createUser({ email: user.email })
        }

        sendEmailVerification(user)
          .then(() => {
            setCurrentCase("link-sent")
          })
          .catch((error) => {
            setError({
              type: "other",
              message: "Failed to send verification email. Please try again.",
            })
            console.log(error.code, error.message)
          })
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        setError({
          type: "other",
          message: errorMessage,
        })
        console.log(errorCode, errorMessage)
      })
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold">Sign Up</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className={`w-full p-2 rounded-md border ${
          error?.type === "email" ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error?.type === "email" && (
        <p className="text-red-500 text-sm mt-1">{error.message}</p>
      )}
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className={`w-full p-2 rounded-md border mt-2 ${
          error?.type === "password" ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error?.type === "password" && (
        <p className="text-red-500 text-sm mt-1">{error.message}</p>
      )}
      {error?.type === "other" && (
        <p className="text-red-500 text-sm mt-1">{error.message}</p>
      )}
      <button
        onClick={handleSignUp}
        className="w-full mt-4 bg-black text-white p-2 rounded-md"
      >
        Sign Up
      </button>
      <div>
        Already have an account?{" "}
        <span
          className="cursor-pointer"
          onClick={() => setCurrentCase("login")}
        >
          Login
        </span>
      </div>
    </div>
  )
}
