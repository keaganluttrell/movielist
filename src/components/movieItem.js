import React from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Card from "@mui/material/Card";

export default function MovieItem({ movie, action }) {
  const actionIcon = action.name.includes("add") ? (
    <AddCircleIcon />
  ) : (
    <DeleteIcon />
  );
  const actionColor = action.name.includes("add") ? "primary" : "secondary";
  return (
    <Card
      variant="outlined"
      sx={{
        padding: "10px",
        margin: "5px 0px",
        width: "90%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Typography>{movie.title}</Typography>
      <IconButton
        variant="contained"
        color={actionColor}
        size="small"
        onClick={(e) => action(e, movie)}
      >
        {actionIcon}
      </IconButton>
    </Card>
  );
}
