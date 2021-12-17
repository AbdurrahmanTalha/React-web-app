import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import {BigPlayButton, Player} from "video-react";
class CourseDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixedPage p-0" >
                    <div className="topPageOverlay">
                        <Container className="topPageContentCourse">
                            <Row>
                                <Col sm={12} md={6} lg={6}>
                                    <h3 className="CourseFullTitle">Full Dynamic Website With Admin Panel</h3>
                                    <h5 className="CourseSubTitle">Total Lecture=30</h5>
                                    <h5 className="CourseSubTitle mt-0">Total Student=30</h5>
                                </Col>

                                <Col sm={12} md={6} lg={6}>
                                    <p className="CourseDes">I am a highly talented, experienced, professional and cooperative software engineer, I am working in programming and web world for more than 4 years .I assure you a wide range of quality IT services. Web development, mobile app development and UI design the major filed i am expert in. Moreover i have teaching passion. I makes video tutorial to share my knowledge. My over all skill makes me a complete software developer, so you can hire me for your projects </p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
                <Container className="mt-5">
                            <Row>
                                <Col sm={12} md={6} lg={6}>
                                    <h1 className="serviceName">Skill You Get</h1>
                                    <ul>
                                        <li className="serviceDescription">Unlimited Dynamic Product Category</li>
                                        <li className="serviceDescription">Unlimited Dynamic Product Category</li>
                                        <li className="serviceDescription">Unlimited Dynamic Product Category</li>
                                        <li className="serviceDescription">Unlimited Dynamic Product Category</li>
                                        <li className="serviceDescription">Unlimited Dynamic Product Category</li>
                                        <li className="serviceDescription">Unlimited Dynamic Product Category</li>
                                        <li className="serviceDescription">Unlimited Dynamic Product Category</li>
                                        <li className="serviceDescription">Unlimited Dynamic Product Category</li>
                                        <li className="serviceDescription">Unlimited Dynamic Product Category</li>
                                        <li className="serviceDescription">Unlimited Dynamic Product Category</li>
                                    </ul>
                                    <Button variant="primary">More Info</Button>
                                </Col>

                                <Col sm={12} md={6} lg={6}>
                                    <Player>
                                        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                                        <BigPlayButton position="center"/>
                                    </Player>
                                </Col>
                            </Row>
                </Container>
            </Fragment>
        );
    }
}

export default CourseDetails;