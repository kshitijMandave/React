// import { useEffect, useState } from "react";
// import axios from "axios";
// import "./CardContainer.css";
// import Card from "../Card/Card";

// function CardContainer() {
//   const [movies, setMovies] = useState([]);

//   const getMovies = async () => {
//     try {
//       const res = await axios.get("https://jsonfakery.com/movies/paginated");
//       setMovies(res.data.data); // API returns { data: [...] }
//     } catch (error) {
//       console.error("Error fetching movies:", error);
//     }
//   };

//   useEffect(() => {
//     getMovies();
//   }, []);

//   return (
//     <div className="card-container">
//       {movies.map((movie, index) => (
//         <Card key={index} movie={movie} />
//       ))}
//     </div>
//   );
// }

// export default CardContainer;

import React from "react";

function CardContainer() {
  return <div>CardContainer</div>;
}

export default CardContainer;
