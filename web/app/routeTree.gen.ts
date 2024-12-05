/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AppRouteImport } from './routes/_app/route'
import { Route as AppIndexImport } from './routes/_app/index'
import { Route as AppAuthImport } from './routes/_app/auth'

// Create/Update Routes

const AppRouteRoute = AppRouteImport.update({
  id: '/_app',
  getParentRoute: () => rootRoute,
} as any)

const AppIndexRoute = AppIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => AppRouteRoute,
} as any)

const AppAuthRoute = AppAuthImport.update({
  id: '/auth',
  path: '/auth',
  getParentRoute: () => AppRouteRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_app': {
      id: '/_app'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AppRouteImport
      parentRoute: typeof rootRoute
    }
    '/_app/auth': {
      id: '/_app/auth'
      path: '/auth'
      fullPath: '/auth'
      preLoaderRoute: typeof AppAuthImport
      parentRoute: typeof AppRouteImport
    }
    '/_app/': {
      id: '/_app/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof AppIndexImport
      parentRoute: typeof AppRouteImport
    }
  }
}

// Create and export the route tree

interface AppRouteRouteChildren {
  AppAuthRoute: typeof AppAuthRoute
  AppIndexRoute: typeof AppIndexRoute
}

const AppRouteRouteChildren: AppRouteRouteChildren = {
  AppAuthRoute: AppAuthRoute,
  AppIndexRoute: AppIndexRoute,
}

const AppRouteRouteWithChildren = AppRouteRoute._addFileChildren(
  AppRouteRouteChildren,
)

export interface FileRoutesByFullPath {
  '': typeof AppRouteRouteWithChildren
  '/auth': typeof AppAuthRoute
  '/': typeof AppIndexRoute
}

export interface FileRoutesByTo {
  '/auth': typeof AppAuthRoute
  '/': typeof AppIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_app': typeof AppRouteRouteWithChildren
  '/_app/auth': typeof AppAuthRoute
  '/_app/': typeof AppIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '' | '/auth' | '/'
  fileRoutesByTo: FileRoutesByTo
  to: '/auth' | '/'
  id: '__root__' | '/_app' | '/_app/auth' | '/_app/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  AppRouteRoute: typeof AppRouteRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  AppRouteRoute: AppRouteRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_app"
      ]
    },
    "/_app": {
      "filePath": "_app/route.tsx",
      "children": [
        "/_app/auth",
        "/_app/"
      ]
    },
    "/_app/auth": {
      "filePath": "_app/auth.tsx",
      "parent": "/_app"
    },
    "/_app/": {
      "filePath": "_app/index.tsx",
      "parent": "/_app"
    }
  }
}
ROUTE_MANIFEST_END */
