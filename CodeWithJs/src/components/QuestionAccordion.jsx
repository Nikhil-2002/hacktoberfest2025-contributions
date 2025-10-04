import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Accordion, Container, Row, Col, Badge } from 'react-bootstrap';

// ✅ QuestionAccordion Component
// Renders a styled accordion section with questions and answers
const QuestionAccordion = ({ questions, title, icon: IconComponent, badgeColor, sectionId }) => {
  const theme = useSelector((state) => state.theme.mode);

  // ✅ Track which accordion item is open (activeKey)
  const [activeKey, setActiveKey] = useState(null);

  // ✅ Handle toggle open/close
  const handleToggle = (eventKey) => {
    // If the same item is clicked → close it (set null), else open the new one
    setActiveKey(activeKey === eventKey ? null : eventKey);
  };

  // ✅ Function to format answer (supports markdown-style bold/italic + code blocks)
  const formatAnswer = (answer) => {
    // Split answer into code blocks (```...```) and normal text
    const parts = answer.split(/(```[\s\S]*?```)/g);

    return parts.map((part, index) => {
      // If this part is a code block
      if (part.startsWith('```')) {
        const codeMatch = part.match(/```(\w+)?\n?([\s\S]*?)```/);
        if (codeMatch) {
          const [, language, code] = codeMatch;
          return (
            <div key={index} className="my-4">
              {/* Show code block with nice styling */}
              <pre
                className={`p-3 ${theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}
                style={{
                  borderRadius: '8px',
                  overflowX: 'auto',
                  fontSize: '0.875rem',
                  lineHeight: '1.5'
                }}
              >
                <code className={`language-${language || 'javascript'}`}>
                  {code.trim()}
                </code>
              </pre>
            </div>
          );
        }
      } 
      // Else → Render normal text with markdown-like formatting
      else {
        return (
          <div
            key={index}
            dangerouslySetInnerHTML={{
              __html: part
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold (**text**)
                .replace(/\*(.*?)\*/g, '<em>$1</em>')             // Italics (*text*)
                .replace(/\n\n/g, '<br><br>')                     // Paragraphs
                .replace(/\n/g, '<br>')                           // Line breaks
            }}
          />
        );
      }
    });
  };

  // ✅ If no questions, do not render this section
  if (!questions || questions.length === 0) {
    return null;
  }

  return (
    <Container className="my-5" id={sectionId}>
      <Row>
        <Col>
          {/* Section header with icon, title, and question count */}
          <div className="d-flex align-items-center mb-4">
            <IconComponent className={`me-3 fs-2 text-${badgeColor}`} />
            <div>
              <h2 className={`mb-1 ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
                {title}
              </h2>
              <Badge bg={badgeColor} className="fs-6">
                {questions.length} Questions
              </Badge>
            </div>
          </div>

          {/* ✅ Controlled Accordion */}
          {/* activeKey → tells which question is open */}
          {/* onSelect → toggles open/close */}
          <Accordion activeKey={activeKey} onSelect={handleToggle}>
            {questions.map((question, index) => (
              <Accordion.Item
                key={question.id}
                eventKey={question.id.toString()} // IDs must be strings
                className={`${theme === 'dark' ? 'bg-dark border-secondary' : 'bg-white'}`}
              >
                {/* Accordion Header (Question) */}
                <Accordion.Header>
                  <div className="d-flex align-items-center w-100">
                    {/* Number Badge */}
                    <div
                      className={`badge bg-${badgeColor} me-3 rounded-pill d-flex align-items-center justify-content-center`}
                      style={{
                        minWidth: '35px',
                        height: '35px',
                        fontSize: '0.9rem',
                        fontWeight: '600'
                      }}
                    >
                      {index + 1}
                    </div>
                    <span className="fw-semibold fs-6">{question.question}</span>
                  </div>
                </Accordion.Header>

                {/* Accordion Body (Answer) */}
                <Accordion.Body
                  className={theme === 'dark' ? 'bg-dark text-light border-secondary' : 'bg-white text-dark'}
                  style={{
                    borderTop: `1px solid ${theme === 'dark' ? '#444' : '#dee2e6'}`,
                    fontSize: '0.95rem',
                    lineHeight: '1.6'
                  }}
                >
                  {/* Render formatted answer */}
                  <div className="answer-content">
                    {formatAnswer(question.answer)}
                  </div>

                  {/* Extra Info */}
                  <div className={`mt-4 pt-3 border-top ${theme === 'dark' ? 'border-secondary' : 'border-light'}`}>
                    <small className={theme === 'dark' ? 'text-muted' : 'text-secondary'}>
                      Question ID: {question.id} | 
                      Category: {title} | 
                      <span className="ms-1">
                        💡 Tip: Practice implementing this code yourself for better understanding
                      </span>
                    </small>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default QuestionAccordion;
