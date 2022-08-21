const BASIC_URL = 'https://api.escuelajs.co/api/v1/products';

export const getProducts = async number => {
  const res = await fetch(`${BASIC_URL}?offset=0&limit=${number}`);
  const products = await res.json();
  return products;
};

export const getProduct = async id => {
  const res = await fetch(`${BASIC_URL}/${id}`);
  const product = await res.json();
  return product;
};
