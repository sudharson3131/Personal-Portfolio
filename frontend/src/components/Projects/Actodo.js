import Actodo from '../../assets/Actodo.jpg'; 

export default function ActodoCard() {
  return (
    <div className="card w-96 h-[400px] bg-base-100 shadow-xl">
      <figure>
        <img src={Actodo} alt="Actodo App" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          ACTODO
        </h2>
        <p>
          A sleek to-do list web application built with React and styled using Tailwind CSS. 
          Features routing and interactive task management with a modern UI.
        </p>
        <div className="card-actions justify-end flex-wrap gap-2">
          <div className="badge badge-outline">React</div>
          <div className="badge badge-outline">Tailwind CSS</div>
          <div className="badge badge-outline">React Router</div>
          <div className="badge badge-outline">JavaScript</div>
        </div>
      </div>
    </div>
  );
}
