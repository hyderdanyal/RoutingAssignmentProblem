import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ],
        selectedId:null
    }

    componentDidUpdate(){
        // console.log("state",this.state.selectedId)
    }

    courseSelectedHandler = (title,id) => {
        // const id = event.arget.id;
        this.setState({selectedId:id});
        this.props.history.push({pathname: "/course/" + title });
        console.log(title) 
      }
    render () {
        
        return (
            <div>
                
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return <article className="Course" key={course.id} onClick={()=>this.courseSelectedHandler(course.title)}><Link to="/course">{course.title}</Link></article>;
                        } )
                        
                    }
                </section>
            </div>
        );
    }
}

export default Courses;