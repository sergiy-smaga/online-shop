// const BASIC_URL = 'https://api.escuelajs.co/api/v1/products';

const BASIC_URL = 'https://fakestoreapi.com/products';

export const getProducts = async () => {
  // const res = await fetch(`${BASIC_URL}?offset=0&limit=${number}`);
  const res = await fetch(`${BASIC_URL}`);
  const products = await res.json();
  return products;
};

export const getProduct = async id => {
  const res = await fetch(`${BASIC_URL}/${id}`);
  const product = await res.json();
  console.log(product);
  return product;
};
