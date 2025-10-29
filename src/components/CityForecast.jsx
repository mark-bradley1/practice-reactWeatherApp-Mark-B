import React, { useEffect, useRef, useState } from "react";
import weatherData from "./weatherData";

export default function CityForecast({ city, onBack }) {
  const [forecast, setForecast] = useState(null);
  const detailsRef = useRef(null);

  useEffect(() => {
    if (city && weatherData[city]) {
      const timer = setTimeout(() => {
        setForecast(weatherData[city]);
      }, 500);

      return () => clearTimeout(timer);
    } else {
      setForecast(null);
    }
  }, [city]);
  const scrollToDetails = () => {
    detailsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  if (!forecast) {
    return <p>No forecast available for this city.</p>;
  }

  return (
    <div>
      <h2>Weather Forecast for {city}</h2>
      <p>
        <strong>Summary:</strong> {forecast.summary}
      </p>

      <button onClick={scrollToDetails}>View Details</button>
      <button onClick={onBack} style={{ marginLeft: "10px" }}>
        Back
      </button>

      <div ref={detailsRef} style={{ marginTop: "20px" }}>
        <h3>Details</h3>
        <p>{forecast.details}</p>
      </div>
    </div>
  );
}
