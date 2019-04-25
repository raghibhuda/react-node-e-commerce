/**
 *
 * Navbar
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountCircle from '@material-ui/icons/AccountCircleOutlined';
import HowToReg from '@material-ui/icons/HowToReg';
/* eslint-disable react/prefer-stateless-function */
class Navbar extends React.Component {
  // @Nv4590ot
  constructor() {
    super();
    this.state = {
      showLogOutButton: false,
      showSignInButton: true,
      showSignUpButton: true,
    };
  }
  componentDidMount = () => {
    let haveToken = localStorage.getItem('token');
    if (haveToken) {
      this.setState({
        showLogOutButton: true,
        showSignInButton: false,
        showSignUpButton: false,
      }, () => {
        console.log(this.state.showLogOutButton, '============Logout===============');
        console.log(this.state.showSignInButton, '============Login==============');
        console.log(this.state.showSignUpButton, '============Register===============');

      });
    }
  }

  handleLogOut = (e) => {
    e.preventDefault();
    localStorage.clear();
    this.setState({
      showSignInButton: true,
      showSignUpButton: true,
      showLogOutButton: false,
    })
  }

  signInButton = () => {
    return (
      <li>
        <Link to="/sign-in">
          <AccountCircle />Sign In
        </Link>
      </li>
    );
  }

  signUpButton = () => {
    return (
      <li>
        <Link to="/sign-up">
          <HowToReg />Register
      </Link>
      </li>
    );
  }


  logOutButton = () => {
    return (
      <button className="button" onClick={this.handleLogOut}>Log out</button>
    );
  }


  render() {
    return (
      <div>
        <nav>
          <div className="container">
            <ul className="nav__left">
              <li>
                <Link to="/">
                  <DashboardIcon />Home
              </Link>
              </li>
            </ul>
            <ul className="nav__right">
              {this.state.showSignInButton ? this.signInButton() : ''}
              {this.state.showSignUpButton ? this.signUpButton() : ''}
              {this.state.showLogOutButton ? this.logOutButton() : ''}
              <li>
                <a href="#/cart"> Cart (0)</a>
              </li>
            </ul>
          </div>
        </nav>
      </div >
    );
  }
}


Navbar.propTypes = {};

export default Navbar;
