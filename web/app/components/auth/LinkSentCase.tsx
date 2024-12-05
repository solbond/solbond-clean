import { User, reload } from "firebase/auth"
import { useEffect, useState } from "react"
import { useAuth } from "~/context/FirebaseContext"

export default function LinkSentCase({
  currentCase,
  setCurrentCase,
}: {
  currentCase: "signup" | "login" | "link-sent" | "verified"
  setCurrentCase: (
    currentCase: "signup" | "login" | "link-sent" | "verified",
  ) => void
}) {
  const { user } = useAuth()
  const [checking, setChecking] = useState(false)

  useEffect(() => {
    if (!user) return

    const checkEmailVerification = async () => {
      if (checking) return
      setChecking(true)

      try {
        await reload(user)
        if (user.emailVerified) {
          setCurrentCase("verified")
        }
      } catch (error) {
        console.error("Error checking email verification:", error)
      } finally {
        setChecking(false)
      }
    }

    checkEmailVerification()

    const interval = setInterval(checkEmailVerification, 3000)

    return () => clearInterval(interval)
  }, [user, checking, setCurrentCase])

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-xl font-semibold">Verify Your Email</h2>
      <p className="text-sm text-center text-gray-600">
        We've sent a verification link to your email address. Please check your
        inbox and click the link to verify your account.
      </p>
      <div className="animate-pulse text-sm text-gray-500">
        Waiting for verification...
      </div>
    </div>
  )
}
