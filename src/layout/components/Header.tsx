import { useMemo } from 'react';
// 插件
import { Link, NavLink } from 'react-router-dom';
import { routers } from '@/router/routers';
// 组件
import Button from '@/components/Button';
// 样式
import styles from '../index.module.scss';

const Header: React.FC = () => {
  const Logo = useMemo(
    () => () => {
      return (
        <div className={styles.header__logo}>
          <Link to='/'>{Math.random()}</Link>
        </div>
      );
    },
    []
  );

  const Nav = () => {
    return (
      <div className={styles.header__nav}>
        {/* 导航 */}
        <div className={styles.header__nav__content}>
          {routers.map((item) => (
            <NavLink
              key={item.key}
              to={item.path}
              className={({ isActive }) =>
                styles.header__nav__content__item + (isActive ? ` ${styles['header__nav__content__item--active']}` : '')
              }
            >
              {item.name}
            </NavLink>
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
      {Logo()}
      {/* 左侧Logo区域 END */}

      {/* 右侧Nav区域 */}
      <Nav />
      {/* 右侧Nav区域 END */}
    </div>
  );
};

export default Header;
