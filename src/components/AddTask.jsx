import { useState } from "react";
import Button from "./ui/Button/Button";

function AddTask({ handleOnClick }) {
  const [task, setTask] = useState("");

  const handleChange = function (e) {
    setTask(e.target.value);
  };
  const handleAddTask = function () {
    if (!task.trim()) return;

    handleOnClick(task.trim());
    setTask("");
  };
  return (
    <div>
      <h4>Add Task</h4>
      {task}
      <input
        type="text"
        name="addtask"
        value={task}
        onChange={handleChange}
        placeholder="Enter task name"
      />
      <Button type="button" onClick={handleAddTask}>
        Add Task
      </Button>
    </div>
  );
}
export default AddTask;
