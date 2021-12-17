import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Footer from "../components/Footer/Footer";
import CourseDetails from "../components/CourseDetails/CourseDetails";

class CourseDetailsPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="Course Details"/>
                    <CourseDetails/>
                <Footer/>
            </Fragment>
        );
    }
}

export default CourseDetailsPage;