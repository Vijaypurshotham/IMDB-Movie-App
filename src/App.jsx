import "./index.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import MovieList from "./components/movieList/MovieList";
import Movie from "./pages/movieDetails/Movie";

const App = () => {
  return (
    <div className="App">
      <Router>
        {/* Importing header component */}
        <Header />

        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movie/:id" element={<Movie />}></Route>
          {/* Below we have imported MovieList component */}

          <Route path="movies/:type" element={<MovieList />}></Route>
          <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
