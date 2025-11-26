import { useSelector } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";
import { 
  BsGithub, 
  BsLinkedin, 
  BsTwitter, 
  BsEnvelope, 
  BsHeart, 
  BsCode,
  BsStar,
  BsCurrencyDollar
} from 'react-icons/bs';

const Footer = () => {
  const theme = useSelector((state) => state.theme.mode);

  const socialLinks = [
    { icon: <BsEnvelope />, text: "Email", href: "mailto:hello@codewithjs.com" },
    { icon: <BsGithub />, text: "GitHub", href: "https://github.com/Nikhil-2002/hacktoberfest2025-contributions" },
    { icon: <BsLinkedin />, text: "LinkedIn", href: "https://www.linkedin.com/in/nikhil-falke-1a3639200/" },
    { icon: <BsTwitter />, text: "Twitter", href: "https://twitter.com/nikhil-falke" },
  ];

  const categories = ["Basic Questions", "Intermediate", "Advanced", "Pseudo Code", "Interview"];

  return (
    <footer className={`footer mt-5 py-5 ${theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"}`}>

      {/* Floating particles */}
      <div className="particles">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="particle" style={{ "--i": i/20 }}></span>
        ))}
      </div>

      <Container>
        <Row className="gy-4">
        
<Col lg={4} md={6} className="mb-4">
  <div className="footer-logo d-flex align-items-center mb-3">
    <div className="logo-icon d-flex align-items-center justify-content-center me-2 rounded bg-primary">
      <BsCode className="text-white" style={{ fontSize: "18px" }} />
    </div>
    <span className="logo-text fw-bold">CodeWithJs</span>
  </div>
  <p className={`mb-3 ${theme === "dark" ? "text-light" : "text-muted"}`}>
    Master JavaScript from basics to advanced concepts. Practice with real interview questions and improve your coding skills.
  </p>
  <div className="d-flex gap-2">
    <Button className="btn-animate" variant={theme === "dark" ? "outline-light" : "outline-dark"} size="sm">
      <BsGithub className="me-1" /> GitHub
    </Button>
    <Button className="btn-animate" variant={theme === "dark" ? "outline-light" : "outline-dark"} size="sm">
      <BsStar className="me-1" /> Star Us
    </Button>
  </div>
</Col>


          {/* Categories */}
          <Col lg={2} md={6} className="mb-4">
            <h6 className="fw-bold mb-3 link-animate">Categories</h6>
            <ul className="list-unstyled">
              {categories.map((cat, i) => (
                <li key={i} className="mb-2">
                  <a href={`/${cat.toLowerCase().replace(/\s/g,'')}`} className={`link-hover ${theme === "dark" ? "text-light" : "text-muted"}`}>
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          {/* Contact */}
          <Col lg={3} md={6} className="mb-4">
            <h6 className="fw-bold mb-3 link-animate">Contact</h6>
            <div className="d-flex flex-column gap-2">
              {socialLinks.map((link, i) => (
                <a key={i} href={link.href} target="_blank" rel="noopener noreferrer"
                  className={`d-flex align-items-center link-hover ${theme === "dark" ? "text-light" : "text-muted"}`}>
                  <span className="social-icon">{link.icon}</span>
                  <span className="ms-2">{link.text}</span>
                </a>
              ))}
            </div>
          </Col>

          {/* Support */}
          <Col lg={3} md={6} className="mb-4">
            <h6 className="fw-bold mb-3 link-animate">Support</h6>
            <div className="d-flex flex-column gap-3">
              <div className="support-box animate-hover">
                <p className={`small mb-2 ${theme === "dark" ? "text-light" : "text-muted"}`}>Help us improve and add more content</p>
                <Button variant="primary" size="sm" className="btn-animate"><BsHeart className="me-1" /> Contribute</Button>
              </div>
              <div className="support-box animate-hover">
                <p className={`small mb-2 ${theme === "dark" ? "text-light" : "text-muted"}`}>Buy us a coffee to keep going</p>
                <Button variant="warning" size="sm" className="btn-animate "><BsCurrencyDollar className="me-1" /> Donate</Button>
              </div>
            </div>
          </Col>
        </Row>

        <hr className={`my-4 ${theme === "dark" ? "border-secondary" : "border-light"}`} />

        {/* Bottom */}
        <Row>
          <Col md={6}>
            <small className={`bottom-text-animate ${theme === "dark" ? "text-muted" : "text-secondary"}`}>
              © 2024 CodeWithJs. Made with <BsHeart className="text-danger mx-1 heart-animate"/> Community developers.
            </small>
          </Col>
          
          <Col md={6} className="text-md-end">
            <small className={`bottom-text-animate ${theme === "dark" ? "text-muted" : "text-secondary"}`}>
              Open Source • MIT License • Free to Use
            </small>
          </Col>
        </Row>
      </Container>

     
      <div className="footer-waves">
        <svg viewBox="0 0 1440 150" preserveAspectRatio="none">
          <path d="M0,50 C360,150 1080,0 1440,50 L1440,150 L0,150 Z" className="wave"></path>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
