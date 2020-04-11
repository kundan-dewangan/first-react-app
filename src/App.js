import React, { Component } from 'react';
import logo from './logo-white.png';
import './App.css';
import $ from 'jquery';
import {API} from './backend';
class App extends Component {

  constructor(props) {
    super(props)    
    this.emailHandler = this.emailHandler.bind(this);
}

  componentDidMount() {
    $("#contents").html("this is jquery code");
  }
  inputHandler(props){
    // $("#contents-two").html(this.props.target.value);
    console.log(props);
  }
  emailHandler(event) {
    // console.log(this.refs.subscriberEmail.value);
    $("#contents-two").html(this.refs.subscriberEmail.value);
}

  render() {
    console.log("Port is running: ",process.env.REACT_APP_BACKEND);
    return (
      <div className="App container-fluid pl-0 mt-5">
        <div className="row">
          <div className="col-md-8">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title text-success" id="contents-two">This is React - Bootstrap</h1>
              <div className="text-info" id="contents" />
            </header>
          </div>
          <div className="col-md-4 mt-5">
            <input type="text" className="form-control" placeholder="Enter the show value" ref='subscriberEmail'  onChange={this.emailHandler} />
            {/* <button className="btn btn-info mt-4">Show</button> */}

            <span className="text-center text-warning mt-5 pt-5">Our Backend URL is : {API}</span>
          </div>
        </div>
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }



export default App;
