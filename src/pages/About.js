import React, {useState, useEffect} from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';


const About = () => {
  const [name, setName] = useState('');
  return (
      <div>
      <h1>About Page</h1>
      <hr></hr>

      <Container>
      <Row>
        <Col>
        <p>Welcome to the About page!</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col sm={12} md={4}>
          <Card>
            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" />
            <Card.Body>
              <Card.Title>React</Card.Title>
              <Card.Text>
                This is ReactJS.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4}>
          <Card>
            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" />
            <Card.Body>
              <Card.Title>HTML</Card.Title>
              <Card.Text>
                This is HTML.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4}>
          <Card>
            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" />
            <Card.Body>
              <Card.Title>Vue</Card.Title>
              <Card.Text>
                This is VueJS.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

    <button type="button" className="btn btn-success" onClick={() => setName('MAHFUZ AFTAB')} style={{ marginBottom: '3%' }}>
      Want to Know About {name} !
  </button>

    </div>
  )
};

export default About;