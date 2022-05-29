import React from "react";
import MovieItem from "./movieItem";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function MovieList({ title, movies, action, col }) {
  return (
    <Grid
      item
      xs={6}
      container
      direction="column"
      alignItems="center"
      gridColumn={col}
    >
      <Typography variant="h6" component="div">
        {" "}
        {title}
      </Typography>
      {!movies.length && <Typography>No movies in list...</Typography>}
      {movies.map((movie) => (
        <MovieItem key={title + movie.id} movie={movie} action={action} />
      ))}
    </Grid>
  );
}
