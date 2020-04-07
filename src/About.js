import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {

    opetation() {
        // console.log("dfasdfa");
        this.props.history.push('/');
    }
    routeToContact() {
        this.props.history.push('/contact');
    }
    render() {
        return (
            <div className="container mt-5 pt-5">
                <h1>Hellow About us</h1>
                <button className="btn btn-primary mr-5" onClick={this.opetation.bind(this)}>Go to Home Page</button>
                <button className="btn btn-info" onClick={this.routeToContact.bind(this)}>Contact</button>
                <ul className="m-5 p-5 mx-auto">
                    <li><Link to='/param/1233'>1233</Link></li>
                    <li><Link to='/param/1244'>1244</Link></li>
                    <li><Link to='/param/1255'>1255</Link></li>
                </ul>

            </div>
        );
    }
}

export default About;
