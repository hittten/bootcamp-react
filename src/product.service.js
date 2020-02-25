import {CAR_ITEMS, PRODUCTS} from "./mock-products";

export const create = (product) => {
  product.id = PRODUCTS.length + 1;
  product.createdAt = new Date();
  product.image = `https://picsum.photos/id/${product.id}/300/300`;

  PRODUCTS.push(product);

  return product;
};

export const list = () => {
  return PRODUCTS;
};

export const listCarItems = () => {
  return CAR_ITEMS;
};

export const addToCar = (product) => {
  CAR_ITEMS.push(product);

  return product
};

export const removeFromCar = (product) => {
  console.log(product);
  const id = CAR_ITEMS.findIndex(value => value.id === product.id);
  CAR_ITEMS.splice(id, 1);
};
