import Trip from '../../assets/Trip.png'; 

export default function TripAdvisor() {
  return (
    <div className="card w-96 h-[400px] bg-base-100 shadow-xl">
      <figure>
        <img src={Trip} alt="Trip Advisor Project" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Trip Advisor
          <div className="badge badge-secondary">New</div>
        </h2>
        <p>Responsive and stylish travel listing interface built with Tailwind CSS.</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Travel</div>
          <div className="badge badge-outline">UI Design</div>
        </div>
      </div>
    </div>
  );
}
