/*!

=========================================================
* BLK Design System React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
import { Button, NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md="3">
            <img
              style={{
                height: "7vh",
                boxShadow: "0px 2px 5px 2px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#fff",
                borderRadius: "20%",
                width: "7vh",
                padding: "1vh",
                margin: "0.5vh",
              }}
              src={require("./reauty-logo.png")}
              alt="test"
            />
            <p>
            <br />
              © Copyright <br />
              ReautyDAO 2022
            </p>
          </Col>
          <Col md="3">
            <Nav>
              <NavItem>
                <NavLink to="/" tag={Link}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="https://reautydao.io/about/" tag={Link}>
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="https://www.blingyte.com/privacy-policy"
                  tag={Link}
                >
                  Terms
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="https://reautydao.io/" tag={Link}>
                  ReautyDAO
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md="6">
            <h3 className="title">Follow us:</h3>
            <div className="btn-wrapper profile">
              <Button
                color="info"
                href="https://twitter.com/ReautyDao"
              >
                <i className="fab fa-twitter" />
              </Button>
              <Button
                color="default"
                href="https://www.linkedin.com/company/blingy/"
              >
                <i className="fab fa-linkedin" />
              </Button>
              <Button
                color="primary"
                href="https://reautydao.io"
              >
                <i className="fa-solid fa-globe"/>
              </Button>
              <Button
                color="success"
                href="https://reautydao.io/"
              >
                <i className="fa-brands fa-discord"/>
              </Button>
              <Button
                color="warning"
                href="https://www.instagram.com/reautyapp/"
              >
                <i className="fa-brands fa-instagram"/>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
