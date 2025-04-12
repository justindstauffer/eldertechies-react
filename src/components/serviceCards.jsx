import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const services = [
  {
    title: 'Simplify My Tech',
    description: 'We’ll come to your home and help you set up your devices, organize your apps, and make technology easier to use.',
    price: '$75 / session',
  },
  {
    title: 'Remote Tech Help',
    description: 'Quick support over the phone or Zoom for troubleshooting, questions, or guidance on using your devices.',
    price: '$50 / session',
  },
  {
    title: 'New Device Setup',
    description: 'We’ll set up your new phone, tablet, or computer so you can start using it right away, safely and easily.',
    price: '$75 / session',
  },
  {
    title: 'Scam Protection & Cyber Security Session',
    description: 'Protect yourself from scams with device security setup, scam education, and personalized safety tips.',
    price: '$150 / session',
  },
  {
    title: 'Home System Configuration',
    description: 'Personalized in-home device configuration support for smart home devices, printers, and more.',
    price: '$150 / session',
  },
  {
    title: 'Complete Devices Setup & Sync',
    description: "We'll organize all your technology under one easy system. No more forgotten passwords, confusing logins, or disorganized apps. Stay secure, synced, and stress-free.",
    price: '$200',
  }
];

const ServiceCards = () => {
  return (
    <Container className="my-5">
      <h2 className="text-primary text-center mb-4">Our Services</h2>
      <Row>
        {services.map((service, index) => (
          <Col key={index} md={6} lg={4} className="d-flex align-items-stretch mb-4">
            <Card className="w-100 shadow">
              <Card.Body className="d-flex flex-column">
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
                <div className="mt-auto">
                  <h5>{service.price}</h5>
                  <Button variant="info" className="mt-2">More Info</Button>
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
