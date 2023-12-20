import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerleft">
        <Link to="/">
          <img
            className="header_icon"
            src="https://www.onetwofilms.com/wp-content/uploads/2017/10/MV5BMjEzNDc2NTUwNF5BMl5BcG5nXkFtZTgwODY0MzQ2OTE@._V1_-300x300.png"
            alt="imdb icon"
          />
        </Link>
        <Link to="/movies/popular" style={{ textDecoration: "none" }}>
          <span>Popular</span>
        </Link>
        <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
          {" "}
          <span>Top Rated</span>
        </Link>
        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
          <span>Upcoming</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
