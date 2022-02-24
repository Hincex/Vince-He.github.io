import Home from '../pages/Home';
import Test from '../pages/Test';

interface IRouter {
  path: string;
  key: string;
  name: string;
  element: any;
  keepAlive?: boolean;
}

export type { IRouter };

export const routers: Array<IRouter> = [
  {
    path: '/',
    key: 'home',
    name: '首页',
    element: <Home />,
    keepAlive: true
  },
  {
    path: '/test',
    key: 'test',
    name: '测试',
    element: <Test />,
    keepAlive: true
  }
];
