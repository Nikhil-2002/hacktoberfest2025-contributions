import React, { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsEnvelope, BsLock, BsEye, BsEyeSlash, BsCode, BsPerson } from 'react-icons/bs';
import AuthContext from '../Context/AuthContext.js';

const SignUp = () => {
  const theme = useSelector((state) => state.theme.mode);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [msg, setMsg] = useState('');
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  const {handleSignUp} = useContext(AuthContext)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg('');
    setErr(false);

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      setMsg('Passwords do not match');
      setErr(true);
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setMsg('Password must be at least 6 characters long');
      setErr(true);
      setLoading(false);
      return;
    }

    // Simulate API call
    // setTimeout(() => {
    //   setLoading(false);
    //   // For demo purposes, just show success
    //   alert('Account created successfully! (This is a demo)');
    // }, 1500);

    let res = await handleSignUp(formData.firstName, formData.lastName, formData.email, formData.password);

    if(res.status == 201)
    {
      setErr(false);
      setMsg(res.message);
      setLoading(false);
      navigate("/");
      return;
    }
    else
    {
      setErr(true);
      setMsg(res.message)
      setLoading(false);
      return;
    }
    
  };

  return (
    <div className={`min-vh-100 d-flex align-items-center py-5 ${theme === 'dark' ? 'bg-dark' : 'bg-light'}`} style={{ paddingTop: '100px' }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className={`shadow-lg border-0 ${theme === 'dark' ? 'bg-dark text-light' : 'bg-white'}`}>
              <Card.Body className="p-5">
                {/* Logo */}
                <div className="text-center mb-4">
                  <div className="d-flex align-items-center justify-content-center mb-3">
                    <div 
                      className="d-flex align-items-center justify-content-center me-2 rounded"
                      style={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        width: '50px',
                        height: '50px'
                      }}
                    >
                      <BsCode className="text-white" style={{ fontSize: '24px' }} />
                    </div>
                  </div>
                  <h3 className="fw-bold mb-2">Create Account</h3>
                  <p className={`${theme === 'dark' ? 'text-muted' : 'text-secondary'}`}>
                    Join CodeWithJs and start your JavaScript journey
                  </p>
                </div>

                {msg && (
                  <Alert variant={err ? 'danger' : 'success'} className="mb-3">
                    {msg}
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>First Name</Form.Label>
                        <div className="position-relative">
                          <BsPerson 
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
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="First name"
                            required
                            className={`ps-5 ${theme === 'dark' ? 'bg-dark text-light border-secondary' : ''}`}
                            style={{ paddingLeft: '40px' }}
                          />
                        </div>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <div className="position-relative">
                          <BsPerson 
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
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Last name"
                            required
                            className={`ps-5 ${theme === 'dark' ? 'bg-dark text-light border-secondary' : ''}`}
                            style={{ paddingLeft: '40px' }}
                          />
                        </div>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <div className="position-relative">
                      <BsEnvelope 
                        className="position-absolute"
                        style={{ 
                          top: '50%', 
                          left: '12px', 
                          transform: 'translateY(-50%)',
                          color: '#6c757d'
                        }}
                      />
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                        className={`ps-5 ${theme === 'dark' ? 'bg-dark text-light border-secondary' : ''}`}
                        style={{ paddingLeft: '40px' }}
                      />
                    </div>
                  </Form.Group>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <div className="position-relative">
                          <BsLock 
                            className="position-absolute"
                            style={{ 
                              top: '50%', 
                              left: '12px', 
                              transform: 'translateY(-50%)',
                              color: '#6c757d'
                            }}
                          />
                          <Form.Control
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter password"
                            required
                            minLength="6"
                            className={`ps-5 pe-5 ${theme === 'dark' ? 'bg-dark text-light border-secondary' : ''}`}
                            style={{ paddingLeft: '40px', paddingRight: '40px' }}
                          />
                          <Button
                            variant="link"
                            className="position-absolute border-0 p-0"
                            style={{ 
                              top: '50%', 
                              right: '12px', 
                              transform: 'translateY(-50%)',
                              color: '#6c757d'
                            }}
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <BsEyeSlash /> : <BsEye />}
                          </Button>
                        </div>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Confirm Password</Form.Label>
                        <div className="position-relative">
                          <BsLock 
                            className="position-absolute"
                            style={{ 
                              top: '50%', 
                              left: '12px', 
                              transform: 'translateY(-50%)',
                              color: '#6c757d'
                            }}
                          />
                          <Form.Control
                            type={showConfirmPassword ? 'text' : 'password'}
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Confirm password"
                            required
                            className={`ps-5 pe-5 ${theme === 'dark' ? 'bg-dark text-light border-secondary' : ''}`}
                            style={{ paddingLeft: '40px', paddingRight: '40px' }}
                          />
                          <Button
                            variant="link"
                            className="position-absolute border-0 p-0"
                            style={{ 
                              top: '50%', 
                              right: '12px', 
                              transform: 'translateY(-50%)',
                              color: '#6c757d'
                            }}
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          >
                            {showConfirmPassword ? <BsEyeSlash /> : <BsEye />}
                          </Button>
                        </div>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-4">
                    <Form.Check
                      type="checkbox"
                      id="terms-check"
                      required
                      className={theme === 'dark' ? 'text-light' : ''}
                      label={
                        <span>
                          I agree to the{' '}
                          <Link to="/terms" style={{ color: '#667eea' }}>Terms of Service</Link>
                          {' '}and{' '}
                          <Link to="/privacy" style={{ color: '#667eea' }}>Privacy Policy</Link>
                        </span>
                      }
                    />
                  </Form.Group>

                  <Button
                    type="submit"
                    className="w-100 mb-3"
                    disabled={loading}
                    style={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      border: 'none',
                      padding: '12px'
                    }}
                  >
                    {loading ? 'Creating Account...' : 'Create Account'}
                  </Button>
                </Form>

                <div className="text-center">
                  <span className={`${theme === 'dark' ? 'text-muted' : 'text-secondary'}`}>
                    Already have an account?{' '}
                  </span>
                  <Link 
                    to="/signin" 
                    className="text-decoration-none fw-medium"
                    style={{ color: '#667eea' }}
                  >
                    Sign In
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignUp;
