import { ReactNode } from 'react';
// 页面
import Home from '@/pages/Home';
import About from '@/pages/About';

interface IRouter {
  path: string;
  key: string;
  name: string;
  element: ReactNode;
  keepAlive?: boolean;
}

export type { IRouter };

export const routers: Array<IRouter> = [
  {
    path: '/',
    key: 'home',
    name: '首页',
    element: <Home />,
    // element: lazy(() => import('@/pages/Home')),
    keepAlive: true
  },
  {
    path: '/about',
    key: 'about',
    name: '关于',
    element: <About />,
    // element: lazy(() => import('@/pages/Home')),
    keepAlive: true
  }
];
