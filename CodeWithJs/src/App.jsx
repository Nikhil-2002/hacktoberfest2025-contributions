import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { BsLightbulb, BsGear, BsRocket, BsBug, BsBriefcase } from 'react-icons/bs';

import NavigationBar from './components/Navbar';
import QuestionAccordion from './components/QuestionAccordion';
import Footer from './components/Footer';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import BasicQuestions from './pages/BasicQuestions';
import AdvancedQuestions from './pages/AdvancedQuestion';
import IntermediateQuestion from './pages/IntermediateQuestion';
import InterviewQuestion from './pages/InterviewQuestion';
import PseudoCodes from './pages/PseudoCodes';

// Import question data
import basicQuestions from './data/basicQuestions.json';
import intermediateQuestions from './data/intermediateQuestions.json';
import advancedQuestions from './data/advancedQuestions.json';
import pseudoCodeQuestions from './data/pseudoCodeQuestions.json';
import interviewQuestions from './data/interviewQuestions.json';

import './App.css';

// Home component
const Home = () => {
  const theme = useSelector((state) => state.theme.mode);
  
  return (
    <>
      {/* Hero Section */}
      <div 
        className={`py-5 mt-5 position-relative overflow-hidden`}
        style={{ 
          background: theme === 'dark' 
            ? 'linear-gradient(135deg, #1a1a1a 0%, #2d3748 100%)' 
            : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          minHeight: '500px'
        }}
      >
        {/* Background Pattern */}
        <div 
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 0%, transparent 50%)',
            pointerEvents: 'none'
          }}
        ></div>
        
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
                  <div className="text-center p-3 rounded" style={{ backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
                    <h2 className="fw-bold text-warning">{basicQuestions.length + intermediateQuestions.length + advancedQuestions.length + pseudoCodeQuestions.length + interviewQuestions.length}+</h2>
                    <p className="mb-0">Total Questions</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="text-center p-3 rounded" style={{ backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
                    <h2 className="fw-bold text-warning">5</h2>
                    <p className="mb-0">Categories</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="text-center p-3 rounded" style={{ backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
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
              <div 
                className={`card h-100 shadow-lg border-0 ${theme === 'dark' ? 'bg-dark text-light' : 'bg-white'}`}
                style={{ 
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = theme === 'dark' 
                    ? '0 20px 40px rgba(255,255,255,0.1)' 
                    : '0 20px 40px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = theme === 'dark'
                    ? '0 4px 20px rgba(255,255,255,0.05)'
                    : '0 4px 20px rgba(0,0,0,0.1)';
                }}
              >
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

function App() {
  const theme = useSelector((state) => state.theme.mode);

  // Apply theme to body and html
  useEffect(() => {
    const isDark = theme === 'dark';
    document.body.className = isDark ? 'bg-dark text-light' : 'bg-light text-dark';
    document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    document.documentElement.setAttribute('data-bs-theme', theme);
  }, [theme]);

  return (
    <div className={`min-vh-100 ${theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <NavigationBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/basic" element={<BasicQuestions />} />
        <Route path="/advanced" element={<AdvancedQuestions />} />
        <Route path="/intermediate" element={<IntermediateQuestion/>} />
        <Route path="/interview" element={<InterviewQuestion/>} />
        <Route path="/pseudo" element={<PseudoCodes/>} />
        {/* Add other category routes here later */}
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
