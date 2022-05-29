import React from "react";

export default function MovieItem({ movie, action }) {
  const actionName = action.name.includes("add") ? "ADD" : "REMOVE";
  return (
    <div>
      <div>{movie.title}</div>
      <button onClick={(e) => action(e, movie)}>{actionName}</button>
    </div>
  );
}
