import { useEffect, useState } from 'react';
import { getProduct } from '../../services/api';
import { useParams } from 'react-router-dom';
import css from './ItemDetails.module.css';

export default function ItemDetails({ handleButtonClick, isLogged }) {
  const { itemId } = useParams();
  const [product, setProduct] = useState({});
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(prev => (prev ? prev - 1 : prev));
  };

  const decrease = () => {
    setCounter(prev => prev + 1);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const product = await getProduct(itemId);
        setProduct(product);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [itemId]);

  return (
    <main className={css.container}>
      <img width="300" alt={product.title} src={product.image} />
      <h3>{product.title}</h3>
      <p>{product.price} USD</p>
      <p>{product.description}</p>
      {isLogged ? (
        <div className={css.wrapper}>
          <button
            className={css.button}
            disabled={!counter}
            onClick={() => {
              handleButtonClick(product, counter);
            }}
            type="button"
          >
            Add to cart
          </button>
          <button
            className={css.button}
            disabled={!counter}
            onClick={increase}
            type="button"
          >
            -
          </button>
          <p>{counter}</p>
          <button className={css.button} onClick={decrease} type="button">
            +
          </button>
        </div>
      ) : (
        <p className={css.notice}>Чтобы добавить товар в корзину залогинтесь</p>
      )}
    </main>
  );
}
