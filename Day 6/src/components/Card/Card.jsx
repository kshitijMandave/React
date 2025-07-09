import "./Card.css";

function Card({ movie }) {
  return (
    <div className="card">
      <div className="card-wrapper">
        <div className="movie-image-wrapper">
          <img
            src={movie.poster_path} // adjust this key if needed
            alt={movie.original_title}
            height="100%"
            width="100%"
          />
        </div>
        <div className="text-wrapper">
          <h1>{movie.original_title}</h1>
          <h3>{movie.genre}</h3>
          <p>{movie.description}</p>
          <button>Watch Now</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
