import React, { Component } from 'react';



class Course extends Component {
    render () {
        console.log("CourseProps",this.props)
        return (
            <div>
                <h1>{this.props.match.params.title}</h1>
                <p>You selected the Course with ID:   </p>
            </div>
        );
    }
}

export default Course;