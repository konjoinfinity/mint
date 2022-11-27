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
import { Container, Row, Col, Button } from "reactstrap";

export default function Typography() {
  return (
    <section className="section section-lg section-safe">
      <img
            alt="..."
            className="path"
            src={require("assets/img/path3.png")}
          />
            <Container>
              <Row className="justify-content-center" style={{marginBottom: "10vh"}}>
                <Col lg="12">
                  <h1 className="text-center">
                    3D TOXIC BAEBEES - LIMITED EDITION
                  </h1>
                  <Row className="row-grid justify-content-center">

                    <Col lg="3">
                      <div className="info">
                        <div className="icon icon-primary">
                          <img src={require("./unreal3d.webp")} alt="unreal" />
                        </div>
                        <h4 className="info-title">Unreal Baebee</h4>
                      <hr className="line-primary" />
                        <div className="btn-wrapper">
                  <div className="button-container">
                    <Button style={{margin: "3vh"}}
                      color="primary" href="https://opensea.io/collection/3d-toxic-baebee" tag="a">
                      Purchase on Opensea
                    </Button>
                  </div>
                </div>
                      </div>
                    </Col>
                    <Col lg="3">
                      <div className="info">
                        <div className="icon icon-warning">
                          <img src={require("./cond3d.webp")} alt="Vampire" />
                        </div>
                        <h4 className="info-title">Contaminated Baebee</h4>
                      <hr className="line-warning" />
                        <div className="btn-wrapper">
                  <div className="button-container">
                    <Button style={{margin: "3vh"}}
                      color="warning" href="https://opensea.io/collection/3d-toxic-baebee" tag="a">
                       Purchase on Opensea
                    </Button>
                  </div>
                </div>
                      </div>
                    </Col>
                    <Col lg="3">
                      <div className="info">
                        <div className="icon icon-success">
                          <img src={require("./poisoned3d.webp")} alt="Zombie" />
                          <h4 className="info-title">Poisoned Baebee</h4>
                      <hr className="line-success" />
                        </div>
                        <div className="btn-wrapper">
                  <div className="button-container">
                    <Button style={{margin: "3vh"}}
                      color="success" href="https://opensea.io/collection/3d-toxic-baebee" tag="a">
                     Purchase on Opensea
                    </Button>
                  </div>
                </div>
                      </div>
                    </Col>
                    
                  </Row>
                </Col>
                <Col lg="3">
                      <div className="info">
                        <div className="icon icon-success">
                          <img src={require("./frida3d2.webp")} alt="Mask" />
                          <h4 className="info-title">Mask Baebee</h4>
                    <hr className="line-danger" />
                        </div>
                        <div className="btn-wrapper">
                  <div className="button-container">
                    <Button style={{margin: "3vh"}}
                      color="danger"
                      href="https://opensea.io/collection/3d-toxic-baebee" tag="a">
                     Purchase on Opensea
                    </Button>
                  </div>
                </div>
                      </div>
                    </Col>
                    <Col lg="3">
                      <div className="info">
                        <div className="icon icon-success">
                          <img src={require("./joke3d.webp")} alt="Joker" />
                          <h4 className="info-title">Joker Baebee</h4>
                    <hr className="line-info" />
                        </div>
                        <div className="btn-wrapper">
                  <div className="button-container">
                    <Button style={{margin: "3vh"}}
                      color="info" href="https://opensea.io/collection/3d-toxic-baebee" tag="a">
                     Purchase on Opensea
                    </Button>
                  </div>
                </div>
                      </div>
                    </Col>
                    <Col lg="3">
                      <div className="info">
                        <div className="icon icon-success">
                          <img src={require("./Fire3d.webp")} alt="Fire" />
                          <h4 className="info-title">Fire Baebee</h4>
                    <hr className="line-default" />
                        </div>
                        <div className="btn-wrapper">
                  <div className="button-container">
                    <Button style={{margin: "3vh"}}
                      color="default" href="https://opensea.io/collection/3d-toxic-baebee" tag="a">
                     Purchase on Opensea
                    </Button>
                  </div>
                </div>
                      </div>
                    </Col>
              </Row>
            </Container>
          </section>
  );
}
