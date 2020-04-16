import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Tasks from "./components/Tasks";
import { Button } from "@material-ui/core";
import "./styles/App.css";

function App() {
  const [visbile, setVisible] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(undefined);

  let message = undefined;

  const handleVisibility = () => setVisible(!visbile);

  const handleAddTask = (task) => {
    if (!task) {
      message = "Enter valid value to add item";
    } else if (tasks.findIndex((i) => i === task) > -1) {
      message = "This option already exists";
    } else {
      message = undefined;
    }
    setError(message);
    if (message) {
      return;
    }
    setTasks(tasks.concat(task));
    setVisible(!visbile);
  };

  const handleDeleteTask = (taskToRemove) => {
    setTasks(tasks.filter((item) => taskToRemove !== item));
  };

  const handleDeleteTasks = () => {
    setTasks([]);
  };

  return (
    <div className="App">
      <Header />
      {visbile ? (
        <Form
          handleVisibility={handleVisibility}
          handleAddTask={handleAddTask}
          error={error}
        />
      ) : (
        <div>
          <Button
            fullWidth={true}
            variant="contained"
            color="primary"
            onClick={handleVisibility}
          >
            ADD TASK
          </Button>
          <Tasks
            items={tasks}
            handleDeleteTask={handleDeleteTask}
            handleDeleteTasks={handleDeleteTasks}
          />
        </div>
      )}
    </div>
  );
}

export default App;
