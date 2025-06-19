
import Mini from '../../assets/MiniApp.png'; 

export default function MiniReactCard() {
  return (
    <div className="card w-96 h-[400px] bg-base-100 shadow-xl">
      <figure>
        <img src={Mini} alt="Student Favorites App" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Student Favorites
          <div className="badge badge-secondary">New</div>
        </h2>
        <p>A simple app where students can list and manage their favorite items using React and Context API.</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">React</div>
          <div className="badge badge-outline">Context API</div>
        </div>
      </div>
    </div>
  );
}
