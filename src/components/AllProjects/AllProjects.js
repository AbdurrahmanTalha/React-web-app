import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import CardImage from "../../asset/image/1.jpg";
import CardImage1 from "../../asset/image/2.jpg";
import CardImage3 from "../../asset/image/3.jpg";
import CardImage4 from "../../asset/image/01.png";


class AllProjects extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center mt-5">
                    <Row>
                        <Col sm={12} md={6} lg={4} className="p-2">
                            <Card className="projectCard">
                                <Card.Img variant="top" src={CardImage} />
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectCardDes">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={4} className="p-2">
                            <Card className="projectCard">
                                <Card.Img variant="top" src={CardImage1} />
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectCardDes">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={4} className="p-2">
                            <Card className="projectCard">
                                <Card.Img variant="top"  src={CardImage3} />
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectCardDes">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={4} className="p-2">
                            <Card className="projectCard">
                                <Card.Img variant="top" src={CardImage4} />
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectCardDes">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={4} className="p-2">
                            <Card className="projectCard">
                                <Card.Img variant="top" src={CardImage1} />
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectCardDes">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={4} className="p-2">
                            <Card className="projectCard">
                                <Card.Img variant="top" src={CardImage1} />
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectCardDes">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default AllProjects;