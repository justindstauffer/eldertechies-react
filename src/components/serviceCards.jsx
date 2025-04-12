import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const services = [
  {
    title: 'New Device Setup',
    description: 'We’ll set up your new phone, tablet, or computer so you can start using it right away, safely and easily.',
    price: '$75 / session',
  },
  {
    title: 'Remote Tech Help',
    description: 'Quick support over the phone or Zoom for troubleshooting, questions, or guidance on using your devices securely.',
    price: '$50 / session',
  },
  {
    title: 'Scam Protection & Cyber Security Consultation',
    description: 'Protect yourself from scams with device security setup, scam education, and personalized safety tips.',
    price: '$150 / session',
  },
  {
    title: 'AI Education & Setup',
    description: 'Learn how to use AI tools like ChatGPT to make your life easier, from writing to research and more.',
    price: '$150 / session',
  }
];

const ServiceCards = () => {
  return (
    <Container className="p-5" style={{ backgroundColor: "#07273d"}} fluid>
      <h2 className="text-center mb-4" style={{color: "#6dd0cc"}}>Our Services</h2>
      <Row>
        {services.map((service, index) => (
          <Col key={index} md={6} lg={4} className="d-flex align-items-stretch mb-4">
            <Card className="w-100 shadow">
              <Card.Body className="d-flex flex-column">
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
                <div className="mt-auto">
                  {/* <h5>{service.price}</h5> */}
                  <Button style={{ backgroundColor: "#6dd0cc", borderColor: "#6dd0cc", color: "#07273d"}} className="mt-2">More Info</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ServiceCards;
