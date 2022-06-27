import React, { useState, useEffect } from "react";
import { useUserContext } from "../../context/UserContext";
import Location from "./Location";
import Weather from "./Weather";
const CurrentWeather = () => {
  const { weatherSession } = useUserContext();
  const [loadState, setLoadState] = useState(true);
  console.log(weatherSession);
  useEffect(() => {
    setLoadState(false);
  }, [weatherSession]);

  return (
    <div className="currentWeather">
      {loadState ? (
        <div>FETCHING DATA . . .</div>
      ) : (
        <div>
          <Location location={weatherSession.location} />
          <Weather weather={weatherSession.current} />
        </div>
      )}
    </div>
  );
};

export { CurrentWeather };
