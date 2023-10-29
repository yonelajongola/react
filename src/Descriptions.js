import React from "react";
import "./Descriptions.css";
import FormattedDate from "./FormattedDate";
import DataIcon from "./Icons";
import DataTemperature from "./DataTemperature";


export default function Description(props) {
  return (
    <div className="WeatherDescription">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
        <div className="col-6">
          <div className="d-flex">
            <div>
              <DataIcon code={props.data.icon} size={52} />
            </div>

            <div>
              <DataTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
