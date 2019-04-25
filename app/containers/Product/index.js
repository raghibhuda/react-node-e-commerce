/**
 *
 * Product
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectProduct from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';
import { getProductsAction } from './actions';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

/* eslint-disable react/prefer-stateless-function */
export class Product extends React.Component {
  constructor() {
    super();

  }
  componentDidMount = () => {
    console.log(this.props.product.products);
  }
  renderProducts = () => {
    return this.props.product.products.map((data, key) => {
      return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={key}>
          <div className="product">
            <Link to="/" className="product-link">
              <div className="product__image">
                <img src={data.image_url} alt="No preview available" className="img-fluid" />
              </div>
              <div className="product__description">
                <h4>{data.name}</h4>
              </div>
            </Link>
            <div className="product__price-cart">
              <div>
                <button className="button">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      )
    });
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Product</title>
          <meta name="description" content="Description of Product" />
        </Helmet>
        <div className="admin-new">
          <div className="container">
            <div class="col-lg-2 col-md-3 col-sm-12 col-xs-12">
              <ul class="admin-menu">
                <li>
                  <a href="#/admin" class="router-link-active">Electonics</a>
                </li>
                <li>
                  <a href="#/admin/new" class="router-link-active">Parts</a>
                </li>
                <li>
                  <a href="#/admin/new" class="router-link-active">Parts</a>
                </li>
                <li>
                  <a href="#/admin/new" class="router-link-active">Parts</a>
                </li>
                <li>
                  <a href="#/admin/new" class="router-link-active">Parts</a>
                </li>
              </ul>
            </div>
            <div className="container">
              <div className="products">
               
                  {this.renderProducts()}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


// Product.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

const mapStateToProps = createStructuredSelector({
  product: makeSelectProduct(),
});

function mapDispatchToProps(dispatch) {
  return {
    showAllProducts: (data) => dispatch(getProductsAction(data)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'product', reducer });
const withSaga = injectSaga({ key: 'product', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Product);
