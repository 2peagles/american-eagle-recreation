import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import shortreview from '../../Images/shortreview.jpg';

export const Cards = () => {
  return (
    <Row xs={1} md={2} className="g-4">
    {Array.from({ length: 4 }).map((_, idx) => (
      <Col>
        <Card>
          <Card.Img variant="top" src={shortreview} />
          <Card.Body>
            <Card.Title>Decription</Card.Title>
            <Card.Text>
              price
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
  )
}
