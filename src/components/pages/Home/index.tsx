import React, { useState } from "react";
import * as E from "./styled";
import LogoWeather from "../../../assets/previsao.svg"

class Location extends React.Component {
  API_KEY = "6dd4879fa7a562c9d85fab97d4208cde";
  state = {
      lat: undefined,
      lon: undefined,
      city: undefined,
      state: undefined,
      temperatureC: undefined,
      errorMessage: undefined,
  };
  getPosition = () => {
      return new Promise(function (resolve, reject) {
          navigator.geolocation.getCurrentPosition(resolve, reject);
      });
  };
  getWeather = async (lat:number, lon:number) => {
      const api_call = await fetch(`//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6dd4879fa7a562c9d85fab97d4208cde&units=metric`
      );
      const data = await api_call.json();
      this.setState({
      lat: lat,
      lon: lon,
      city: data.name,
      state: data.name,
      temperatureC: Math.round(data.main.temp),
      temperatureF: Math.round(data.main.temp * 1.8 + 32),
      icon: data.weather[0].icon,
    });
  };

  componentDidMount() {
    this.getPosition()
      .then((position:any) => {
        this.getWeather(position.coords.latitude, position.coords.longitude);
      })
      .catch((err) => {
        this.setState({ errorMessage: err.message });
      });
  }
  render() {
    const { city, temperatureC } = this.state;
    if (city) {
      return (
        <>
        <E.Temperature>
            <E.Paragraph>{city} - {city === "Brasília" ? "DF" : "SC"} </E.Paragraph>
          <E.DivWeader>
            <E.IconWeader src={LogoWeather} alt="Logo Compass.Oul"/>
            <E.TemperatureNumber>{temperatureC}º</E.TemperatureNumber>
          </E.DivWeader>
        </E.Temperature>
        </>
      );
    } else {

      this.getWeather(-15.7801, -47.9292)

      return  (
        <E.Temperature>
            <E.Paragraph>{city} -</E.Paragraph>
          <E.DivWeader>
            <E.IconWeader src={LogoWeather} alt="Logo Compass.Oul"/>
            <E.TemperatureNumber>{temperatureC}</E.TemperatureNumber>
          </E.DivWeader>
        </E.Temperature>
      )          
    }
  }
}
export default Location;
