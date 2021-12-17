import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import PrivacyDescription from "../components/PrivacyDescription/PrivacyDescription";

class PrivacyPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="Privacy"/>
                <PageTop pagetitle="Privacy Policy"/>
                <PrivacyDescription/>
                <Footer/>
            </Fragment>
        );
    }
}

export default PrivacyPage;