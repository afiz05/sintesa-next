import React, { Fragment } from "react";
import { Col, Container, Row } from "reactstrap";

import Login from "./LoginContainer";
import { Image } from "react-bootstrap";

const LoginOne = () => {
  return (
    <Fragment>
      <section>
        <Container fluid={true}>
          <Row>
            <Col xl="5" className="b-center bg-size">
              <div
                className="img-fluid for-light"
                style={{
                  backgroundImage: `url('/assets/images/logo/3.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "100vh",
                  display: "block",
                }}
              />
            </Col>
            <Col xl="7 p-0">
              <Login />
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default LoginOne;
