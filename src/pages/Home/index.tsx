import { useContext } from 'react';
// 样式
import styles from './index.module.scss';
import { AppContext } from '@/model';

/**
 * 首页
 */
export default () => {
  const { viewCount } = useContext(AppContext);

  return (
    <div className={styles.home}>
      <div className={styles.home__body}>
        <div className={styles.home__body__leading}>Hello,</div>
        <div>Vince Here...</div>
        <div>访问次数: {viewCount}</div>
      </div>
    </div>
  );
};
