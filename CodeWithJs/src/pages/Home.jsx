import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { BsLightbulb, BsGear, BsRocket, BsBug, BsBriefcase } from 'react-icons/bs';
import './Home.css';

import QuestionAccordion from '../components/QuestionAccordion';

// Import question data
import basicQuestions from '../data/basicQuestions.json';
import intermediateQuestions from '../data/intermediateQuestions.json';
import advancedQuestions from '../data/advancedQuestions.json';
import pseudoCodeQuestions from '../data/pseudoCodeQuestions.json';
import interviewQuestions from '../data/interviewQuestions.json';

// Home component
const Home = () => {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <>
      {/* Hero Section */}
      <div className={`hero-section hero-section-${theme}`}>
        {/* Background Pattern */}
        <div className="hero-pattern"></div>

        <Container className="text-center text-white py-5 position-relative">
          <Row className="justify-content-center">
            <Col lg={8}>
              <h1 className="display-3 fw-bold mb-4 animate__animated animate__fadeInUp">
                Master JavaScript with{' '}
                <span className="text-warning">CodeWithJs</span>
              </h1>
              <p className="lead mb-5 fs-4 animate__animated animate__fadeInUp animate__delay-1s">
                From basics to advanced concepts, practice with real interview questions
                and improve your coding skills step by step.
              </p>

              <div className="row g-4 mb-5">
                <div className="col-md-4">
                  <div className="stats-card">
                    <h2 className="fw-bold text-warning">{basicQuestions.length + intermediateQuestions.length + advancedQuestions.length + pseudoCodeQuestions.length + interviewQuestions.length}+</h2>
                    <p className="mb-0">Total Questions</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="stats-card">
                    <h2 className="fw-bold text-warning">5</h2>
                    <p className="mb-0">Categories</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="stats-card">
                    <h2 className="fw-bold text-warning">100%</h2>
                    <p className="mb-0">Free</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Features Section */}
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
          {[
            {
              icon: BsLightbulb,
              title: 'Basic JavaScript',
              desc: 'Master the fundamentals with essential concepts',
              color: 'success',
              questions: basicQuestions.length,
              path: '/basic'
            },
            {
              icon: BsGear,
              title: 'Intermediate Concepts',
              desc: 'Dive deeper into advanced JavaScript features',
              color: 'info',
              questions: intermediateQuestions.length,
              path: '/intermediate'
            },
            {
              icon: BsRocket,
              title: 'Advanced Topics',
              desc: 'Complex concepts for experienced developers',
              color: 'warning',
              questions: advancedQuestions.length,
              path: '/advanced'
            },
            {
              icon: BsBug,
              title: 'Pseudo Code & Algorithms',
              desc: 'Problem-solving and algorithmic thinking',
              color: 'secondary',
              questions: pseudoCodeQuestions.length,
              path: '/pseudo'
            },
            {
              icon: BsBriefcase,
              title: 'Interview Questions',
              desc: 'Real interview questions from top companies',
              color: 'danger',
              questions: interviewQuestions.length,
              path: '/interview'
            }
          ].map((category, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <div className={`card h-100 shadow-lg border-0 feature-card feature-card-${theme}`}>
                <div className="card-body p-4 text-center">
                  <div className="mb-3">
                    <category.icon className={`fs-1 text-${category.color}`} />
                  </div>
                  <h4 className="card-title fw-bold mb-3">{category.title}</h4>
                  <p className={`card-text ${theme === 'dark' ? 'text-muted' : 'text-secondary'} mb-3`}>
                    {category.desc}
                  </p>
                  <div className="mb-3">
                    <span className={`badge bg-${category.color} fs-6 px-3 py-2`}>
                      {category.questions} Questions
                    </span>
                  </div>
                  <button
                    className={`btn btn-${category.color} btn-lg w-100`}
                    onClick={() => window.location.href = category.path}
                  >
                    Start Learning
                  </button>
                </div>
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

          {/* Sample Questions Preview */}
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
