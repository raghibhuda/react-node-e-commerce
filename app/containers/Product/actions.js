/*
 *
 * Product actions
 *
 */

import { DEFAULT_ACTION,GET_ALL_PRODUCTS } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getProductsAction(data){
  console.log(data,'========In Action===========');
  return {
    type:GET_ALL_PRODUCTS,
    data,
  }
}
