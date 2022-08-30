import { Outlet, NavLink, Link } from 'react-router-dom';
import css from './SharedLayout.module.css';
import useLoggingSlice from '../../redux/userSlice';
import useCart from '../../redux/cartSlice';
import icon from '../../icons/3843094771654797549.svg';

export default function SharedLayout({ setIsModalOpened }) {
  const { handleLogOut, isLogged, userName } = useLoggingSlice();
  const { totalValue, totalItems } = useCart();

  const getClassName = ({ isActive }) => {
    const classList = isActive ? `${css.link} ${css.active}` : css.link;
    return classList;
  };

  const handleClick = () => {
    isLogged ? handleLogOut() : setIsModalOpened(true);
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
          <div style={{ display: 'flex', gap: '20px' }}>
            <div>
              <p>
                {`В корзине ${totalItems} товаров на сумму ${totalValue.toFixed(
                  2
                )} USD`}
              </p>
              <p> {`Вы вошли как ${userName}`}</p>
            </div>

            <Link to="cart">
              <img width="50px" src={icon} alt="icon" />
            </Link>
          </div>
        )}
        <button className={css.button} onClick={handleClick}>
          {isLogged ? 'Выход' : 'Войти'}
        </button>
      </header>
      <Outlet />
    </div>
  );
}
