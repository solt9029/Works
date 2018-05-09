import React, { Component } from 'react';
import './Work.css';
import { Card, Col, CardImg, CardText, CardBody } from 'reactstrap';

export default class Work extends Component {
  render() {
    return (
      <Col lg={4} md={6} sm={12} xs={12}>
        <Card onClick={() => {window.open(this.props.url, '_blank');}}>
          <CardImg top width="100%" src={`/images/${this.props.image}.jpg`} alt={this.props.image} />
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
  image: 'default',
  url: 'http://solt9029.com',
  desc: 'This is a work @solt9029.',
  date: 'XXXX-XX',
}