/**
 *
 * SignIn
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import Navbar from '../Navbar';
/* eslint-disable react/prefer-stateless-function */
class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    }
  }

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value
    });
  }

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    let data = {
      email: this.state.email,
      password: this.state.password,
    };
    axios.post('http://127.0.0.1:8000/api/sign-in', data).then((response) => {
      // console.log(response.data);
      localStorage.setItem('token', response.data.token);
      // console.log(localStorage.getItem('token'));
      // localStorage.setItem('user_id', response.data.success.user.id);
      // localStorage.setItem('user_name', response.data.success.user.name);
      // localStorage.setItem('user_email', response.data.success.user.email);
      this.props.history.push("/");
    }).catch((error) => {
      console.log(error);
    });
  }




  render() {
    return (
      <div>
        <Navbar />
        <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
          <Form onSubmit={this.handleFormSubmit}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="text" name="email" placeholder="address@domain.com" onChange={this.handleEmailChange} />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" placeholder="***********" onChange={this.handlePasswordChange} />
            </FormGroup>
            <button className="button" type="submit" value="submit">Sign In</button>
          </Form>
        </div>
      </div>
    );
  }
}


SignIn.propTypes = {};

export default SignIn;
