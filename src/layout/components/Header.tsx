// 插件
import { Navigate } from 'react-router-dom';
import { routers } from '@/router/routers';
// 组件
import Button from '@/components/Button';
// 样式
import styles from '../index.module.scss';

const Header: React.FC = () => {
  const Logo = () => {
    function goToHome() {
      Navigate({ to: '/' });
    }

    return (
      <div className={styles.header__logo} onClick={goToHome}>
        <a>Logo</a>
      </div>
    );
  };

  const Nav = () => {
    return (
      <div className={styles.header__nav}>
        {/* 导航 */}
        <div className={styles.header__nav__content}>
          {routers.map((item) => (
            <div key={item.key} className={styles.header__nav__content__item}>
              {item.name}
            </div>
          ))}
        </div>
        {/* 导航 END */}

        <div className={styles.header__nav__action}>
          <Button>Contact Me</Button>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.header}>
      {/* 左侧Logo区域 */}
      <Logo />
      {/* 左侧Logo区域 END */}

      {/* 右侧Nav区域 */}
      <Nav />
      {/* 右侧Nav区域 END */}
    </div>
  );
};

export default Header;
