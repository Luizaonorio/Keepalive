import React, { useState } from "react";
import  "./styled";
import LogoWeather from "../../assets/previsao.svg"
import { DivWeader, IconWeader, Paragraph, Temperature, TemperatureNumber } from "./styled";

export class Location extends React.Component {
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
      state: data.sys.country,
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
    const { city, state, temperatureC } = this.state;
    if (city) {
      return (
        <>
        <Temperature>
            <Paragraph>{city} - {state} </Paragraph>
          <DivWeader>
            <IconWeader src={LogoWeather} alt="Logo Compass.Oul"/>
            <TemperatureNumber>{temperatureC}º</TemperatureNumber>
          </DivWeader>
        </Temperature>
        </>
      );
    } else {

      this.getWeather(-15.7801, -47.9292)

      return  (
        <Temperature>
            <Paragraph>{city} - </Paragraph>
          <DivWeader>
            <IconWeader src={LogoWeather} alt="Logo Compass.Oul"/>
            <TemperatureNumber>{temperatureC}</TemperatureNumber>
          </DivWeader>
        </Temperature>
      )          
    }
  }
}
export default Location;
