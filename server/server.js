require("dotenv").config();
const { default: axios } = require("axios");
const express = require("express");
const morgan = require("morgan");
const path = require("path");

const STATIC_FILES = path.resolve(__dirname, "../public");
const TMDB_POPULAR_MOVIES_QUERY = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_TOKEN}&language=en-US&page=1`;

const PORT = process.env.PORT || 3000;
const app = express();

app.use(morgan("tiny"));
app.use(express.static(STATIC_FILES));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log("listening on port", PORT);
});

app.get("/api/movies/popular", async (req, res) => {
  const data = await (await axios.get(TMDB_POPULAR_MOVIES_QUERY)).data;
  console.log(data);
  res.status(200).send(data);
});