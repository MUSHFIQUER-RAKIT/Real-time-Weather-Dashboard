import { WeatherContext } from "../context";
import useWeather from "../hooks/useWeather";

const WeatherProvider = ({ Children }) => {
  const { weatherData, loading, error } = useWeather();
  return (
    <WeatherContext.Provider value={{ weatherData, loading, error }}>
      {Children}
    </WeatherContext.Provider>
  );
};
export default WeatherProvider;
