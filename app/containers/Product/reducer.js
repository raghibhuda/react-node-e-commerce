/*
 *
 * Product reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION ,GET_ALL_PRODUCTS } from './constants';

export const initialState = fromJS({
  products:[]
});

function productReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:{
      return state;
    }
      
    case GET_ALL_PRODUCTS: {
      console.log(action.data,"=========action reducer==========");
      return state.set('products',action.data);
    } 
      default:
      return state;
  }
}

export default productReducer;
