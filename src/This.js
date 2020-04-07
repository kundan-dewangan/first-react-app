import React, { Component } from 'react'

class This extends Component {

    clickHandler(){
        console.log("Action Triggered: ",this);
    }

    render() {
        return (
            <div className="container mt-5 pt-5">
                <button type="button" onClick={()=>this.clickHandler()}>Click Me</button>
            </div>
        )
    }
}

export default This
