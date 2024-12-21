"use server";

import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeatherData = async (city: string) => {
  const response = await axios.get(BASE_URL, {
    params: {
      q: city,
      appid: API_KEY,
      units: "metric",
    },
  });
  return {
    city: response.data.name,
    temperature: response.data.main.temp,
    description: response.data.weather[0].description,
  };
};
