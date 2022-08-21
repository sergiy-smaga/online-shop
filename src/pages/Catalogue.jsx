import { useEffect, useState } from 'react';
import { getProducts } from '../services/api';
import { Link } from 'react-router-dom';

export default function Catalogue() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const products = await getProducts(20);
        setProducts(products);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <ul>
      {products.map(product => {
        return (
          <li key={product.id}>
            <img width="200" alt={product.title} src={product.images[0]} />
            <Link to={`${product.id}`}>{product.title}</Link>
            <p>{product.price}</p>
            <button type="button">Add to cart</button>
          </li>
        );
      })}
    </ul>
  );
}
