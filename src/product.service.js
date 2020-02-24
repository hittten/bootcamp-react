import {CAR_ITEMS, PRODUCTS} from "./mock-products";

export const list = () => {
  return PRODUCTS;
};

export const listShoppingCarItems = () => {
  return CAR_ITEMS;
};

export const addToShoppingCar = (product) => {
  CAR_ITEMS.push(product);
};

export const removeFromShoppingCar = (product) => {
  const index = CAR_ITEMS.findIndex(value => value.id === product.id);
  CAR_ITEMS.splice(index, 1);
};
