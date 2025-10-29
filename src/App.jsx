import { useState } from "react";
import CityList from "./components/CityList";
import CityForecast from "./components/CityForecast";
import './App.css';

function App() {
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <div>
      <h1>City Weather App</h1>
      {!selectedCity ? (
        <CityList selectCity={setSelectedCity} />
      ) : (
        <CityForecast
          city={selectedCity}
          onBack={() => setSelectedCity(null)}
        />
      )}
    </div>
  );
}

export default App;
