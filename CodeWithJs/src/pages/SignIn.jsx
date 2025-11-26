import React, { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { BsEnvelope, BsLock, BsEye, BsEyeSlash, BsCode } from 'react-icons/bs';
import AuthContext from '../Context/AuthContext.js';

const SignIn = () => {
  const theme = useSelector((state) => state.theme.mode);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [msg, setMsg] = useState('');
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  const {handleLogin} = useContext(AuthContext);
  let navigate = useNavigate();

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
    
    // Simulate API call
    // setTimeout(() => {
    //   setLoading(false);
    //   // For demo purposes, just show success
    //   alert('Sign in successful! (This is a demo)');
    // }, 1500);

    let res = await handleLogin(formData.email, formData.password);
    
    if(res.status == 200)
    {
      setLoading(false);
      setErr(false);
      setMsg((preVal)=>preVal = res.message);
      navigate("/");
      return;
    }
    else
    {
      setLoading(false);
      setErr(true);
      setMsg((preVal)=> preVal = res.message);
      return;
    }

  };

  return (
    <div className={`min-vh-100 d-flex align-items-center ${theme === 'dark' ? 'bg-dark' : 'bg-light'}`} style={{ paddingTop: '80px' }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={4}>
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
                  <h3 className="fw-bold mb-2">Welcome Back</h3>
                  <p className={`${theme === 'dark' ? 'text-muted' : 'text-secondary'}`}>
                    Sign in to your CodeWithJs account
                  </p>
                </div>

                {msg && (
                  <Alert variant={err? 'danger' : 'success'} className="mb-3">
                    {msg}
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
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
                        placeholder="Enter your password"
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
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <BsEyeSlash /> : <BsEye />}
                      </Button>
                    </div>
                  </Form.Group>

                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <Form.Check
                      type="checkbox"
                      id="remember-me"
                      label="Remember me"
                      className={theme === 'dark' ? 'text-light' : ''}
                    />
                    <Link 
                      to="/forgot-password" 
                      className="text-decoration-none"
                      style={{ color: '#667eea' }}
                    >
                      Forgot Password?
                    </Link>
                  </div>

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
                    {loading ? 'Signing in...' : 'Sign In'}
                  </Button>
                </Form>

                <div className="text-center">
                  <span className={`${theme === 'dark' ? 'text-muted' : 'text-secondary'}`}>
                    Don't have an account?{' '}
                  </span>
                  <Link 
                    to="/signup" 
                    className="text-decoration-none fw-medium"
                    style={{ color: '#667eea' }}
                  >
                    Sign Up
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

export default SignIn;
