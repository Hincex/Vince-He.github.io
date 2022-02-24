// 样式
import styles from './index.module.scss';

interface IProps {}

/**
 * 骨架屏
 */
const Skeleton: React.FC<IProps> = () => {
  return (
    <div className={styles.skeleton}>
      <ul>
        <li />
        <li />
        <li />
      </ul>
    </div>
  );
};

export default Skeleton;
