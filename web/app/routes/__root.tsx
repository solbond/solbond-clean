import type { QueryClient } from "@tanstack/react-query"
import {
  Outlet,
  ScrollRestoration,
  createRootRouteWithContext,
} from "@tanstack/react-router"
import { Meta, Scripts } from "@tanstack/start"
import * as React from "react"
import { Suspense, useState, useEffect } from "react"
import { DefaultCatchBoundary } from "~/components/DefaultCatchBoundary"
import { Fonts } from "~/components/Fonts"
import { NotFound } from "~/components/NotFound"
import { seo } from "~/lib/seo"
import appCss from "~/styles/app.css?url"

function RootComponent() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <RootDocument>
      {mounted ? (
        <Suspense
          fallback={
            <div className="h-screen w-full flex items-center font-bold text-2xl justify-center">
              Loading...
            </div>
          }
        >
          <Outlet />
        </Suspense>
      ) : (
        <div className="h-screen w-full flex items-center font-bold text-2xl justify-center">
          Loading...
        </div>
      )}
    </RootDocument>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <Meta />
        <Fonts />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      ...seo({
        title: "",
        description: ``,
      }),
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
      { rel: "manifest", href: "/site.webmanifest", color: "#fffff" },
      { rel: "icon", href: "/favicon.ico" },
    ],
  }),
  errorComponent: (props) => {
    return (
      <RootDocument>
        <DefaultCatchBoundary {...props} />
      </RootDocument>
    )
  },
  notFoundComponent: () => <NotFound />,
  component: RootComponent,
})
