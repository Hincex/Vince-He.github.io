import { useEffect } from 'react';
// 插件
import Bmob from 'hydrogen-js-sdk';
import { useSetState } from 'react-use';
// 组件
import LayoutView from '@/layout';
import { AppContext } from '@/model';

// APP入口
export default () => {
  const [state, setState] = useSetState({
    viewCount: 0
  });

  function queryViewcount() {
    const query = Bmob.Query('View');
    query.find().then((data: any) => {
      data.findIndex((item: any) => item.key === 'viewCount');
      const index = data.findIndex((item: any) => item.key === 'viewCount');
      if (index !== -1) {
        setState({
          viewCount: Number(data[index].data)
        });

        // 防止本地测试刷新访问
        if (process.env.NODE_ENV === 'production') {
          query.set('id', data[index].objectId);
          query.set('data', String(Number(data[index].data) + 1));
          query.save();
        }
      }
    });
  }

  useEffect(() => {
    Bmob.initialize('934344537f98df40', '123456');

    queryViewcount();
  }, []);

  return (
    <AppContext.Provider
      value={{
        viewCount: state.viewCount
      }}
    >
      <LayoutView />
    </AppContext.Provider>
  );
};
