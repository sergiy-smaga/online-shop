import { useEffect, useState } from 'react';
import { getProducts } from '../../services/api';
import { Link } from 'react-router-dom';
import css from './Catalogue.module.css';

export default function Catalogue({ handleButtonClick, isLogged }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const products = await getProducts();
        setProducts(products);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <ul className={css.list}>
      {products.map(product => {
        return (
          <li className={css.item} key={product.id}>
            {/* <img width="200" alt={product.title} src={product.images[0]} />
            <Link to={`${product.id}`}>{product.title}</Link>
            <p>{product.price}</p>
            <button type="button">Add to cart</button> */}
            <img className={css.img} alt={product.title} src={product.image} />
            <Link className={css.link} to={`products/${product.id}`}>
              {product.title}
            </Link>
            <p className={css.price}>{product.price} USD</p>
            {isLogged ? (
              <button
                className={css.button}
                onClick={() => {
                  handleButtonClick(product);
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
  );
}
