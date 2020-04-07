import React, { Component } from "react";

class Counter extends Component {
    render(){
        console.log(this.props)
        return(
            <div className="container mt-5 pt-5">
                <h1>My Counter App</h1>
                <button onClick={this.props.increment}>+</button>
                <button onClick={this.props.decrement}>-</button>
                <span>{this.props.counter}</span>
            </div> 
        )
    }
}

export default Counter;