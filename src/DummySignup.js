import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { signup } from './Authentication';
import { Link } from "react-router-dom";
export class DummySignup extends Component {
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

            //First Name
            if(!fields["firstName"]){
            formIsValid = false;
            errors["firstName"] = "First Name Cannot be empty";
            }
            if(typeof fields["firstName"] !== "undefined"){
            if(!fields["firstName"].match(/^[a-zA-Z]+$/)){
                formIsValid = false;
                errors["firstName"] = "First Name Only letters";
            }      	
            }

            //Last Name
            if(!fields["lastName"]){
                formIsValid = false;
                errors["lastName"] = "Last Name Cannot be empty";
            }  
            if(typeof fields["lastName"] !== "undefined"){
                if(!fields["lastName"].match(/^[a-zA-Z]+$/)){
                formIsValid = false;
                errors["lastName"] = "Last Name Only letters";
                }      	
            }
            

            //Password
            if(!fields["password"]){
                formIsValid = false;
                errors["password"] = "Password Cannot be empty";
            }

        //Confirm Password
        if(!fields["cPassword"]){
            formIsValid = false;
            errors["cPassword"] = "Confirm Password Cannot be empty";
        }

        //Confirm Password Same as
        if(fields["cPassword"] != fields["password"]){
            formIsValid = false;
            errors["cPassword"] = "Confirm Password And Confirm Password Cannot be same";
        }

        

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
                var user = {
                    "name":this.state.fields.firstName,
                    "email":this.state.fields.email,
                    "password":this.state.fields.password
                }
                console.log(user)
            // var name = this.state.fields.firstName;
            // var email = this.state.fields.firstName;
            // var password = this.state.fields.firstName;
            // signup({ name, email, password }).then(data =>{
            //     alert("success signup");
            //     console.log(data);
            // }).catch(console.log("Error in signup"));
            signup(user)
            .then(data => {
                if (data.error) {
                  console.log("else: ",data.error);
                  toast.error(data.error);
                } else {
                 console.log("else: ",data);
                 toast.success("New account was created successfully.");
                 this.setState({fields:{},error:{}})
                }
              })
              .catch(console.log("Error in signup"));
          

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
                    <form name="contactform" className="contactform" onSubmit= {this.contactSubmit.bind(this)}>
                            <div class="row">
                                <div className="col-md-12 text-center">
                                    <h1 className=" text-success">Sign Up</h1>
                                    <hr />
                                </div>
                                <div className="col-md-6">
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter First Name" ref="firstName" onChange={this.handleChange.bind(this, "firstName")} value={this.state.fields["firstName"]} />
                                        <span className="text-danger">{this.state.errors["firstName"]}</span>
                                    </Form.Group>
                                </div>
                                <div className="col-md-6">
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Last Name" ref="lastName" onChange={this.handleChange.bind(this, "lastName")} value={this.state.fields["lastName"]} />
                                        <span className="text-danger">{this.state.errors["lastName"]}</span>
                                    </Form.Group>
                                </div>
                                <div className="col-md-12">
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" refs="email"  onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]} />
                                        <span className="text-danger">{this.state.errors["email"]}</span>
                                    </Form.Group>
                                </div>
                                <div className="col-md-6">
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" ref="password" onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]} />
                                        <span className="text-danger">{this.state.errors["password"]}</span>
                                    </Form.Group>
                                </div>
                                <div className="col-md-6">
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Comfirm Password</Form.Label>
                                        <Form.Control type="password" placeholder="Comfirm Password"  ref="cPassword" onChange={this.handleChange.bind(this, "cPassword")} value={this.state.fields["cPassword"]}/>
                                        <span className="text-danger">{this.state.errors["cPassword"]}</span>
                                    </Form.Group>
                                </div>
                                <div className="col-md-12">
                                    <Button variant="primary" type="submit"> Submit </Button>
                                    <a className="float-right pt-3" href="login">Go to Login</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <ToastContainer />
            </div>
        )
    }
}


export default DummySignup
