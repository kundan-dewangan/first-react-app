import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Function from './Function';
import ModalWindow from './ModalWindow';
import { Helmet } from "react-helmet";
import logo from './logo-home.gif';
class Contact extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container mt-5 pt-5">   

            <Helmet>
                    <title>Contact Page</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta name="description" content="this is contact page information about contact" />
                    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                    <link rel="canonical" href="https://first-react-app-853f1.firebaseapp.com" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
                    <meta name="robots" content="index, follow" />
                    <meta name="og_site_name" property="og:site_name" content="first-react-app-853f1.firebaseapp.com/" />
                    <meta name="og_title" property="og:title" content="this is first react app" /> 
                    <meta property="og:type" content="website" />
                    <meta property="og:description" content="this is first react app more about contact page" />
                    <meta name="og_url" property="og:url" content="https://first-react-app-853f1.firebaseapp.com/" />
                    <meta property="og:image" content="%PUBLIC_URL%/logo192.png" />
                </Helmet>

                <h1>Hellow Contact Page</h1>
                <img src={logo} />
                {/* <span>{this.props.match.params.id}</span> */}

                <div className="text-dark">GO to Server Sign up page  <Link to="signup-backend">Sign up Backend</Link></div>
                <div className="text-dark mt-2">GO to Server Sign in page  <Link to="login-backend">Sign in Backend</Link></div>
                <br />
                <Function /><br />
                <ModalWindow header="contact page header"
                    contactClick="contactHandler()"
                />
            </div>
        );
    }
}


export default Contact;
