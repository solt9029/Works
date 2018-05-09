import React, { Component } from 'react';
import './WorksNavbar.css';
import { Navbar, NavbarBrand } from 'reactstrap';

export default class WorksNavbar extends Component {
  render() {
    return (
      <Navbar>
        <NavbarBrand>Works @solt9029</NavbarBrand>
      </Navbar>
    );
  }
}