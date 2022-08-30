const BASIC_URL = 'https://fakestoreapi.com/products';
export const PAGINATION_STEP = 5;

export const getProducts = async limit => {
  const res = await fetch(`${BASIC_URL}?limit=${limit}`);
  const products = await res.json();
  return products;
};

export const getProduct = async id => {
  const res = await fetch(`${BASIC_URL}/${id}`);
  const product = await res.json();
  console.log(product);
  return product;
};
