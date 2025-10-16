// import { useSelector, useDispatch } from "react-redux";
// import { Navbar, Nav, Button, Container } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import {
//   BsFillSunFill,
//   BsFillMoonFill,
//   BsCode,} from "react-icons/bs";
// import { toggleTheme } from "../store/themeSlice";

// const NavigationBar = () => {
//   const theme = useSelector((state) => state.theme.mode);
//   const dispatch = useDispatch();

//   const handleThemeToggle = () => {
//     dispatch(toggleTheme());
//   };

//   return (
//     <Navbar
//       bg={theme === "dark" ? "dark" : "light"}
//       variant={theme === "dark" ? "dark" : "light"}
//       expand="lg"
//       fixed="top"
//       className={`shadow-sm ${theme === "light" ? "bg-white" : ""}`}
//       style={{
//         backgroundColor: theme === "light" ? "#5e5e5eff" : "",
//         borderBottom: theme === "light" ? "1px solid #eaeaea" : "none",
//       }}
//     >
//       <Container>
//         {/* Logo Section */}
//         <Navbar.Brand
//           as={Link}
//           to="/"
//           className="d-flex align-items-center fw-bold"
//           style={{
//             textDecoration: "none",
//             userSelect: "none",
//           }}
//         >
//           <div className="d-flex align-items-center">
//             <div
//               className="d-flex align-items-center justify-content-center me-2 rounded"
//               style={{
//                 background:
//                   "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//                 width: "35px",
//                 height: "35px",
//                 minWidth: "35px",
//                 boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
//               }}
//             >
//               <BsCode className="text-white" style={{ fontSize: "18px" }} />
//             </div>
//             <span
//               style={{
//                 background:
//                   "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 fontSize: "1.5rem",
//                 fontWeight: "700",
//                 letterSpacing: "-0.5px",
//                 textDecoration: "none",
//               }}
//             >
//               CodeWithJs
//             </span>
//           </div>
//         </Navbar.Brand>

//         {/* Mobile Toggle */}
//         <Navbar.Toggle aria-controls="navbar-nav" />

//         <Navbar.Collapse id="navbar-nav">
//           {/* Navigation Links */}
//           <Nav className="me-auto">
//             {["Basic", "Intermediate", "Advanced", "Pseudo Code", "Interview"].map(
//               (item, i) => (
//                 <Nav.Link
//                   key={i}
//                   as={Link}
//                   to={`/${item.toLowerCase().replace(" ", "")}`}
//                   className="mx-2 fw-semibold"
//                   style={{
//                     textDecoration: "none",
//                     color:
//                       theme === "dark" ? "#eaeaea" : "#333",
//                     transition: "color 0.3s",
//                   }}
//                   onMouseEnter={(e) =>
//                     (e.target.style.color =
//                       theme === "dark" ? "#fff" : "#001989ff")
//                   }
//                   onMouseLeave={(e) =>
//                     (e.target.style.color =
//                       theme === "dark" ? "#eaeaea" : "#333")
//                   }
//                 >
//                   {item}
//                 </Nav.Link>
//               )
//             )}
//           </Nav>

//           {/* Right Side Buttons */}
//           <Nav className="d-flex align-items-center">
            

//             {/* Auth Buttons */}
//             <div className="d-flex gap-2">
//               <Button
//                 as={Link}
//                 to="/signin"
//                 variant={theme === "dark" ? "outline-light" : "outline-primary"}
//                 size="sm"
//                 className="d-flex align-items-center text-decoration-none"
//               >
//                 Sign In
//               </Button>

//               <Button
//                 as={Link}
//                 to="/signup"
//                 variant="primary"
//                 size="sm"
//                 className="d-flex align-items-center text-decoration-none"
//               >
//                 Sign Up
//               </Button>

//                 <Button
//               variant="link"
//               size="sm"
//               onClick={handleThemeToggle}
//               className={`me-3 d-flex align-items-center justify-content-center p-2 rounded-circle ${
//                 theme === "dark" ? "text-warning" : "text-dark"
//               }`}
//               style={{
//                 minWidth: "40px",
//                 height: "40px",
//                 border: "none",
//                 backgroundColor:
//                   theme === "dark"
//                     ? "rgba(255, 193, 7, 0.15)"
//                     : "rgba(33, 37, 41, 0.05)",
//                 transition: "all 0.2s ease",
//               }}
//             >
//               {theme === "dark" ? (
//                 <BsFillSunFill className="fs-5" />
//               ) : (
//                 <BsFillMoonFill className="fs-5" />
//               )}
//             </Button>
//             </div>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default NavigationBar;
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
