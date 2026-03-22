/**
 * 实现思路：应用主组件，配置 TanStack Router
 * 使用 RouterProvider 提供路由功能
 * 核心数据：
 * - router: TanStack Router 实例
 */
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

// 创建路由器实例，配置 basepath 适配子路径部署
const router = createRouter({
  routeTree,
  basepath: '/react-lab',
})

// 注册路由器类型声明
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

function App() {
  return <RouterProvider router={router} />
}

export default App
