import {environment} from "./environments/environment";

export const create = (product) => {
  return fetch(environment.apiUrl + '/addProduct/' + environment.user, {
    method: 'POST',
    body: JSON.stringify(product),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json());
};

export const list = () => {
  return fetch(environment.apiUrl + '/getProducts/' + environment.user)
    .then(res => res.json());
};

export const addToCar = (product) => {
  return fetch(environment.apiUrl + '/addProductToShoppingCar/' + environment.user, {
    method: 'POST',
    body: JSON.stringify({id: product.id}),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json());
};

export const listCarItems = () => {
  return fetch(environment.apiUrl + '/getShoppingCarProducts/' + environment.user)
    .then(res => res.json());
};

export const removeFromCar = (product) => {
  return fetch(environment.apiUrl + '/deleteFromShoppingCar/' + environment.user + '?id=' + product.id, {method: 'DELETE'})
    .then(res => res.json());
};
