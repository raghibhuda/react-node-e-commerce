/**
 *
 * Cart
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectCart from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class Cart extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Cart</title>
          <meta name="description" content="Description of Cart" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

Cart.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  cart: makeSelectCart(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'cart', reducer });
const withSaga = injectSaga({ key: 'cart', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Cart);
