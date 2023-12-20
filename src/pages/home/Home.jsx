import { useEffect, useState } from "react";
import "./Home.css";

// ! Below it is used for sliding the movies page
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import MovieList from "../../components/movieList/MovieList";

const Home = () => {
  // ! Storing the below "Home Page" into useState hook
  const [popularMovies, setPopularMovies] = useState([]);

  // ! Calling the api's of "Home Page"  using useEffect hook
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results));
  }, []);

  return (
    <>
      <div className="poster">
        <Carousel
          // ! Below we are using the properties of carousel that are used for sliding the movie pages
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {popularMovies.map((movie) => (
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/movie/${movie.id}`}
            >
              <div className="posterImage">
                <img
                  src={` https://image.tmdb.org/t/p/original${
                    movie && movie.backdrop_path
                  }`}
                  alt="popular movies images"
                />
              </div>
              <div className="posterImage__overlay">
                <div className="posterImage__title">
                  {movie ? movie.original_title : ""}
                </div>
                <div className="posterImage__runtime">
                  {movie ? movie.release_date : ""}
                  <span className="posterImage__rating">
                    {movie ? movie.vote_average : ""}
                    {/* Below we have taken from font awesome site to display the stars */}
                    <i className="fas fa-star" />
                    {""}
                  </span>
                </div>
                <div className="posterImage_description">
                  {movie ? movie.overview : ""}
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
        {/* Below we have imported "POPULAR MOVIES" cards so that if the user scrolls on the home page then the popular movies list will be visible */}

        <MovieList />
      </div>
    </>
  );
};

export default Home;
