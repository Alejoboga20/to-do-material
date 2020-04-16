import React from "react";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const Task = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "5px",
        borderBottom: "solid white 0.5px",
      }}
    >
      {`${props.i + 1}. ${props.task}`}
      <Button
        onClick={(e) => {
          props.handleDeleteTask(props.task);
        }}
        color="secondary"
      >
        <DeleteIcon />
      </Button>
    </div>
  );
};

export default Task;
