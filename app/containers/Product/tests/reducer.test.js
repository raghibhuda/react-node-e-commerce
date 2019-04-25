import { fromJS } from 'immutable';
import productReducer from '../reducer';

describe('productReducer', () => {
  it('returns the initial state', () => {
    expect(productReducer(undefined, {})).toEqual(fromJS({}));
  });
});
