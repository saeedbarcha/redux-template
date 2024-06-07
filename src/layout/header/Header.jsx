import React, { useEffect, useState } from "react";
import { Container, Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { useLogoutMutation } from "../../slices/usersApiSlice";
import { logout } from "../../slices/authSlice";
import { CgProfile, CgMail } from "react-icons/cg";
import { BsGrid3X3GapFill } from "react-icons/bs";
import {
  FaUser,
  FaSignOutAlt,
  FaPhoneAlt,
  FaBookOpen,
} from "react-icons/fa";
import {
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import "./Header.css";
import { MdOutlineArrowUpward } from "react-icons/md";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const [logoutApiCall] = useLogoutMutation();


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <>
      <section id="topbar" className="d-flex align-items-center">
        <div className="container d-flex justify-content-center justify-content-md-between ">
          <div className="contact-info d-flex align-items-center">
            <CgMail />
            <a
              href='#'
                
            >
             home
            </a>

            <FaPhoneAlt style={{ marginLeft: "15px" }} />
            <span>
             page
            </span>
          </div>
        
        </div>
      </section>
      
      <Navbar
        id="header"
        expand="xl"
        className={`${scrolled ? "scrolled" : ""} ${isMenuOpen ? "menu-open" : ""
          }`}
      >
        <Container fluid className="navContainer" >
          <div id="logo" >
            <Navbar.Brand>
              <Link to="/">
                Home
              </Link>
            </Navbar.Brand>
          </div>
          <Navbar.Toggle className="" onClick={toggleMenu}>
            {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav" className="flex-grow-0" >
         
            <Nav>

            <LinkContainer to="/team">
                <Nav.Link smooth>Todo</Nav.Link>
              </LinkContainer>
             
              <LinkContainer to="/team">
                <Nav.Link smooth>team</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/service">
                <Nav.Link smooth>Services</Nav.Link>
              </LinkContainer>
            

              <LinkContainer to="/profile">
                <Nav.Link smooth>profile</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/settings">
                <Nav.Link smooth>settings</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div
        className={`back-to-top ${scrolled ? "active" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <MdOutlineArrowUpward />
      </div>
    </>
  );
};

export default Header;
