import weatherApi from "../data/services/weather";

const { useGetWeatherQuery } = weatherApi;

function Weather(props) {
  const { data, error, isLoading } = useGetWeatherQuery();
  if (error) {
    return <p>Error ... {JSON.stringify(error)}</p>;
  }
  const weater_info = data || [];

  return (
    <>
      <h1>London Weather</h1>
      {weater_info ? JSON.stringify(weater_info) : isLoading}
      <ul style={{ listStyle: "none" }}>
        <li>dt: ({weater_info.dt}) </li>
      </ul>
    </>
  );
}

export default Weather;
