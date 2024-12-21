"use client";

import { SearchBar } from "../components/SearchBar";
import { WeatherCard } from "../components/WeatherCard";
import { useState } from "react";
import { useWeatherData } from "./hooks/useWeatherData";

export default function HomePage() {
  const [city, setCity] = useState("");
  const { data, isLoading, error } = useWeatherData(city);

  const handleSearch = (newCity: string) => {
    setCity(newCity);
  };

  return (
    <div className="bg-gradient-to-tl from-blue-600 to-purple-500 min-h-screen text-white flex flex-col justify-center items-center py-12 px-6">
      <h1 className="text-4xl font-extrabold mb-6 text-center">
        Weather Dashboard
      </h1>
      <SearchBar onSearch={handleSearch} />
      {isLoading && <div className="text-xl mt-6">Loading...</div>}
      {error && (
        <div className="text-xl text-red-400 mt-6">
          Error loading weather data
        </div>
      )}
      {data && (
        <WeatherCard
          city={data.city}
          temperature={data.temperature}
          description={data.description}
        />
      )}
    </div>
  );
}
