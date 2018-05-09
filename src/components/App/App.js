import React, { Component } from 'react';
import './App.css';
import Work from '../Work/Work';
import AppNavbar from '../AppNavbar/AppNavbar';
import AppFooter from '../AppFooter/AppFooter';
import { Container, Row } from 'reactstrap';
import editmaster from '../../images/editmaster.jpg';

export default class App extends Component {
  render() {
    return (
      <div>
        <AppNavbar />
        <Container>
          <Row>
            <Work image={editmaster} desc="太鼓の創作譜面を支援するWebアプリ。" date="2017-01" />
            <Work image={editmaster} desc="太鼓の創作譜面を支援するWebアプリ。" date="2017-01" />
            <Work image={editmaster} desc="太鼓の創作譜面を支援するWebアプリ。" date="2017-01" />
          </Row>
        </Container>
        <AppFooter />
      </div>
    );
  }
}