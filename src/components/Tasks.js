import React from "react";
import Task from "./Task";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignCenter: true,
  },
}));

const Tasks = (props) => {
  const classes = useStyles();
  return (
    <div align="center" className={classes.root}>
      <div style={{ color: "white", padding: "10px" }}>
        {props.items.length === 0 ? (
          "Add your Tasks"
        ) : (
          <div>
            <h3>Your Tasks</h3>
            <div
              style={{
                color: "white",
                margin: "auto",
                padding: "2px",
                fontSize: "x-large",
                columnSpan: "all",
              }}
            >
              {props.items.map((task, index) => (
                <Task
                  task={task}
                  key={index}
                  i={index}
                  handleDeleteTask={props.handleDeleteTask}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      <div style={{ margin: "auto", padding: "20px" }}>
        <Button
          onClick={props.handleDeleteTasks}
          color="secondary"
          variant="contained"
        >
          Remove All
        </Button>
      </div>
    </div>
  );
};

export default Tasks;
