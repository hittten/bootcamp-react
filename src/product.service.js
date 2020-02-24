import {CAR_ITEMS, PRODUCTS} from "./mock-products";

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
