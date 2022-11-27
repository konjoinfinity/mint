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
import { Row, Col, Container } from "reactstrap";

export default function Notifications() {
  return (
    <div style={{marginBottom: "10vh"}}>
       <img
            alt="..."
            className="path"
            src={require("assets/img/blob.png")}
          />
          <img
            alt="..."
            className="shapes triangle"
            src={require("assets/img/triunghiuri.png")}
          />
         
         
          
    <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <h1 className="text-center">Meet The Characters</h1>
                <Row className="row-grid justify-content-center">
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-primary">
                        <img src={require("./Unreal.webp")} alt="unreal" />
                      </div>
                      <h4 className="info-title">Unreal Baebee</h4>
                      <hr className="line-primary" />
                      <p>
                        As technology continues connecting us, people are
                        increasingly investing in appearances. While it's
                        exciting to have the freedom to express ourselves
                        through fashion, it can also be harmful. Instead of
                        being blinded by trends and clickbait images, we should
                        focus on maintaining our natural beauty. Let's remind
                        each other that authenticity is the most beautiful thing
                        we can possess.
                      </p>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-warning">
                        <img src={require("./Vampire.webp")} alt="Vampire" />
                      </div>
                      <h4 className="info-title">Contaminated Baebee</h4>
                      <hr className="line-warning" />
                      <p>
                        It's shocking to think how much harm some beauty
                        products and non-biodegradable packaging can do to the
                        environment. It's time for beauty brands to step up and
                        take action by transitioning to more eco-friendly
                        alternatives. It's up to us as consumers to demand this
                        shift, and we can use our voices to show brands which
                        practices we support and which we don't.
                      </p>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-success">
                        <img src={require("./Zombie.webp")} alt="Zombie" />
                      </div>
                      <h4 className="info-title">Poisoned Baebee</h4>
                      <hr className="line-success" />
                      <p>
                        As consumers, we're all constantly faced with many
                        choices about what we buy and put in our bodies. But
                        many beauty products are filled with harmful chemicals
                        that can affect our health. And their advertising
                        slogans, designed to appeal to our vanity, are corroding
                        our minds. We're sick of being brainwashed into
                        believing that these products are harmless. It's time to
                        change this. Let's start by choosing brands that use
                        safe, natural ingredients.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
          
          <Container>
          <Row className="justify-content-center">
            <Col lg="12">
              <Row className="row-grid justify-content-center">
                <Col lg="3">
                  <div className="info">
                    <div className="icon icon-primary">
                      <img src={require("./Frida1.webp")} alt="Frida" />
                    </div>
                    <h4 className="info-title">Mask Baebee</h4>
                    <hr className="line-primary" />
                    <p>
                      What used to be a diverse and inclusive global society
                      is slowly disappearing. Everyone seems to be wearing the
                      same mask, conforming to what the mainstream likes, and
                      losing their individuality. This is a dangerous trend;
                      if we don't act now, we will lose the things that make
                      us unique. Let's celebrate our differences and preserve
                      our individuality.
                    </p>
                  </div>
                </Col>
                <Col lg="3">
                  <div className="info">
                    <div className="icon icon-warning">
                      <img src={require("./Clown.webp")} alt="clown" />
                    </div>
                    <h4 className="info-title">Joker Baebee</h4>
                    <hr className="line-warning" />
                    <p>
                      Exaggerated advertisements and deformed aesthetics have
                      created real-life clowns. The innocence and charm that
                      once distinguished these statues have been replaced by
                      pain and fear. Plastic surgery went wrong, and the
                      poisoning of harmful cosmetics has turned the victim
                      into just another joker.
                    </p>
                  </div>
                </Col>
                <img
            alt="..."
            className="shapes circle"
            src={require("assets/img/cercuri.png")}
          />
                <Col lg="3">
                  <div className="info">
                    <div className="icon icon-success">
                      <img src={require("./Fire.webp")} alt="fire" />
                    </div>
                    <h4 className="info-title">Fire Baebee</h4>
                    <hr className="line-success" />
                    <p>
                      Sometimes, it feels like we're wasting our time and
                      energy on fake beauty info, misleading ads, and failed
                      trials. It doesn't help that the flames of anger come up
                      when you get upset. But it's important to remember that
                      we're not alone. We can all support each other as we
                      navigate this crazy beauty industry.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        </div>
  );
}
