import { useRouter } from "@tanstack/react-router"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { auth } from "~/lib/firebase"
import { ErrorType } from "~/routes/_app/auth"
import { getError } from "./Errors"

export default function SignInCase({
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
  const router = useRouter()

  const handleSignIn = () => {
    setError(null)

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        router.navigate({ to: "/" })
      })
      .catch((error) => {
        const errorCode = error.code
        setError(getError(errorCode))
        console.log(errorCode, error.message)
      })
  }

  return (
    <div>
      <div className="mb-4">
        <h1 className="text-[36px] font-bold">Log In</h1>
        <p className="text-sm text-gray-500">
          Sign in to your account to continue
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
      <p
        onClick={() => setCurrentCase("forgot-password")}
        className="text-[12px] text-gray-500 mt-1 cursor-pointer"
      >
        Forgot password?
      </p>
      <button
        onClick={handleSignIn}
        className="w-full mt-4 font-bold bg-black text-white p-3 rounded-xl"
      >
        Sign Up
      </button>
      <div className="text-[14px] text-black/50 text-end mt-2">
        Don't have an account?{" "}
        <span
          className="cursor-pointer text-black font-semibold hover:underline transition-all"
          onClick={() => setCurrentCase("signup")}
        >
          Login In
        </span>
      </div>
    </div>
  )
}
