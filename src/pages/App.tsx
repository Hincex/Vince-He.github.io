// 组件
import LayoutView from '@/layout';
import { AppContext } from '@/model';

// APP入口
export default () => {
  return (
    <AppContext.Provider value={{}}>
      <LayoutView />
    </AppContext.Provider>
  );
};
