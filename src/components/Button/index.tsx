// 样式
import styles from './index.module.scss';

interface IProps {}

// 通用按钮
const Button: React.FC<IProps> = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};

export default Button;
