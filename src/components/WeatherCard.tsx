import React from "react";

type WeatherCardProps = {
  city: string;
  temperature: number;
  description: string;
};

export const WeatherCard: React.FC<WeatherCardProps> = ({
  city,
  temperature,
  description,
}) => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-xl rounded-2xl p-6 w-full sm:w-80 mx-auto mt-8">
      <h2 className="text-3xl font-semibold">{city}</h2>
      <p className="text-6xl font-bold my-4">{temperature}°C</p>
      <p className="text-xl">{description}</p>
    </div>
  );
};
