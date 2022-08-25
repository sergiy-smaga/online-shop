import { Outlet, NavLink } from 'react-router-dom';
import css from './SharedLayout.module.css';

export default function SharedLayout({
  cartValue,
  cartItem,
  handleLogging,
  isLogged,
}) {
  const getClassName = ({ isActive }) => {
    const classList = isActive ? `${css.link} ${css.active}` : css.link;
    return classList;
  };

  return (
    <div className={css.container}>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink className={getClassName} to="/">
            Home
          </NavLink>
          <NavLink className={getClassName} to="/about">
            About
          </NavLink>
        </nav>
        {isLogged && (
          <div>{`В корзине ${cartItem} товаров на сумму ${cartValue} USD`}</div>
        )}
        <button onClick={handleLogging}>{isLogged ? 'Выход' : 'Войти'}</button>
      </header>
      <Outlet />
    </div>
  );
}
