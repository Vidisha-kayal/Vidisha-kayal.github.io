import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Particle from '../Particle';
import Resumecontent from './ResumeContent';
import '../../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import pdf from '../../Assets/Vidisha-Kayal.pdf';

function Resume() {
  const sem = 3;
  const cgpa = 8.39;

  return (
    <Container fluid className='resume-section'>
      <Particle />
      <Container>
        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button variant='primary' href={pdf} target='_blank'>
            <i className='fas fa-download'>&nbsp;</i>Download CV
          </Button>
        </Row>
        <Row className='resume'>
          <Col md={6} className='resume-left'>
            <h3 className='resume-title'>Experience</h3>
            <Resumecontent
              title='Mentor [Girlscript Summer of Code]'
              date='March 2021 - Present'
              content={[
                ' Mentored participants and maintained an open source project.',
                'Reviewed code and merged pull requests'
              ]}
            />
            <h3 className='resume-title'>Extracurricular Activities</h3>
            <Resumecontent
              title='Paticipated in MietY TIDE 2.0'
              content={[
                'Worked on creating the frontend-end of the website using Bootstrap, Javascript.',
              ]}
            />
          </Col>
          <Col md={6} className='resume-right'>
            <h3 className='resume-title'>Education</h3>
            <Resumecontent
              title='B.tech Electronics and Communication Engineering [Tezpur University, Tezpur] '
              date='2019 - Present'
              content={[`CGPA: ${cgpa} (Till ${sem}rd Sem)`]}
            />
            <Resumecontent
              title='12TH BOARD [Salt Brook Academy]'
              date='2017 - 2019'
              content={['Precentage: 85.8%']}
            />

            <h3 className='resume-title'>Ranks and Achivements</h3>
            <Resumecontent
              title=''
              content={['Dr. Banikanta Kakati Award,2019', 'Anundoram Borooh Award,2017']}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button variant='primary' href={pdf} target='_blank'>
            <i className='fas fa-download'>&nbsp;</i>Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
