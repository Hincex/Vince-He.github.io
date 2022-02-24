// 插件
import { HashRouter } from 'react-router-dom';
import { AliveScope } from 'react-activation';
// 组件
import Content from './components/Content';
import Header from './components/Header';

/**
 * 布局
 */
const LayoutView: React.FC = () => {
  return (
    <HashRouter>
      <AliveScope>
        {/* 头部组件 */}
        <Header />
        {/* 头部组件 END */}

        {/* 内容 */}
        <Content />
        {/* 内容 END */}
      </AliveScope>
    </HashRouter>
  );
};

export default LayoutView;
