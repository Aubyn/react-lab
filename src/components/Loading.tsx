/**
 * 实现思路：加载状态组件
 * 在代码分割加载时显示，提升用户体验
 * 核心数据：
 * - spinner: DaisyUI 的 loading spinner
 */
export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <span className="loading loading-spinner loading-lg text-primary"></span>
        <p className="text-base-content/70">加载中...</p>
      </div>
    </div>
  );
}
