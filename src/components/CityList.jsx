import React from "react";

export default function CityList({ selectCity }) {
  const cities = ["NewYork", "London", "Tokyo"];

  return (
    <div>
      <h2>Select a City</h2>
      <ul>
        {cities.map((city) => (
          <li key={city} onClick={() => selectCity(city)} className="city-item">
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
}
