/**
 * 实现思路：布局组件，包含导航栏和页脚
 * 使用 DaisyUI 的 navbar 和 footer 组件
 * 核心数据：
 * - navItems: 导航项列表
 * - Link: React Router 的链接组件（使用 to 属性）
 * - children: React 子元素
 */
import type { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/', label: '首页' },
  { path: '/about', label: '关于' },
];

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-base-100">
      {/* 导航栏 */}
      <nav className="navbar bg-base-200 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex-1">
            <Link to="/" className="btn btn-ghost text-xl font-bold">
              <span className="text-primary">React</span>Lab
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1 gap-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`${
                      location.pathname === item.path
                        ? 'bg-primary text-primary-content'
                        : 'hover:bg-base-300'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* 主内容区 */}
      <main className="flex-1">
        {children}
      </main>

      {/* 页脚 */}
      <footer className="footer footer-center p-4 bg-base-200 text-base-content">
        <div>
          <p className="text-sm">
            © {new Date().getFullYear()} React Lab. Built with{' '}
            <span className="text-primary">React + Vite + TailwindCSS</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
