/**
 * 实现思路：应用主组件，配置 React Router 路由
 * 使用 BrowserRouter 并设置 basename 适配子路径部署
 * 使用 lazy + Suspense 实现代码分割，优化性能
 * 核心数据：
 * - basename: '/react-lab' - 子路径配置
 * - lazy: 动态导入实现代码分割
 * - Suspense: 配合 Loading 组件显示加载状态
 */
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Loading from './components/Loading';

// 懒加载页面组件，实现代码分割
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));

// 子路径配置，与 vite.config.ts 中的 base 保持一致
const BASENAME = '/react-lab';

function App() {
  return (
    <BrowserRouter basename={BASENAME}>
      <Layout>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
