import React, { Component } from 'react';
import './WorksFooter.css';
import { Container } from 'reactstrap';

export default class WorksFooter extends Component {
  render() {
    return (
      <Container fluid className="footer">
        <small>Copyright (C) Kenshi Shiode</small>
      </Container>
    );
  }
}