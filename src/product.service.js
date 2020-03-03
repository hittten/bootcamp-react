import { CAR_ITEMS, PRODUCTS } from "./mock-products";

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

export const listCarItems = () => {
  return promisify(CAR_ITEMS);
};

export const addToCar = (product) => {
  CAR_ITEMS.push(product);

  return promisify(product)
};

export const removeFromCar = (product) => {
  const index = CAR_ITEMS.findIndex(value => value.id === product.id);
  const removedProduct = CAR_ITEMS[index];

  CAR_ITEMS.splice(index, 1);

  return promisify(removedProduct);
};

function promisify(value) {
  return new Promise(resolve =>
    setTimeout(() => resolve(value), 500)
  );
}
