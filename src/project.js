// MyProjectsSection.js
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Iframe from 'react-iframe';

const projects = [
  {
    title: 'Project 1',
    description: 'A brief description of project 1.',
    iframeUrl: 'https://simplewhetherapp.netlify.app/',
    githubLink: 'https://github.com/yourusername/project1',
  },
  {
    title: 'Project 2',
    description: 'A brief description of project 2.',
    iframeUrl: 'https://izzah-simplecalculator.netlify.app/',
    githubLink: 'https://github.com/yourusername/project2',
  },
  {
    title: 'Project 3',
    description: 'A brief description of project 1.',
    iframeUrl: 'https://gentle-nougat-2b4218.netlify.app/',
    githubLink: 'https://github.com/yourusername/project1',
  },
  // Add more projects as needed
];

const MyComponent = () => {
  return (
    <div className="bg-light text-dark py-5">
      <Container>
        <h2 className="text-center mb-4">My Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col key={index} lg={4} md={6} className="mb-4">
              <Card>
                
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  
                  <Iframe
                    url={project.iframeUrl}
                    width="100%"
                    height="300px"  
                    display="initial"
                    position="relative"
                    allowFullScreen
                  />
                  <Button variant="primary" href={project.githubLink} target="_blank">
                    Live Preview
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default MyComponent;
