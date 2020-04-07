import React, { Component } from "react";

class Forms extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            allUsers: [],
            radioGroup: {
                MeanStack: false,
                MernStack: true,
                LampStack: false
            },
            checkboxGroup: {
                mongoDB: false,
                express: false,
                react: true,
                node: false
            },
            selectedValue: 'Node'
        }
        this.formHander = this.formHander.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
        this.radioHandler = this.radioHandler.bind(this);
        this.checkboxHandler = this.checkboxHandler.bind(this);
        this.selectHandler = this.selectHandler.bind(this);
        this.emailHandler = this.emailHandler.bind(this);
    }

    formHander(event) {
        // console.log(event.target.value,"event",event);
        this.setState({
            username: event.target.value
        })
    }
    clickHandler(event) {
        let currentUser = this.state.allUsers;
        currentUser.push(this.state.username);
        this.setState({
            allUsers: currentUser,
            username: ''
        })
        console.log(this.state.allUsers);
    }
    radioHandler(event) {
        console.log(event.target.value);
        let radioGroup = this.state.radioGroup;
        for (var key in radioGroup) {
            radioGroup[key] = false;
        }
        radioGroup[event.target.value] = event.target.checked;
        this.setState({
            radioGroup: radioGroup
        })
    }


    checkboxHandler(event) {
        //  console.log(event.target.value);
        let checkbox = this.state.checkboxGroup;
        checkbox[event.target.value] = event.target.checked;
        this.setState({
            checkboxGroup: checkbox
        })
    }

    selectHandler(event) {
        this.setState({
            selectedValue: event.target.value
        })
    }
    emailHandler(event) {
        console.log(this.refs.subscriberEmail.value);
    }


    render() {
        // console.log(this.props)
        return (
            <div className="container pt-5 mt-5">
                <h1 className="text-center text-success">My Forms App</h1>
                <input type='text' name='username' value={this.state.username} onChange={this.formHander} />
                <span className="text-info pl-3">You'r typed  : {this.state.username}</span>
                <br  className="mb-3"/>
                Developers Category:
                <br />
                <label>
                    Mean Stack < input type='radio' name='devcategory' value='MeanStack' checked={this.state.radioGroup['MeanStack']} onChange={this.radioHandler} />
                </label>
                <br />
                <label>
                    Mern Stack < input type='radio' name='devcategory' value='MernStack' checked={this.state.radioGroup['MernStack']} onChange={this.radioHandler} />
                </label>
                <br />
                <label>
                    Lamp Stack < input type='radio' name='devcategory' value='LampStack' checked={this.state.radioGroup['LampStack']} onChange={this.radioHandler} />
                </label>
                <br />

                <br className="mb-3"/>
                Technologies:
                <br />
                <label>
                    MongoDB< input type='checkbox' name='tech' value='mongoDB' checked={this.state.checkboxGroup['mongoDB']} onChange={this.checkboxHandler} />
                </label>
                <br />
                <label>
                    Express< input type='checkbox' name='tech' value='express' checked={this.state.checkboxGroup['express']} onChange={this.checkboxHandler} />
                </label>
                <br />
                <label>
                    React < input type='checkbox' name='tech' value='react' checked={this.state.checkboxGroup['react']} onChange={this.checkboxHandler} />
                </label>
                <br />
                <label>
                    Node < input type='checkbox' name='tech' value='node' checked={this.state.checkboxGroup['node']} onChange={this.checkboxHandler} />
                </label>
                <br />

                <br className="mb-3"/>

                <select value={this.state.selectedValue} onChange={this.selectHandler}>
                    <option value='Ruby'>Ruby</option>
                    <option value='Python'>Python</option>
                    <option value='Node'>Node</option>
                </select>
                <br />

                <br className="mb-3" />
                <label>Email: <input type='email' ref='subscriberEmail' /> </label>
                <button onClick={this.emailHandler}>Subscribe</button>

                <br />




                <button onClick={this.clickHandler}>Save</button>
                {/* <p>{this.state.username}</p> */}
            </div>
        )
    }
}

export default Forms;