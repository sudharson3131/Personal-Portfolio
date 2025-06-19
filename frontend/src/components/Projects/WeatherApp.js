import Weather from '../../assets/Weather.jpg'; 

export default function WeatherCard() {
  return (
    <div className="card w-96 h-[400px] bg-base-100 shadow-xl">
      <figure>
        <img src={Weather} alt="Weather Report App" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Weather Report App
          <div className="badge badge-secondary">New</div>
        </h2>
        <p>
          A clean and responsive weather application built using React and Tailwind CSS.
          It fetches real-time weather data from the OpenWeatherMap API.
        </p>
        <div className="card-actions justify-end flex-wrap gap-2">
          <div className="badge badge-outline">React</div>
          <div className="badge badge-outline">Tailwind CSS</div>
          <div className="badge badge-outline">OpenWeatherMap API</div>
        </div>
      </div>
    </div>
  );
}
