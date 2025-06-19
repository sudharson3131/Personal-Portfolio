import Fruit from '../../assets/Fruit.jpg'; 

export default function FruitList() {
  return (
    <div className="card w-96 h-[400px] bg-base-100 shadow-xl">
      <figure>
        <img src={Fruit} alt="Fruit List App" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Fruit List App
          <div className="badge badge-secondary">New</div>
        </h2>
        <p>
          A simple MERN stack app where users can add, edit, and delete fruits from a list.
          Built using React, Express, MongoDB, and styled with Tailwind CSS.
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">React</div>
          <div className="badge badge-outline">Express</div>
          <div className="badge badge-outline">MongoDB</div>
        </div>
      </div>
    </div>
  );
}
