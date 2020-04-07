import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Function from './Function';
class Contact extends Component {

    constructor(props){
        super(props);
    }

    render(){     
        return (
            <div className="container mt-5 pt-5">
                <h1>Hellow Contact Page</h1>
                {/* <span>{this.props.match.params.id}</span> */}

                <div className="text-dark">GO to Server Sign up page  <Link to="signup-backend">Sign up Backend</Link></div>
                <div className="text-dark mt-2">GO to Server Sign in page  <Link to="login-backend">Sign in Backend</Link></div>
                <br/>
                <Function/>
            </div>
        );
    }
}


export default Contact;
