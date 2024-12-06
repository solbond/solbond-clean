import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_app/product")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="h-screen w-full flex items-center font-bold text-2xl justify-center">
      Hello "/_app/product"!
    </div>
  )
}
