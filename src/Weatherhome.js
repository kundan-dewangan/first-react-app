
import React, { Component } from "react";
import Weather from "./Weather";
import "./Weatherhome.css";
// import "bootstrap/dist/css/bootstrap.min.css";

const apiKey = "8ddceeacaf8b95fe943c88fc8389dee0";

const Title = () => {
  return (
    <div>
      <h1 className="title-container__title">Weather Finder</h1>
      <h3 className="title-container__subtitle">
        Find out temperature, conditions and more...
      </h3>
    </div>
  );
};

const Form = ({ onWeather }) => {
  return (
    <form  onSubmit={e => onWeather(e)}>
        <div className="row">
            <div className="col-md-4">
            <input className="form-control" type="text" name="city" placeholder="City..." />
            </div>
            <div className="col-md-4">
            <input className="form-control" type="text" name="country" placeholder="Country..." />
            </div>
            <div className="col-md-4">
            <button className="form-button">get Weather</button>
            </div>
        
     
     
      
      </div>
    </form>
  );
};

class Weatherhome extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };
  getWeather = async e => {
    e.preventDefault();
    const city = e.currentTarget.elements.city.value;
    const country = e.currentTarget.elements.country.value;
    if (city && country) {
      try {
        const apiCall = await fetch(
          `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`
        );
        const { main, sys, name, weather } = await apiCall.json();
        this.setState({
          temperature: main.temp,
          city: name,
          country: sys.country,
          humidity: main.humidity,
          description: weather[0].description,
          error: ""
        });
      } catch (ex) {
        console.log(ex.message);
      }
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "please enter a valid values."
      });
    }
  };
  render() {
    return (
          <div className="container mt-5 pt-5">
            <div className="row">
              <div className="col-md-12 title-container">
                <Title />
              
              <div className=" form-container">
                <Form onWeather={this.getWeather} />
                <Weather
                  temperature={this.state.temperature}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  error={this.state.error}
                />
              </div>
              </div>
            </div>
          </div>
    );
  }
}

export default Weatherhome;
