import { RootRoute, Router } from '@tanstack/react-router'
import Root from './routes/root'

const rootRoute = new RootRoute({
  component: Root,
})

export const routeTree = rootRoute.addChildren([])

export const router = new Router({ routeTree })
