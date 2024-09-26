import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/posts/add')({
  component: () => <div>Hello /posts/add!</div>,
})
