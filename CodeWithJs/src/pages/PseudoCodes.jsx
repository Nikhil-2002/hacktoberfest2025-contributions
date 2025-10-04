// PseudoCode.jsx
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col, Badge, Pagination, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsCodeSquare, BsSearch, BsArrowLeft } from 'react-icons/bs';
import QuestionAccordion from '../components/QuestionAccordion';
import pseudoCodeQuestions from '../data/pseudoCodeQuestions.json';

const PseudoCodes = () => {
  const theme = useSelector((state) => state.theme.mode);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 10;

  // Filter questions based on search term
  const filteredQuestions = pseudoCodeQuestions.filter(question =>
    question.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    question.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = filteredQuestions.slice(indexOfFirstQuestion, indexOfLastQuestion);
  const totalPages = Math.ceil(filteredQuestions.length / questionsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`min-vh-100 ${theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}
      style={{ paddingTop: '80px' }}
    >
      <Container className="py-5">
        {/* Header */}
        <Row className="mb-4">
          <Col>
            <Link 
              to="/" 
              className="btn btn-outline-primary mb-3 d-inline-flex align-items-center"
            >
              <BsArrowLeft className="me-2" />
              Back to Home
            </Link>
            
            <div className="d-flex align-items-center mb-3">
              <BsCodeSquare className="me-3 fs-1 text-secondary" />
              <div>
                <h1 className={`mb-1 ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
                  Pseudo Code Questions
                </h1>
                <Badge bg="secondary" className="fs-6">
                  {filteredQuestions.length} Questions
                </Badge>
              </div>
            </div>

            <p className={`lead ${theme === 'dark' ? 'text-muted' : 'text-secondary'}`}>
              Practice solving problems with pseudo code to sharpen your problem-solving and logical thinking skills.
            </p>
          </Col>
        </Row>

        {/* Search Bar */}
        <Row className="mb-4">
          <Col md={6}>
            <div className="position-relative">
              <BsSearch 
                className="position-absolute"
                style={{ 
                  top: '50%', 
                  left: '12px', 
                  transform: 'translateY(-50%)',
                  color: '#6c757d'
                }}
              />
              <Form.Control
                type="text"
                placeholder="Search pseudo code questions..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1); // Reset to first page when searching
                }}
                className={`ps-5 ${theme === 'dark' ? 'bg-dark text-light border-secondary' : ''}`}
                style={{ paddingLeft: '40px' }}
              />
            </div>
          </Col>
          <Col md={6} className="d-flex justify-content-end align-items-center">
            <small className={`${theme === 'dark' ? 'text-muted' : 'text-secondary'}`}>
              Showing {indexOfFirstQuestion + 1}-{Math.min(indexOfLastQuestion, filteredQuestions.length)} of {filteredQuestions.length} questions
            </small>
          </Col>
        </Row>

        {/* Questions */}
        {currentQuestions.length > 0 ? (
          <QuestionAccordion
            questions={currentQuestions}
            title=""
            icon={BsCodeSquare}
            badgeColor="secondary"
            sectionId="pseudo-questions"
          />
        ) : (
          <div className="text-center py-5">
            <BsSearch className="fs-1 text-muted mb-3" />
            <h4 className={`${theme === 'dark' ? 'text-muted' : 'text-secondary'}`}>
              No questions found
            </h4>
            <p className={`${theme === 'dark' ? 'text-muted' : 'text-secondary'}`}>
              Try adjusting your search terms
            </p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <Row className="mt-5">
            <Col className="d-flex justify-content-center">
              <Pagination>
                <Pagination.Prev 
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                />
                
                {/* Show first page */}
                {currentPage > 3 && (
                  <>
                    <Pagination.Item onClick={() => handlePageChange(1)}>
                      1
                    </Pagination.Item>
                    {currentPage > 4 && <Pagination.Ellipsis />}
                  </>
                )}

                {/* Show current and surrounding pages */}
                {Array.from({ length: Math.min(5, totalPages) }, (_, index) => {
                  const pageNum = Math.max(1, Math.min(currentPage - 2 + index, totalPages - 4 + index));
                  if (pageNum <= totalPages && pageNum >= 1) {
                    return (
                      <Pagination.Item
                        key={pageNum}
                        active={pageNum === currentPage}
                        onClick={() => handlePageChange(pageNum)}
                      >
                        {pageNum}
                      </Pagination.Item>
                    );
                  }
                  return null;
                }).filter(Boolean)}

                {/* Show last page */}
                {currentPage < totalPages - 2 && (
                  <>
                    {currentPage < totalPages - 3 && <Pagination.Ellipsis />}
                    <Pagination.Item onClick={() => handlePageChange(totalPages)}>
                      {totalPages}
                    </Pagination.Item>
                  </>
                )}

                <Pagination.Next 
                  disabled={currentPage === totalPages}
                  onClick={() => handlePageChange(currentPage + 1)}
                />
              </Pagination>
            </Col>
          </Row>
        )}

        {/* Additional Resources */}
        <Row className="mt-5 pt-5 border-top">
          <Col>
            <h4 className={`mb-3 ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
              Continue Learning
            </h4>
            <div className="d-flex flex-wrap gap-2">
              <Link to="/basic" className="btn btn-outline-success btn-sm">
                Basic Questions →
              </Link>
              <Link to="/intermediate" className="btn btn-outline-info btn-sm">
                Intermediate Questions →
              </Link>
              <Link to="/advanced" className="btn btn-outline-warning btn-sm">
                Advanced Questions →
              </Link>
              <Link to="/interview" className="btn btn-outline-danger btn-sm">
                Interview Questions →
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PseudoCodes;
