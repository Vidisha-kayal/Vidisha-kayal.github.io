import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import '../../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import manthan from '../../Assets/Projects/manthan.png';
function Projects() {
  return (
    <Container fluid className='project-section'>
      <Particle />
      <Container>
        <h1 className='project-heading'>
          My Recent <strong className='purple'>Works </strong>
        </h1>
        <p style={{ color: 'white' }}>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={manthan}
              isBlog={false}
              title='Manthan'
              description=' An online testing platform that can be used to conduct tests that are wrapped with all the necessary precautions to reduce the chances of cheating.'
              link='https://github.com/Manthan933/Manthan'
            />
          </Col>
        </Row>
        <h1 className='project-heading'>
          My Recent <strong className='purple'>Blog </strong> Posts
        </h1>
        <p style={{ color: 'white' }}>Do give a read to some of my blogs</p>
        <Row style={{ justifyContent: 'center' }}>
          {
            //<Col md={4} className='blog-card'>
            //<BlogCard
            //imgPath={plant}
            //link='https://medium.com/jovianml/plant-ai-c8fc95ed90e6'
            //title='Plant AI'
            //site='medium.com'
            ///>
            //</Col>
          }
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
