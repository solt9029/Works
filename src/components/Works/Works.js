import React, { Component } from 'react';
import './Works.css';
import Work from '../Work/Work';
import { Container, Row } from 'reactstrap';
import data from '../../data/data';

export default class Works extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Work image={data[0].image} desc={data[0].desc} date={data[0].date} />
        </Row>
      </Container>
    );
  }
}