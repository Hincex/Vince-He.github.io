// 样式
import styles from './index.module.scss';

/**
 * 首页
 */
export default () => {
  return (
    <div className={styles.home}>
      <div className={styles.home__body}>
        <div className={styles.home__body__leading}>Hello,</div>
        <div>Vince Here...</div>
      </div>
    </div>
  );
};
