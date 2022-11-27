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

import {
  Container,
  Row,
  Col,
} from "reactstrap";

export default function JavaScript() {
  return (
    <div className="section section-signup">
    <Container>
        <div className="squares square-1" />
        <div className="squares square-2" />
        <div className="squares square-3" />
        <div className="squares square-4" />
    <section className="section section-lg section-safe">
    <img
            alt="..."
            className="path"
            src={require("assets/img/path3.png")}
          />
    <Container>
      <Row className="justify-content-center">
        <Col lg="12">
          <h1 className="text-center">
            Additional Benefits
          </h1>
          <Row className="row-grid justify-content-center">
            <Col lg="3">
              <div className="info">
                <div className="icon icon-primary">
                  <img src={require("./daow.webp")} alt="dao" style={{height: "10vh", width: "10vh"}}/>
                </div>
                <h4 className="info-title">Reauty DAO</h4>
                <hr className="line-primary" />
                <p>
                  Reauty DAO community empowers all members with
                  ownership, control, and monetization of their
                  beauty-relevant data. Overall, community members have
                  the power to build a new order in the beauty industry
                  with transparency, inclusiveness, and authenticity
                  supported by blockchain technology!
                  <br />
                  <br />
                  Creating a truly decentralized and trustworthy beauty
                  community is vital for every beauty stakeholder
                  worldwide, and we're excited to lead this disruptive
                  beauty transformation.
                </p>
              </div>
            </Col>
            <Col lg="3">
              <div className="info">
                <div className="icon icon-warning">
                  <img src={require("./nftwh.webp")} alt="nft" style={{height: "10vh", width: "10vh"}}/>
                </div>
                <h4 className="info-title">Why NFTs?</h4>
                <hr className="line-warning" />
                <p>
                  The beauty industry needs to do better. We see
                  firsthand how misleading marketing claims, exaggerated
                  claims, and unrealistic expectations lead to unhealthy
                  choices for our customers. That's why we're launching
                  the first NFT series: Toxic Baebaee! Each variation is
                  entirely customizable with 3D, Pixelated, and 2D so
                  you can choose the best look. This NFT series will
                  help raise awareness of the toxic beauty industry
                  while empowering consumers to make healthier choices.
                </p>
              </div>
            </Col>
            <Col lg="3">
              <div className="info">
                <div className="icon icon-success">
                  <img src={require("./memberw.webp")} alt="membership" style={{height: "10vh", width: "10vh"}}/>
                </div>
                <h4 className="info-title">
                  NFT Purchase = DAO Membership
                </h4>
                <hr className="line-success" />
                <p>
                  It's Halloween season, and we're celebrating by
                  slashing prices on Toxic Baebee NFTs from midnight on
                  31st Oct 2022 until 30th Nov 2022!
                  <br />
                  <br />
                  The first 100 Toxic Baebee NFT owners will get 0.1 ETH
                  worth of Reauty DAO membership, giving them access to
                  all the community privileges and powers to improve the
                  web3 beauty community. Don't miss out on this spooky
                  deal!
                </p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </section>
  </Container>
 </div>
  );
}
