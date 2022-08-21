import { Outlet, Link } from 'react-router-dom';

export default function SharedLayout() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Catalogue</Link>
          <Link to="/about">About</Link>
        </nav>
        <div>Cart</div>
        <button>Login</button>
      </header>
      <Outlet />
    </>
  );
}
