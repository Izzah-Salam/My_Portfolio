import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const HeroSection = () => {
  return (
    <div className="bg-light text-dark py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center">
            <div>
              <h1>Welcome to My Portfolio</h1>
              <p>
                I am a passionate developer showcasing my skills and projects.
              </p>
              <Button variant="dark">Learn More</Button>
            </div>
          </Col>
          <Col md={6} className="text-center">
            <img
              src="https://i.pinimg.com/736x/74/26/a4/7426a4bd1135c6e9c8ec10e8d8b183d1.jpg" // Replace with your image URL
              alt="My Profile"
              className="img-fluid rounded-circle mt-4"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
