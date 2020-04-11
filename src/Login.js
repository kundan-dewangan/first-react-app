import React, { Component } from "react";
import { Button,  Form, FormControl } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
class Login extends Component {

    constructor(props){
        super(props);    
        this.state = {
          fields: {},
          errors: {}
        }
      }
      handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
    
        //Name
        if(!fields["password"]){
          formIsValid = false;
          errors["password"] = "Password Cannot be empty";
        }
    
        // if(typeof fields["name"] !== "undefined"){
        //   if(!fields["name"].match(/^[a-zA-Z]+$/)){
        //     formIsValid = false;
        //     errors["name"] = "Only letters";
        //   }      	
        // }
    
        //Email
        if(!fields["email"]){
          formIsValid = false;
          errors["email"] = "Email Cannot be empty";
        }
    
        if(typeof fields["email"] !== "undefined"){
          let lastAtPos = fields["email"].lastIndexOf('@');
          let lastDotPos = fields["email"].lastIndexOf('.');
    
          if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
            formIsValid = false;
            errors["email"] = "Email is not valid";
          }
        }
    
        this.setState({errors: errors});
        return formIsValid;
      }
    
      contactSubmit(e){
        e.preventDefault();
        if(this.handleValidation()){
                var registerArray = JSON.parse(localStorage.getItem('sigup-user')) || [];
                for(const signupData of registerArray){            
                    if(signupData.email === this.state.fields.email && signupData.password === this.state.fields.password){
                        toast.success("Successfull login !");
                        localStorage.setItem('login-user',JSON.stringify(this.state.fields));
                        this.props.history.push('/');
                    }
                    else{
                        toast.error("User Not Found.");
                    }
                }
        }else{
          // console.log("Form has errors.");
          toast.error("Form has errors.");
        }
    
      }
    
      handleChange(field, e){    		
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
      }
 

    render() {
        return (
            <div className="container mt-5 pt-5">
            <div className="row">
            <div className="col-md-6 offset-md-3 border p-4">
            <Form name="contactform" className="contactform" onSubmit= {this.contactSubmit.bind(this)}>
                <h1 className="text-center text-success">Login</h1>
                <hr/>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" refs="email" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]} />
                    <span className="text-danger">{this.state.errors["email"]}</span>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"  onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]} />
                    <span className="text-danger">{this.state.errors["password"]}</span>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <a className="float-right pt-3" href="signup">Go to Sign up</a>
            </Form>
            </div>
            </div>
            <ToastContainer />
            </div>
        )
    }
}

export default Login;