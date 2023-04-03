import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";

export const MainView = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://my-flix-app.herokuapp.com/movies")
      .then((response) => response.json())
      .then((data) => {
        const moviesFromApi = data.docs.map((doc) => {
          return {
            id: doc.key,
            title: doc.title,
            image: `https://my-flix-app.herokuapp.com/movies`,
            director: doc.director_name?.[0]
          };
        });

        setMovies(moviesFromApi);
      });
  }, []);

if (!user) {
  return <LoginView onLoggedIn={(user) => setUser(user)} />;
}

if (selectedMovie) {
  return (
    <>
      <button
        onClick={() => {
          setUser(null);
        }}
      >
        Logout
      </button>
      <MovieView
        movie= {selectedMovie}
        onBackClick={() => setSelectedMovie(null)}
      />
    </>
  );
}

if (movies.length === 0) {
  return (
    <>
      <button
        onClick={() => {
          setUser(null);
        }}
      >
        Logout
      </button>
      <div>The list is empty!</div>
    </>
  );
}

return (
  <div>
    <button
      onClick={() => {
        setUser(null);
      }}
    >
      Logout
    </button>
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
};
