import React, { Component } from 'react';
import './Work.css';
import { Card, Col, CardImg, CardText, CardBody } from 'reactstrap';

export default class Work extends Component {
  render() {
    return (
      <Col lg={4} md={6} sm={12} xs={12}>
        <Card>
          <CardImg top width="100%" src={this.props.image} alt={this.props.image} />
          <CardBody>
            <CardText>{this.props.desc}</CardText>
            <CardText className="date">Created in {this.props.date}</CardText>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

Work.defaultProps = {
  desc: 'This is a work @solt9029.',
  date: 'XXXX-XX',
}