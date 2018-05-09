import React, { Component } from 'react';
import './App.css';
import Works from '../Works/Works';
import AppNavbar from '../AppNavbar/AppNavbar';
import AppFooter from '../AppFooter/AppFooter';

export default class App extends Component {
  render() {
    return (
      <div>
        <AppNavbar />
        <Works />
        <AppFooter />
      </div>
    );
  }
}