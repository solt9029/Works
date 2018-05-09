import React, { Component } from 'react';
import './App.css';
import Work from '../Work/Work';
import AppNavbar from '../AppNavbar/AppNavbar';
import AppFooter from '../AppFooter/AppFooter';
import { Container, Row } from 'reactstrap';
import data from '../../data/data';

export default class App extends Component {
  render() {
    return (
      <div>
        <AppNavbar />
        <Container>
          <Row>
            <Work image={data[0].image} desc={data[0].desc} date={data[0].date} />
          </Row>
        </Container>
        <AppFooter />
      </div>
    );
  }
}