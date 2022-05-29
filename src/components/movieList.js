import React from "react";
import MovieItem from "./movieItem";

export default function MovieList({ title, movies, action }) {
  return (
    <div>
      <h1>{title}</h1>
      {movies.map((movie) => (
        <MovieItem key={title + movie.id} movie={movie} action={action} />
      ))}
    </div>
  );
}
