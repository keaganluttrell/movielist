import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieItem from "./movieItem";
import MovieList from "./movieList";

async function apiTest(stateFn) {
  const data = await (await axios.get("/api/movies/popular")).data;
  stateFn(data.results);
}

export default function App() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [myList, setMyList] = useState([]);

  useEffect(() => {
    apiTest(setPopularMovies);
  }, []);

  function addToList(e, movie) {
    e.preventDefault();
    console.log(movie);
    if (!myList.find((m) => m.id === movie.id)) {
      setMyList([...myList, movie]);
    }
  }

  function removeFromList(e, movie) {
    e.preventDefault();
    setMyList(myList.filter((m) => m.id !== movie.id));
  }

  return (
    <div>
      <MovieList
        key="popular"
        title="Popular Movies"
        movies={popularMovies}
        action={addToList}
      />
      <MovieList
        key="myList"
        title="My List"
        movies={myList}
        action={removeFromList}
      />
    </div>
  );
}
