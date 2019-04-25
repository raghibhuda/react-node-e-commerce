import { fromJS } from 'immutable';
import cartReducer from '../reducer';

describe('cartReducer', () => {
  it('returns the initial state', () => {
    expect(cartReducer(undefined, {})).toEqual(fromJS({}));
  });
});
