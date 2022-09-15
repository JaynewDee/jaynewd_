import React, { useEffect, useState } from "react";
import { useUserContext } from "../context/UserContext";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { getWhole } from "../utils/weatherAPI/weather";
import Clock from "./Clock";
const Controls = ({ setDisplay }) => {
  const { user, storeWeather, weatherSession } = useUserContext();
  const [local, setLocal] = useState();

  useEffect(() => {
    setLocal(weatherSession);
  }, [weatherSession]);

  async function getWeather() {
    const weatherObj = await getWhole();
    storeWeather(weatherObj);
  }

  return (
    <div className="controlBox">
      <p>
        OPERATOR: <span>{user.lastName}</span>
      </p>
      <p>
        <Clock />
      </p>
      <p>
        Weather:{" "}
        <button
          onClick={() => {
            getWeather();
          }}
          className="weather-btn"
        >
          {"->"} <TiWeatherPartlySunny /> {"<-"}
        </button>
      </p>
    </div>
  );
};

export default Controls;
