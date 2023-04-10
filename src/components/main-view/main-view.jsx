import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import { ProfileView } from "../profile-view/profile-view";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [movies, setMovies] = useState([]);
  const [user, setUser] = useState(storedUser ? JSON.parse(storedUser) : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [viewMovies, setViewMovies] = useState(movies);

  useEffect(() => {
    fetch("https://my-flix-app.herokuapp.com/movies")
      .then((response) => response.json())
      .then((data) => {
        const moviesFromApi = data.docs.map((doc) => {
          return {
            id: movie._id,
            title: movie.Title,
            image: movie.ImagePath,
            description: movie.Description,
            genre: movie.Genre.Name,
            director: movie.Director.Name,
          };
        });
        setMovies(moviesFromApi);
      });
  }, []);

  useEffect(() => {
  if (!token) return;
  fetch("https://my-flix-app.herokuapp.com/movies", {
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((response) => response.json())
    .then((movies) => {
      setMovies(movies);
    });
}, [token]);

return (
  <BrowserRouter>
    <NavigationBar
      user={user}
      onLoggedOut={() => {
      setUser(null);
      setToken (null);
      localStorage.clear();
      }}
      onSearch = {(query) => {
        setViewMovies (movies.filter (movie => movie.title.toLowerCase().includes(query.toLowerCase)));
      }}
    />
      <Row className = "justify-content-md-center">
        <Routes>
          <button
            onClick={() => {
            setUser(null);
            setToken(null);
            localStorage.clear();
            }}
          > 
            Logout
          </button>
        <Route
          path = "/signup"
          element = {
            <>
              {user ? (
                <Navigate to = "/" />
              ) : (
                <Col md = {5}>
                  <SignupView/>
                </Col>
              )}
            </>
          }
        />
        <Route
          path="/profile"
          element={
            !user ? (
              <Navigate to="/login" replace />
            ) : (
              <ProfileView user={user} token={token} movies={movies} onLoggedOut={() => {
                setUser(null);
                setToken(null);
                localStorage.clear();
              }} updateUser={updateUser}/>
            )
          }
         />
        <Route
          path = "/login"
          element = {
            <>
              {user ? (
                <Navigate to = "/" />
              ) : (
                <Col md = {5}>
                  <LoginView onLoggedIn = {(user) => setUser(user)} />
                </Col>
              )}
            </>
          }
        />
        <Route
          path = "/movies/:movieId"
          element = {
            <> 
              {!user ? (
                <Navigate to = "/login" replace />
              ) : movies.length === 0 ? (
                <Col>The list is empty!</Col>
              ) : (
                <Col md = {8}>
                  <MovieView movies = {movies} />
                </Col>
              )}
            </>
          }
        />
        <Route
          path = "/"
          element = {
            <>
              {!user ? (
                <Navigate to = "/login" replace />
              ) : movies.length === 0 ? (
                <Col>The list is empty!</Col>
              ) : (
                <>
                  {movies.map((movie) => (
                    <Col className="mb-4" key={movie.id} md={3}>
                      <MovieCard movie={movie} />
                    </Col>
                  ))}
                </>
              )}
            </>
          }
        />
      </Routes>
    </Row>
  </BrowserRouter>
 );
};
