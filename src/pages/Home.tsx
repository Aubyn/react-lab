/**
 * 实现思路：首页组件，展示 hello-world
 * 使用 DaisyUI 的 hero 组件创建醒目的展示效果
 * 核心数据：
 * - title: "Hello World" - 页面主标题
 * - subtitle: 副标题说明
 */
export default function Home() {
  return (
    <div className="hero min-h-[80vh] bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Hello World
          </h1>
          <p className="py-6 text-lg text-base-content/70">
            欢迎使用 React + Vite + TailwindCSS + DaisyUI 构建的现代化前端应用
          </p>
          <div className="flex gap-4 justify-center">
            <button className="btn btn-primary">开始使用</button>
            <button className="btn btn-outline">了解更多</button>
          </div>
          <div className="mt-8 flex justify-center gap-4 text-sm text-base-content/50">
            <span className="badge badge-outline">React 19</span>
            <span className="badge badge-outline">Vite 6</span>
            <span className="badge badge-outline">TailwindCSS 4</span>
            <span className="badge badge-outline">DaisyUI 5</span>
          </div>
        </div>
      </div>
    </div>
  );
}
