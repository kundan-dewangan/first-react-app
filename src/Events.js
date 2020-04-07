import React, { Component } from "react";
import Counter from './Counter';

class MyEvents extends Component {

    constructor(props){
        super(props);
        this.state = {
            counter : 0
        }
        // this.incrementCounter =  this.incrementCounter.bind(this);
        this.incrementCounter =  this.incrementCounter.bind(this);
        this.decrementCounter =  this.decrementCounter.bind(this);
    }

    // clickHandler() {
    //     console.log('click pressed');
    // }

    // incrementCounter(param,ev){
    //     console.log(ev,'ev');
    //     console.log(param,'param');
    //     // this.setState({
    //     //     counter:this.state.counter +1
    //     // })
    // }

    incrementCounter(){
        console.log('increment');    
        this.setState({counter:this.state.counter + 1 }); 
    }
    decrementCounter(){
        console.log('de-crement');
        if(this.state.counter ===0){
            console.log("already reached maximum count");
        } else{
            this.setState({counter:this.state.counter - 1 });     
        }
    }

    render() {
        return (
            <div className="container mt-5 pt-5">
                <h1>Hellow Events</h1>
                {/* <button onClick={this.clickHandler}>Click Me!</button> */}
            {/* <button onClick={this.incrementCounter.bind(this)}>+</button> */}
            {/* <button onClick={this.incrementCounter.bind(this, 'Hello')}>+</button>
            <span>{this.state.counter}</span>
            <button onClick={this.incrementCounter.bind(this, 'Events')}>+</button> */}

            <Counter counter={this.state.counter} increment={this.incrementCounter} decrement={this.decrementCounter} />
            
            
            </div>
        )
    }

}

export default MyEvents;