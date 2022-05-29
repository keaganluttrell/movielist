import axios from "axios";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";

async function apiTest() {
  const data = await (await axios.get("/api/movies/popular")).data;
  console.log(data);
}

apiTest();

ReactDOM.render(<h1>Hello From React!</h1>, document.getElementById("root"));