import React from "react";
import { Button, TextField } from "@material-ui/core";

const Form = (props) => {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const task = event.target.elements.task.value.trim();
    props.handleAddTask(task);
    event.target.elements.task.value = "";
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit} style={{ padding: "5px" }}>
        <TextField type="text" name="task" style={{ padding: "5px" }} />
        <div>
          <Button type="submit" variant="contained" color="primary">
            ADD TASK
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={props.handleVisibility}
          >
            CANCEL
          </Button>
        </div>
        {props.error && <div>{props.error}</div>}
      </form>
    </div>
  );
};

export default Form;
