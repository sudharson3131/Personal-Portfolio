import Udemy from '../../assets/Udemy.jpg';

export default function UdemyCard() {
  return (
    <div className="card w-96 h-[400px] bg-base-100 shadow-xl">
      <figure>
        <img src={Udemy} alt="Udemy Clone Project" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Udemy Clone
          <div className="badge badge-secondary">New</div>
        </h2>
        <p>Udemy clone project built using React and deployed on Vercel. Features responsive design and interactive UI.</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">React</div>
          <div className="badge badge-outline">Tailwind</div>
          <div className="badge badge-outline">Vercel</div>
        </div>
      </div>
    </div>
  );
}
