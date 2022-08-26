import style from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout.jsx';
import Catalogue from '../pages/Catalogue/Catalogue';
import ItemDetails from '../pages/ItemDetails/ItemDetails.jsx';
import About from '../pages/About';
import NotFounded from '../pages/NotFounded';
import { Modal } from '../components/Modal/Modal.jsx';

import { useState } from 'react';

function App() {
  const [cartItem, setCartItem] = useState(0);
  const [cartValue, setCartValue] = useState(0);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const handleButtonClick = (product, counter = 1) => {
    setCartItem(prev => prev + counter);
    setCartValue(prev => prev + counter * product.price);
  };

  const handleLogging = () => {
    isLogged ? setIsLogged(false) : setIsModalOpened(true);
  };

  return (
    <div className={style.App}>
      <Routes>
        <Route
          path="/"
          element={
            <SharedLayout
              isLogged={isLogged}
              handleLogging={handleLogging}
              cartItem={cartItem}
              cartValue={cartValue}
            />
          }
        >
          <Route
            index
            element={
              <Catalogue
                isLogged={isLogged}
                handleButtonClick={handleButtonClick}
              />
            }
          />
          <Route
            path="products/:itemId"
            element={
              <ItemDetails
                isLogged={isLogged}
                handleButtonClick={handleButtonClick}
              />
            }
          />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFounded />} />
        </Route>
      </Routes>
      {isModalOpened && (
        <Modal
          setIsLogged={setIsLogged}
          onClose={() => setIsModalOpened(false)}
        />
      )}
    </div>
  );
}

export default App;
