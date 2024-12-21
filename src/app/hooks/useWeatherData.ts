import { useQuery } from "@tanstack/react-query";
import { fetchWeatherData } from "../services/weatherApi";

export const useWeatherData = (city: string) => {
  return useQuery({
    queryKey: ["weather", city],
    queryFn: () => fetchWeatherData(city),
    enabled: !!city,
  });
};
