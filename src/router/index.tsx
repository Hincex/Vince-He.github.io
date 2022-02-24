import { Suspense } from 'react';
// 插件
import KeepAlive, { AliveScope } from 'react-activation';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { routers } from './routers';

// 路由视图
export default () => {
  const _Route = ({ keepAlive, path, element }: { keepAlive?: boolean; path: string; element: JSX.Element }) => {
    return (
      <Suspense fallback={<div>ss</div>}>
        {keepAlive ? <KeepAlive key={path}>{element}</KeepAlive> : { element }}
      </Suspense>
    );
  };

  return (
    <HashRouter>
      <AliveScope>
        <Routes>
          {routers.map((item) => (
            <Route
              key={item.key}
              path={item.path}
              element={<_Route key={item.key} keepAlive={item.keepAlive} path={item.path} element={item.element} />}
            />
          ))}
        </Routes>
      </AliveScope>
    </HashRouter>
  );
};
