
import { useSelector, useDispatch } from "react-redux";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  BsFillSunFill,
  BsFillMoonFill,
  BsCode,
} from "react-icons/bs";
import { toggleTheme } from "../store/themeSlice";
import AuthContext from "../Context/AuthContext.js";

const NavigationBar = () => {
  const theme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();
  const [scrolled, setScrolled] = useState(false);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`shadow-sm navbar-custom ${theme} ${
        scrolled ? "navbar-scrolled" : ""
      }`}
    >
      <Container>
        {/* Logo Section */}
        <Navbar.Brand as={Link} to="/" className="navbar-logo d-flex align-items-center fw-bold">
          <div className="d-flex align-items-center">
            <div className="logo-icon d-flex align-items-center justify-content-center me-2 rounded">
              <BsCode className="text-white" style={{ fontSize: "18px" }} />
            </div>
            <span className="logo-text">CodeWithJs</span>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            {["Basic", "Intermediate", "Advanced", "Pseudo Code", "Interview"].map(
              (item, i) => (
                <Nav.Link
                  key={i}
                  as={Link}
                  to={`/${item.toLowerCase().replace(" ", "")}`}
                  className={`nav-link-custom ${theme}`}
                >
                  {item}
                </Nav.Link>
              )
            )}
          </Nav>

          {/* Right Side Buttons */}
          <Nav className="d-flex align-items-center gap-2">
            <Button as={Link} to="/signin" className="btn-signin">
              Sign In
            </Button>

            <Button as={Link} to="/signup" className="btn-signup">
              Sign Up
            </Button>

            <Button
              variant="link"
              size="sm"
              onClick={handleThemeToggle}
              className={`theme-toggle-btn ${
                theme === "dark" ? "dark-mode" : "light-mode"
              }`}
            >
              {theme === "dark" ? (
                <BsFillSunFill className="fs-5" />
              ) : (
                <BsFillMoonFill className="fs-5" />
              )}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;