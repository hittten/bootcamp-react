import {environment} from "./environments/environment";

const apiUrl = {
  products: environment.apiUrl + '/products/' + environment.user + '/',
  shoppingCar: environment.apiUrl + '/shoppingCar/' + environment.user + '/',
};

export const create = (product) => {
  return fetch(apiUrl.products, {
    method: 'POST',
    body: JSON.stringify(product),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json());
};

export const list = () => {
  return fetch(apiUrl.products)
    .then(res => res.json());
};

export const listShoppingCarItems = () => {
  return fetch(apiUrl.shoppingCar)
    .then(res => res.json());
};

export const addToShoppingCar = (product) => {
  return fetch(apiUrl.shoppingCar + product.id, {method: 'PUT'});
};

export const removeFromShoppingCar = (product) => {
  return fetch(apiUrl.shoppingCar + product.id, {method: 'DELETE'})
};
