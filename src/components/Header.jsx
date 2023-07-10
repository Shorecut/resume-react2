import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar bg="transperent">
        <Container>
          <Navbar.Brand onClick={() => navigate("/")}>
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=pw2GtUhNoCM"
            >
              <img
                width={60}
                src="https://freesvg.org/img/airplane-goofy.png"
              />
            </a>
          </Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link
              style={{ fontSize: "18px" }}
              onClick={() => navigate("/")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              style={{ fontSize: "18px" }}
              onClick={() => navigate("/contact")}
            >
              Contacts
            </Nav.Link>
            <Nav.Link
              style={{ fontSize: "18px" }}
              onClick={() => navigate("/skills")}
            >
              Skills
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
