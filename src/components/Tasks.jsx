import { useRef, useState } from "react";
import AddTask from "./AddTask";
import Button from "./ui/Button/Button";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [editTaskid, setEditTaskid] = useState(null);
  const [editTaskName, setEditTaskName] = useState("");

  const nextId = useRef(1);

  const handleAddTask = (taskname) => {
    const newtask = {
      id: nextId.current++,
      name: taskname,
    };

    setTasks((prev) => [...prev, newtask]);
  };

  const handleDeleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const handleEditTask = ({ id, name }) => {
    setEditTaskid(id);
    setEditTaskName(name);
  };

  const handleCancel = () => {
    setEditTaskid(null);
    setEditTaskName("");
  };

  const handleSaveTask = () => {
    if (!editTaskName.trim()) return;
    setTasks((prev) =>
      prev.map((task) =>
        task.id === editTaskid
          ? {
              ...task,
              name: editTaskName.trim(),
            }
          : task,
      ),
    );
    setEditTaskid(null);
    setEditTaskName("");
  };

  return (
    <div>
      <h1>Task List</h1>
      <AddTask handleOnClick={handleAddTask} />
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.id === editTaskid ? (
                <>
                  <input
                    name="task"
                    value={editTaskName}
                    onChange={(e) => setEditTaskName(e.target.value)}
                  />
                  <Button type="button" onClick={() => handleSaveTask()}>
                    Save
                  </Button>
                  <Button
                    type="button"
                    style={{ backgroundColor: "red" }}
                    onClick={handleCancel}
                  >
                    Cancel
                  </Button>
                </>
              ) : (
                <>
                  {task.id} - {task.name}{" "}
                  <Button type="button" onClick={() => handleEditTask(task)}>
                    Edit
                  </Button>
                  <Button
                    type="button"
                    style={{ backgroundColor: "red" }}
                    onClick={() => handleDeleteTask(task.id)}
                  >
                    Delete
                  </Button>
                </>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks!</p>
      )}
    </div>
  );
}

export default Tasks;
