import React from "react";

const Weather = ({ weather }) => {
  const {
    humidity,
    precip_in,
    temp_f,
    uv,
    wind_degree,
    wind_dir,
    wind_mph,
    condition,
  } = weather;
  return (
    <div className="weather-report">
      <h4 className="spaced-row">
        Temperature:{" "}
        <span>
          {temp_f}
          {"\u00B0 F"}
        </span>
      </h4>
      <p className="spaced-row">
        UV INDEX: <span>{uv}</span>
      </p>
      <p className="spaced-row">
        HUMIDITY: <span>{humidity}</span>
      </p>
      <p className="spaced-row">
        PRECIPITATION: <span>{precip_in} inches</span>
      </p>
      <p className="spaced-row">
        WIND:{" "}
        <span>
          @{wind_mph}mph from {wind_degree}
          {"\u00B0"} {wind_dir}
        </span>
      </p>
    </div>
  );
};

export default Weather;

/* condition: {
  icon: string,
  text: string
  } 
  humidity: number,
  precip_in: number,
  temp_f: number,
  uv: number,
  wind_degree: number,
  wind_dir: string,
  wind_mph: number

*/
