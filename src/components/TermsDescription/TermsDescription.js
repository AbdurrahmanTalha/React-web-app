import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
class TermsDescription extends Component {


    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col sm={12} lg={12} md={12}>
                            <p className="serviceDescription">
                                Unless you have entered into an express written contract with this website to the contrary, visitors, viewers, subscribers, members, affiliates, or customers have no right to use this information in a commercial or public setting; they have no right to broadcast it, copy it, save it, print it, sell it, or publish any portions of the content of this website. By accessing the contents of this website, you agree to this condition of access and you acknowledge that any unauthorized use is unlawful and may subject you to civil or criminal penalties. Again, Visitor has no rights whatsoever to use the content of, or portions thereof, including its databases, invisible pages, linked pages, underlying code, or other intellectual property the site may contain, for any reason or for any use whatsoever. In recognition of the fact that it may be difficult to quantify the exact damages arising from infringement of this provision, Visitor agrees to compensate the owners of this site with liquidated damages in the amount of U.S. $100,000, or, if it can be calculated, the actual costs and actual damages for breach of this provision, whichever is greater. Visitor warrants that he or she understands that accepting this provision is a condition of accessing this site and that accessing this site constitutes acceptance.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default TermsDescription;