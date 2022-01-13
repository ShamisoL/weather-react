import React from "react";
import "./WeatherDetail.css";

export default function WeatherDetail() {
  return (
    <div className="WeatherDetail">
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              alt="Cloudy"
              id="icon"
              class="float-left"
            />
            <span className="float-left">
              <span className="units">12°C </span>
            </span>
          </div>
        </div>
        <div className="col-md-6">
          <strong>
            <ul>
              <li>
                Humidity: <span id="humidity"></span>12%
              </li>
              <li>
                Wind: <span id="wind"></span>12km/h
              </li>
              <li>
                Fahrenheit: <span id="fahrenheit"></span>12°F
              </li>
            </ul>
          </strong>
        </div>
      </div>
    </div>
  );
}
