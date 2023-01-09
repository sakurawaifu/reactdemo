import { createBrowserRouter } from 'react-router-dom'
import commonRoutes from './commonRoutes'
import normalizeRoutes from '@/route/normalizeRoutes'

const router = createBrowserRouter(normalizeRoutes(commonRoutes))

export default router
