import React, {Component,Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import TermsDescription from "../components/TermsDescription/TermsDescription";
import Footer from "../components/Footer/Footer";

class TermsPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="Terms & Condition"/>
                <PageTop pagetitle="Terms & Condition"/>
                <TermsDescription/>
                <Footer/>
            </Fragment>
        );
    }
}

export default TermsPage;