import { ReactNode, Suspense } from 'react';
// 插件
import KeepAlive from 'react-activation';
import { Routes, Route } from 'react-router-dom';
// 组件
import { routers } from '@/router/routers';
// 样式
import styles from '../index.module.scss';

// 内容组件
const Content: React.FC = () => {
  const RouteRender = ({ keepAlive, path, element }: { keepAlive?: boolean; path: string; element: ReactNode }) => {
    return (
      <Suspense fallback={<div>ss</div>}>
        <div className={styles.content}>{keepAlive ? <KeepAlive key={path}>{element}</KeepAlive> : element}</div>
      </Suspense>
    );
  };
  return (
    <Routes>
      {routers.map((item) => (
        <Route
          key={item.key}
          path={item.path}
          element={<RouteRender key={item.key} keepAlive={item.keepAlive} path={item.path} element={item.element} />}
        />
      ))}
    </Routes>
  );
};

export default Content;
