import { createFileRoute } from '@tanstack/react-router'

/**
 * 实现思路：关于页面，演示路由功能
 * 展示项目技术栈和部署信息
 * 核心数据：
 * - techStack: 技术栈列表
 * - deployTarget: 部署目标
 */
const techStack = [
  { name: 'React', version: '19.x', desc: '用于构建用户界面的 JavaScript 库' },
  { name: 'TanStack Router', version: '1.x', desc: 'React 的类型安全路由库' },
  { name: 'Vite', version: '6.x', desc: '下一代前端构建工具' },
  { name: 'TailwindCSS', version: '4.x', desc: '原子化 CSS 框架' },
  { name: 'DaisyUI', version: '5.x', desc: 'TailwindCSS 组件库' },
  { name: 'pnpm', version: '10.x', desc: '快速、节省磁盘空间的包管理器' },
]

function About() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-4">关于项目</h1>
      <p className="text-center text-base-content/70 mb-12">
        这是一个演示项目，展示如何构建和部署到 GitHub Pages 子路径
      </p>

      <div className="card bg-base-200 shadow-xl mb-8">
        <div className="card-body">
          <h2 className="card-title text-2xl mb-4">技术栈</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {techStack.map((tech) => (
              <div key={tech.name} className="card bg-base-100">
                <div className="card-body p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg">{tech.name}</h3>
                    <span className="badge badge-primary badge-sm">{tech.version}</span>
                  </div>
                  <p className="text-sm text-base-content/70 mt-1">{tech.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card bg-primary text-primary-content shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl">部署信息</h2>
          <div className="space-y-2 mt-2">
            <p>
              <span className="font-semibold">部署目标：</span>GitHub Pages
            </p>
            <p>
              <span className="font-semibold">子路径：</span>/react-lab/
            </p>
            <p>
              <span className="font-semibold">构建工具：</span>Vite
            </p>
            <p>
              <span className="font-semibold">路由方案：</span>TanStack Router
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Route = createFileRoute('/about')({
  component: About,
})
