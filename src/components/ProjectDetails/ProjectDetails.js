import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";

class ProjectDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                        <Row>
                            <Col lg={6} md={6} sm={12}>

                            <img src="https://rabbil.com/ControlPanel/Images/foodbazz.png"/>

                            </Col>

                            <Col lg={6} md={6} sm={12}>
                                <h2 className="serviceName">Foll Bazzar</h2>
                                <p className="serviceDescription">Complete e-commerce app solution for selling fruit online. According to build quality, data loading speed this is the best one </p>
                                <ul>
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


                        </Row>
                </Container>


                
            </Fragment>
        );
    }
}

export default ProjectDetails;