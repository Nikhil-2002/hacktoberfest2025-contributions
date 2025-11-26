import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { BsLightbulb, BsGear, BsRocket, BsBug, BsBriefcase } from 'react-icons/bs';
import QuestionAccordion from '../components/QuestionAccordion';

import basicQuestions from '../data/basicQuestions.json';
import intermediateQuestions from '../data/intermediateQuestions.json';
import advancedQuestions from '../data/advancedQuestions.json';
import pseudoCodeQuestions from '../data/pseudoCodeQuestions.json';
import interviewQuestions from '../data/interviewQuestions.json';

const categories = [
  { icon: BsLightbulb, title: 'Basic JavaScript', desc: 'Master fundamentals', questions: basicQuestions.length, path: '/basic' },
  { icon: BsGear, title: 'Intermediate Concepts', desc: 'Dive deeper into JS', questions: intermediateQuestions.length, path: '/intermediate' },
  { icon: BsRocket, title: 'Advanced Topics', desc: 'Advanced JS', questions: advancedQuestions.length, path: '/advanced' },
  { icon: BsBug, title: 'Pseudo Code & Algorithms', desc: 'Problem-solving', questions: pseudoCodeQuestions.length, path: '/pseudo' },
  { icon: BsBriefcase, title: 'Interview Questions', desc: 'Real interview Qs', questions: interviewQuestions.length, path: '/interview' }
];

const Home = () => {
  const theme = useSelector((state) => state.theme.mode);

  const mainBtnStyle = {
    backgroundColor: '#ffc107', // matches CodeWithJs heading
    color: '#fff',
    border: 'none',
    borderRadius: '50px',
    padding: '14px 60px',
    fontSize: '1.2rem',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    boxShadow: '0 5px 15px rgba(255,193,7,0.5)'
  };
  const btnHoverStyle = { transform: 'scale(1.1)', boxShadow: '0 8px 25px rgba(255,193,7,0.6)' };

  const cardBtnStyle = {
    backgroundColor: '#7b2ff7', // purple
    color: '#fff',
    border: 'none',
    borderRadius: '50px',
    padding: '10px 20px',
    fontWeight: '500',
    transition: 'all 0.3s ease'
  };
  const cardBtnHoverStyle = { transform: 'scale(1.05)', boxShadow: '0 8px 20px rgba(123,47,247,0.5)' };

  return (
    <>
      {/* Hero Section */}
      <div
        className="hero-section py-5 position-relative overflow-hidden"
        style={{
          background: theme === 'dark' ? 'linear-gradient(135deg, #1a1a1a, #2d3748)' : 'linear-gradient(135deg, #667eea, #764ba2)',
          minHeight: '500px',
          color: '#fff'
        }}
      >
        <Container className="text-center py-5 position-relative">
          <Row className="justify-content-center">
            <Col lg={8}>
              <h1 className="display-3 fw-bold mb-4 animate__animated animate__fadeInUp">
                Master JavaScript with <span className="text-warning">CodeWithJs</span>
              </h1>
              <p className="lead mb-5 fs-4 animate__animated animate__fadeInUp animate__delay-1s">
                From basics to advanced concepts, practice with real interview questions step by step.
              </p>

              <Button
                style={mainBtnStyle}
                onMouseEnter={(e) => Object.assign(e.target.style, btnHoverStyle)}
                onMouseLeave={(e) => Object.assign(e.target.style, mainBtnStyle)}
                onClick={() => window.location.href = "/basic"}
              >
                Start Learning Now
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Learning Path Section */}
      <Container className="py-5">
        <Row className="text-center mb-5">
          <Col>
            <h2 className={`display-5 fw-bold mb-3 ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
              Choose Your Learning Path
            </h2>
            <p className={`lead ${theme === 'dark' ? 'text-muted' : 'text-secondary'}`}>
              Start with basics or jump to advanced topics - learn at your own pace
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {categories.map((category, index) => (
            <Col md={6} lg={4} key={index}>
              <div
                style={{
                  backgroundColor: theme === 'dark' ? '#2b2b2b' : '#f3f0ff',
                  borderRadius: '20px',
                  padding: '30px 20px',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  boxShadow: '0 5px 15px rgba(123,47,247,0.2)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 15px 30px rgba(123,47,247,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 5px 15px rgba(123,47,247,0.2)';
                }}
                onClick={() => window.location.href = category.path}
              >
                <div className="text-center mb-3">
                  <category.icon className="fs-1 text-warning" />
                </div>
                <h4 className="fw-bold mb-3">{category.title}</h4>
                <p className="text-muted mb-3">{category.desc}</p>
                <Button
                  style={cardBtnStyle}
                  onMouseEnter={(e) => Object.assign(e.target.style, cardBtnHoverStyle)}
                  onMouseLeave={(e) => Object.assign(e.target.style, cardBtnStyle)}
                  className="w-100"
                >
                  Start Learning
                </Button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Quick Preview Section */}
      <div className={`py-5 ${theme === 'dark' ? 'bg-secondary bg-opacity-10' : 'bg-light'}`}>
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className={`display-5 fw-bold mb-3 ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
                Quick Preview
              </h2>
              <p className={`lead ${theme === 'dark' ? 'text-muted' : 'text-secondary'}`}>
                Get a taste of what you'll learn with these sample questions
              </p>
            </Col>
          </Row>

          <QuestionAccordion
            questions={basicQuestions.slice(0, 3)}
            title="Sample Basic Questions"
            icon={BsLightbulb}
            badgeColor="success"
            sectionId="preview"
          />
        </Container>
      </div>
    </>
  );
};

export default Home;
