import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col, Button, Card, Form, Alert } from 'react-bootstrap';
import quizQuestions from '../data/quizQuestions.json';

const QuizMode = () => {
  const theme = useSelector((state) => state.theme.mode);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (qId, option) => {
    setAnswers({ ...answers, [qId]: option });
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleRestart = () => {
    setAnswers({});
    setSubmitted(false);
  };

  const score = quizQuestions.reduce((acc, q) => {
    if (answers[q.id] === q.answer) return acc + 1;
    return acc;
  }, 0);

  return (
    <Container className="py-5">
      <Row className="mb-4">
        <Col className="text-center">
          <h2 className={theme === 'dark' ? 'text-light' : 'text-dark'}>JavaScript Quiz</h2>
          <p className={theme === 'dark' ? 'text-muted' : 'text-secondary'}>
            Select the correct answers and submit to see your score
          </p>
        </Col>
      </Row>

      <Row>
        {quizQuestions.map((q) => (
          <Col md={12} key={q.id} className="mb-4">
            <Card className={theme === 'dark' ? 'bg-dark text-light' : 'bg-white'}>
              <Card.Body>
                <Card.Title>{q.id}. {q.question}</Card.Title>
                <Form>
                  {q.options.map((opt, idx) => (
                    <Form.Check 
                      type="radio"
                      name={`question-${q.id}`}
                      id={`q${q.id}-opt${idx}`}
                      key={idx}
                      label={opt}
                      checked={answers[q.id] === opt}
                      onChange={() => handleChange(q.id, opt)}
                      disabled={submitted}
                    />
                  ))}
                </Form>
                {submitted && (
                  <Alert 
                    variant={answers[q.id] === q.answer ? 'success' : 'danger'} 
                    className="mt-2 py-1"
                  >
                    Correct Answer: {q.answer}
                  </Alert>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="mt-4">
        <Col className="text-center">
          {!submitted ? (
            <Button variant="primary" size="lg" onClick={handleSubmit}>
              Submit Quiz
            </Button>
          ) : (
            <>
              <h4 className="mt-3">Your Score: {score} / {quizQuestions.length}</h4>
              <Button variant="secondary" className="mt-2" onClick={handleRestart}>
                Restart Quiz
              </Button>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default QuizMode;
