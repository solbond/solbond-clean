import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth"
import { useState } from "react"
import { $createUser } from "~/actions/actions"
import { auth } from "~/lib/firebase"
import { ErrorType } from "~/routes/_app/auth"
import { getError } from "./Errors"

export default function SignUpCase({
  setCurrentCase,
}: {
  setCurrentCase: (
    currentCase:
      | "signup"
      | "login"
      | "link-sent"
      | "verified"
      | "forgot-password",
  ) => void
}) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<ErrorType>(null)

  const handleSignUp = () => {
    setError(null)

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user

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
        setError(getError(errorCode))
        console.log(errorCode, errorMessage)
      })
  }

  return (
    <div className="w-full">
      <div className="mb-4">
        <h1 className="text-[36px] font-bold">Sign Up</h1>
        <p className="text-sm text-gray-500">
          Create an account to get started
        </p>
      </div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className={`w-full p-2 outline-none bg-gray-100  rounded-md border ${
          error?.type === "email" ? "border-red-500" : "border-none"
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
        className={`w-full p-2 outline-none bg-gray-100  rounded-md border mt-2 ${
          error?.type === "password" ? "border-red-500" : "border-none"
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
        className="w-full mt-4 font-bold bg-black text-white p-3 rounded-xl"
      >
        Create Account
      </button>
      <div className="text-[14px] text-black/50 text-end mt-2">
        Already have an account?{" "}
        <span
          className="cursor-pointer text-black font-semibold hover:underline transition-all"
          onClick={() => setCurrentCase("login")}
        >
          Log In
        </span>
      </div>
    </div>
  )
}
