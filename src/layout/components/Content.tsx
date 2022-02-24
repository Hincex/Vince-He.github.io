// 组件
import RouterView from '@/router';
// 样式
import styles from '../index.module.scss';

const Content: React.FC = () => {
  return (
    <div className={styles.content}>
      <RouterView />
    </div>
  );
};

export default Content;
