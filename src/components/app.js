import axios from "axios";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { blue, red } from "@mui/material/colors";
import Header from "./header";
import MovieList from "./movieList";

const theme = createTheme({
  palette: {
    primary: blue,
    secondary: {
      main: red[400],
    },
  },
});

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
    if (!myList.find((m) => m.id === movie.id)) {
      setMyList([...myList, movie]);
    }
  }

  function removeFromList(e, movie) {
    e.preventDefault();
    setMyList(myList.filter((m) => m.id !== movie.id));
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header title="Movie Lister" />
      <Grid
        container
        columns={2}
        direction="row"
        spacing={2}
        justifyContent="space-around"
      >
        <MovieList
          key="popular"
          title="Popular Movies"
          movies={popularMovies}
          action={addToList}
          col={1}
        />
        <MovieList
          key="myList"
          title="My List"
          movies={myList}
          action={removeFromList}
          col={2}
        />
      </Grid>
    </ThemeProvider>
  );
}
