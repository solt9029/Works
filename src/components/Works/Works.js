import React, { Component } from 'react';
import './Works.css';
import Work from '../Work/Work';
import { Container, Row } from 'reactstrap';
import data from '../../data/data';

export default class Works extends Component {
  render() {
    let works = [];
    data.forEach((work) => {
      works.push(<Work image={work.image} url={work.url} desc={work.desc} date={work.date} />);
    });
    works.reverse();

    return (
      <Container>
        <Row>
          {works}
        </Row>
      </Container>
    );
  }
}