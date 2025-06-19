import Nostra from '../../assets/Nostra.jpg';

export default function NostraCard() {
  return (
    <div className="card w-96 h-[400px] bg-base-100 shadow-xl">
      <figure>
        <img src={Nostra} alt="Nostra E-Commerce Website" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Nostra E-Commerce
          <div className="badge badge-secondary">New</div>
        </h2>
        <p>Responsive and stylish e-commerce website built using HTML, CSS, and JavaScript.</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">HTML</div>
          <div className="badge badge-outline">CSS</div>
          <div className="badge badge-outline">JavaScript</div>
        </div>
      </div>
    </div>
  );
}
