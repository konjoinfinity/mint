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
import { Button, Container, Row, Col, Card, CardBody, CardFooter, CardHeader } from "reactstrap";

export default function Download() {
  return (
    <section className="section section-lg section-coins">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path3.png")}
          />
          <Container>
            <Row>
              <Col md="4">
                <hr className="line-info" />
                <h1>Recent Mints</h1>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src="https://i.seadn.io/gae/_v-_d-QcL3fB2j96ZxUopcsHwr5WljtdzqIBRp42HRqlq-66d0Fp71aUfKPvhrzX6AoCRP6rc_rIEwqWsoZeRr-uqrWRm6zqP7PdonE?auto=format&w=1000"
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Toxic Baebee #1</h4>
                        <hr className="line-primary" />
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button  color="primary" href="https://opensea.io/collection/toxic-baebee-nft-series" tag="a">
                      View Collection
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src="https://i.seadn.io/gae/Yst4YG30_k7JxMUJ0E8g9jvdfEHz19Sxioye0L59VxifdtbWRiipnv062qwaRvlL9_C2fKxA8VmfjtjJ8VIb627wmmHQdr_rBh28dw?auto=format&w=1000"
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">
                          Pixelated Toxic Baebee #1
                        </h4>
                        <hr className="line-info" />
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button  color="info" href="https://opensea.io/collection/toxic-baebee-pixelated" tag="a">
               
                      View Collection
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src="https://i.seadn.io/gae/tWeVD95U92BTHewJVhuJKEKGlPqhPnYreD4sPgRSyqtvLe8Al4WqNQxVVnF-LK3i24DrGg5fhBDsYXlUtV_Oww6t3kVz25bfFuvB?auto=format&w=1000"
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Toxic Baebee #2</h4>
                        <hr className="line-success" />
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button  color="success" href="https://opensea.io/collection/toxic-baebee-nft-series" tag="a">
                      View Collection
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
            <Row style={{marginTop: "10vh"}}>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src="https://i.seadn.io/gae/aPg03dyRekQ37GGxOSUXZMtv4KgTTdP3Gu2Z6WjtjDRbLgtq-RAgU3zJu9QAQeNlLHMoec2gKQqdz7AtosLDSDp3zUVGsLZa7ZPscg?auto=format&w=1000"
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Pixelated Toxic Baebee #2</h4>
                        <hr className="line-warning" />
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button  color="warning" href="https://opensea.io/collection/toxic-baebee-pixelated" tag="a">
                      View Collection
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src="https://i.seadn.io/gae/kZ6lOfyMfWLeV6XF4DaQ5IDot0b1i6brMq6SyoMUmiSWt3a1eNLhdIq8tl1FjF3tvzgOxVbhRT998RvvFijZyUFLAMPyrxQxxHbcSQ?auto=format&w=1000"
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">
                          Toxic Baebee #3
                        </h4>
                        <hr className="line-danger" />
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button  color="danger" href="https://opensea.io/collection/toxic-baebee-nft-series" tag="a">
                      View Collection
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src="https://i.seadn.io/gae/1FB7wzleeD6z_3w6mKO6AFQIdYaAlQVkU0kRlFDNSFAm3MFn2mQjgW6ciPlSVj05nLt9VbPvAiSef-ZClbWsrrbvt6QnWT6WorYm?auto=format&w=1000"
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Pixelated Toxic Baebee #3</h4>
                        <hr className="line-default" />
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button  color="default" href="https://opensea.io/collection/toxic-baebee-pixelated" tag="a">
                      View Collection
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
            <Row style={{marginTop: "10vh"}}>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src="https://i.seadn.io/gae/kelXuNv6UZxFH89glmV2VfV4B0lKHkf-hugpXKGVIWjB1SCfTGmQQRwbPo76jNg7HTmLah0VzsYNUFEdshdzjKDZRlxLiQH_ewSXLQ?auto=format&w=1000"
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Toxic Baebee #4</h4>
                        <hr className="line-info" />
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button  color="info" href="https://opensea.io/collection/toxic-baebee-nft-series" tag="a">
                      View Collection
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src="https://i.seadn.io/gae/JMQvNe-FfHV-brDs5FFdoVSr8QvUkd-P0jRjmR_8JEDOLFHM6Cp017wyw2ESUhC4qVdMIhycp37ZNU1u2KiKDczRHS3XyExDPbqL?auto=format&w=1000"
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">
                          Pixelated Toxic Baebee #4
                        </h4>
                        <hr className="line-success" />
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button  color="success" href="https://opensea.io/collection/toxic-baebee-pixelated" tag="a">
                      View Collection
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src="https://i.seadn.io/gae/05vPImS1AbUoJlERfli5dZP1xNPJM8qf_LZdZbLKh1641WanVeTefRFH7qGh0N6Yc5RokFT0LrgU7fy0znVcjlqDupJuG_GSOAgL8gY?auto=format&w=1000"
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Toxic Baebee #5</h4>
                        <hr className="line-warning" />
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button  color="warning" href="https://opensea.io/collection/toxic-baebee-nft-series" tag="a">
                      View Collection
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
  );
}
