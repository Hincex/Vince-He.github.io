// 组件
import { AliveScope } from 'react-activation';
import { HashRouter } from 'react-router-dom';
import Content from './components/Content';
import Header from './components/Header';

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
