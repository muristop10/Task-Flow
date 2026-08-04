import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryProvider = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryProvider}>
    <RouterProvider router={router} />
  </QueryClientProvider>
)
