import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "12 Strong",
      image:
        "https://m.media-amazon.com/images/M/MV5BNTEzMjk3NzkxMV5BMl5BanBnXkFtZTgwNjY2NDczNDM@._V1_.jpg",
      director: "Nicolai Fuglsig"
    },
    {
      id: 2,
      title: "American Sniper",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTkxNzI3ODI4Nl5BMl5BanBnXkFtZTgwMjkwMjY4MjE@._V1_.jpg",
      director: "Clint Eastwood"
    },
    {
      id: 3,
      title: "13 Hours",
      image:
        "https://m.media-amazon.com/images/M/MV5BYjY0OWVjMGQtNTIzZi00OGU5LWI4N2EtMGU0YzQ4OWM4ZmVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
      director: "Michael Bay"
    },
    {
      id: 4,
      title: "Letters from Iwo Jima",
      image:
        "https://upload.wikimedia.org/wikipedia/en/8/87/Letters_from_Iwo_Jima.jpg",
      director: "Clint Eastwood"
    },
    {
      id: 5,
      title: "Hacksaw Ridge",
      image:
        "https://img3.hulu.com/user/v3/artwork/c966e511-edbd-4f3b-929f-70c2fdb052f2?base_image_bucket_name=image_manager&base_image=ef02dd84-4c3c-4976-8bd6-0466b87b70cf&region=US&format=jpeg&size=952x536",
      director: "Mel Gibson"
    }
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }
  return (
    <div>
      {movies.map((movie) => (
          <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
}