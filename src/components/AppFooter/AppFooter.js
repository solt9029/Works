import React, { Component } from 'react';
import './AppFooter.css';
import { Container } from 'reactstrap';

export default class AppFooter extends Component {
  render() {
    return (
      <Container fluid className="footer">
        <small>Copyright (C) Kenshi Shiode</small>
      </Container>
    );
  }
}