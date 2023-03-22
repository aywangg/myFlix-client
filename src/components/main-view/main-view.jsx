import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "12 Strong",
      image:
        "https://www2.pictures.gi.zimbio.com/60th+Annual+DGA+Awards+Press+Room+IbIk9KmbnE_x.jpg",
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
        "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2023%2F01%2F13%2FMichael-Bay-Pigeon-Italy-01-011223.jpg",
      director: "Michael Bay"
    },
    {
      id: 4,
      title: "Letters from Iwo Jima",
      image:
        "https://m.media-https://img.hulu.com/user/v3/artwork/3d1c37d7-6f26-4100-8f19-6e74d0fa6edd?base_image_bucket_name=image_manager&base_image=9b7af329-349d-4822-b603-f920b4b989f0&size=1200x630&format=jpeg&operations=%5B%7B%22gradient_vector%22%3A%22(0%2C0%2C0%2C0.5)%7C(0%2C0%2C0%2C0)%7C(0%2C600)%7C(0%2C240)%22%7D%2C%7B%22overlay%22%3A%7B%22position%22%3A%22SouthEast%7C(30%2C30)%22%2C%22operations%22%3A%5B%7B%22image%22%3A%22image_manager%7Ca82a93a7-1db2-4727-b79d-f1475dde344b%22%7D%2C%7B%22resize%22%3A%22204x204%7Cmax%22%7D%2C%7B%22extent%22%3A%22204x204%22%7D%5D%7D%7D%2C%5D.com/images/M/MV5BMTkxNzI3ODI4Nl5BMl5BanBnXkFtZTgwMjkwMjY4MjE@._V1_.jpg",
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