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
import classnames from "classnames";
import {
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

export default function PaginationSection() {
  const [pills, setPills] = React.useState(1);
  return (
    <div className="section section-pagination">
      <img alt="..." className="path" src={require("assets/img/path4.png")} />
      <img
        alt="..."
        className="path path1"
        src={require("assets/img/path5.png")}
      />
      <Container>
        
            <h3 className="mb-5">Specifications</h3>
            <Nav className="nav-pills-info nav-pills-icons" pills>
              <NavItem>
                <NavLink
                  className={classnames({
                    "active show": pills === 1
                  })}
                  onClick={(e) => setPills(1)}
                  href="#pablo"
                >
                  <div className="icon-big text-center icon-warning">
                                <img
                                  style={{ height: "5vh", width: "5vh" }}
                                  alt={"toxic baebees"}
                                  src={require("./userw.webp")}
                                />
                              </div>
                              Characters
                              <br />
                              <br />
                              Test
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    "active show": pills === 2
                  })}
                  onClick={(e) => setPills(2)}
                  href="#pablo"
                >
                  <i className="tim-icons icon-chat-33" />
                  Messages
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    "active show": pills === 3
                  })}
                  onClick={(e) => setPills(3)}
                  href="#pablo"
                >
                  <i className="tim-icons icon-settings-gear-63" />
                  Settings
                </NavLink>
              </NavItem>
            </Nav>
      </Container>
    </div>
  );
}
