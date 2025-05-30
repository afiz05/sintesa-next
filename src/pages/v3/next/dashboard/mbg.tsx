import Breadcrumbs from "CommonElements/Breadcrumbs";
import CommonCardHeading from "CommonElements/CommonCardHeading";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

const Mbg = () => {
  return (
    <div className="page-body">
      <Breadcrumbs
        title="mbg"
        mainTitle="Makan Bergizi Gratis"
        parent="General"
      />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CommonCardHeading
                smallHeading="Makan Bergizi Gratis"
                span="lorem ipsum dolor sit amet, consectetur adipisicing elit"
              />
              <CardBody>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum."
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Mbg;
