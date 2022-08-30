import style from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout.jsx';
import Catalogue from '../pages/Catalogue/Catalogue';
import ItemDetails from '../pages/ItemDetails/ItemDetails.jsx';
import About from '../pages/About';
import NotFounded from '../pages/NotFounded';
import Cart from '../pages/Cart/Cart';
import { Modal } from '../components/Modal/Modal.jsx';

import { useState } from 'react';

function App() {
  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <div className={style.App}>
      <Routes>
        <Route
          path="/"
          element={<SharedLayout setIsModalOpened={setIsModalOpened} />}
        >
          <Route index element={<Catalogue />} />
          <Route path="products/:itemId" element={<ItemDetails />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NotFounded />} />
        </Route>
      </Routes>
      {isModalOpened && <Modal onClose={() => setIsModalOpened(false)} />}
    </div>
  );
}

export default App;
