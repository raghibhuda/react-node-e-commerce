// import { take, call, put, select } from 'redux-saga/effects';

// Individual exports for testing

import { takeLatest, call, put, select ,take } from 'redux-saga/effects';
import axios from 'axios';
import { getProductsAction } from './actions';

// Individual exports for testing
function getAllProducts() {
  const data = {};
  const axiosConfig = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };
  return axios
    .post('http://127.0.0.1:8000/api/all-products', data, axiosConfig)
    .then(response => {
      console.log(response.data.products,'=======get product========');
      return response.data;
      
    }).catch((error) => {
      console.log(error);
    });
}

export default function* productSaga() {
  // See example in containers/HomePage/saga.js
  try{
    const data = yield call(getAllProducts);
    const products = data.products;
    yield put(getProductsAction(products));
  } catch(error){
    console.log(error);
  } 
}
