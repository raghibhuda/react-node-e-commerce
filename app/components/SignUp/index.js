/**
 *
 * SignUp
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import axios from 'axios';
import Navbar from '../Navbar';
import { Form, FormGroup, Label, Input } from 'reactstrap';
/* eslint-disable react/prefer-stateless-function */
class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      name: '',
      password: '',
    }
  }


  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value
    });
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value
    });
  }

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value
    });
  }


  handleSubmit = (e) => {
    e.preventDefault();
    var data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };
    // let axiosConfig = {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     "Accept": "application/json"
    //   }
    // };
    axios.post('http://127.0.0.1:8000/api/sign-up', data).then((response) => {
      console.log(response.data);
      this.props.history.push("/sign-in");
    }).catch((error) => {
      console.log(error);
    });

  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12"></div>
        <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
          <Form onSubmit={this.handleSubmit} >
            <FormGroup>
              <Label for="exampleName">Name:</Label>
              <Input type="text" name="name" placeholder="Your name" onChange={this.handleNameChange} />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="text" name="email" placeholder="address@domain.com" onChange={this.handleEmailChange} />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" placeholder="***********" onChange={this.handlePasswordChange} />
            </FormGroup>
            <button className="button" type="submit" value="submit">Sign Up</button>
          </Form>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12"></div>
      </div>
    );
  }
}

SignUp.propTypes = {};

export default SignUp;
