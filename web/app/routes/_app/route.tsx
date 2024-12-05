import {
  Outlet,
  createFileRoute,
  useLocation,
  useRouter,
} from "@tanstack/react-router"
import { AuthProvider } from "~/context/FirebaseContext"
import { Nav } from "~/components/Nav/Nav"
import { Suspense } from "react"

export const Route = createFileRoute("/_app")({
  component: LayoutComponent,
})

function LayoutComponent() {
  const location = useLocation()
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthProvider>
        {location.pathname === "/auth" ? null : <Nav />}
        <Outlet />
      </AuthProvider>
    </Suspense>
  )
}
