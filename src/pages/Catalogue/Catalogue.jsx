import { useEffect, useState } from 'react';
import { getProducts, PAGINATION_STEP } from '../../services/api';
import { Link } from 'react-router-dom';
import css from './Catalogue.module.css';
import useLoggingSlice from '../../redux/userSlice';
import useCart from '../../redux/cartSlice';

export default function Catalogue() {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(PAGINATION_STEP);

  const { isLogged } = useLoggingSlice();
  const { handleAddItem } = useCart();

  useEffect(() => {
    async function fetchData() {
      try {
        const products = await getProducts(limit);
        setProducts(products);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [limit]);

  const handleLoadMore = () => {
    setLimit(prev => prev + PAGINATION_STEP);
  };

  return (
    <>
      <ul className={css.list}>
        {products.map(product => {
          return (
            <li className={css.item} key={product.id}>
              <img
                className={css.img}
                alt={product.title}
                src={product.image}
              />
              <Link className={css.link} to={`products/${product.id}`}>
                {product.title}
              </Link>
              <p className={css.price}>{product.price} USD</p>
              {isLogged ? (
                <button
                  className={css.button}
                  onClick={() => {
                    handleAddItem({ ...product, counter: 1 });
                  }}
                  type="button"
                >
                  Add to cart
                </button>
              ) : (
                <p className={css.notify}>
                  Чтобы добавить товар в корзину залогинтесь
                </p>
              )}
            </li>
          );
        })}
      </ul>
      <button
        className={css.button}
        disabled={limit >= 20}
        type="button"
        onClick={handleLoadMore}
      >
        {limit < 20 ? 'Load more' : 'No more items'}
      </button>
    </>
  );
}
