import React, { Component } from 'react';
import './AppNavbar.css';
import { Navbar, NavbarBrand } from 'reactstrap';

export default class AppNavbar extends Component {
  render() {
    return (
      <Navbar>
        <NavbarBrand>Works @solt9029</NavbarBrand>
      </Navbar>
    );
  }
}