import { Outlet, createFileRoute } from "@tanstack/react-router"
import { AuthProvider } from "~/context/FirebaseContext"
import { Nav } from "~/components/Nav/Nav"
import { Suspense } from "react"

export const Route = createFileRoute("/_app")({
  component: LayoutComponent,
})

function LayoutComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthProvider>
        <Nav />
        <Outlet />
      </AuthProvider>
    </Suspense>
  )
}
