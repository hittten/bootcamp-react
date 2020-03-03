import {CAR_ITEMS, PRODUCTS} from "./mock-products";

export const create = (product) => {
  product.id = PRODUCTS.length + 1;
  product.createdAt = new Date();
  product.image = `https://picsum.photos/id/${product.id}/300/300`;

  PRODUCTS.push(product);

  return promisify(product);
};

export const list = () => {
  return promisify(PRODUCTS);
};

export const listShoppingCarItems = () => {
  return promisify([...CAR_ITEMS]);
};

export const addToShoppingCar = (product) => {
  CAR_ITEMS.push(product);

  return promisify(null)
};

export const removeFromShoppingCar = (product) => {
  const index = CAR_ITEMS.findIndex(value => value.id === product.id);
  CAR_ITEMS.splice(index, 1);

  return promisify(null);
};

function promisify(value) {
  return new Promise(resolve =>
    setTimeout(() => resolve(value), 500)
  );
}
