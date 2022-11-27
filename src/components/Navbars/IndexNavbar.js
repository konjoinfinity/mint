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
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../PageHeader/redux/data/dataActions";

export default function IndexNavbar() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
    console.log(CONFIG.CONTRACT_ADDRESS)
  };

  useEffect(() => {
    getConfig();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blockchain.account]);

  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-warning");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };
  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand to="/" id="navbar-brand" tag={Link}>
          <img style={{height: "6vh", boxShadow: "0px 2px 5px 2px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#fff",
  borderRadius: "20%",
  width: "6vh",
  padding: "1vh" }} src={require("./reauty-logo.png")} alt="test"></img>
          </NavbarBrand>
          <button
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className={"justify-content-end " + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  ReautyDAO
                </a>
              </Col>
              <Col className="collapse-close text-right" xs="6">
                <button
                  aria-expanded={collapseOpen}
                  className="navbar-toggler"
                  onClick={toggleCollapse}
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
              </Col>
            </Row>
          </div>
          <Nav navbar>
            <NavItem>
            {blockchain.account === "" || blockchain.smartContract === null ? (
          <Button
        color="primary"
        variant="contained"
        size="medium">
        No Wallet Connected
      </Button>
          ) : (
      <Button
        color="primary"
        variant="contained"
        size="medium">
        Connected to {blockchain.account ? blockchain.account.substring(0, 4) : ""}...{blockchain.account ? blockchain.account.substring(blockchain.account.length - 4) : ""}
      </Button>
          )}
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
