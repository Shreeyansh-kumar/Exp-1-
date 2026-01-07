import { useState } from "react";

export default function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleAdd = () => {
    if (!task.trim()) return;

    setTaskList((prev) => [...prev, task]);
    setTask("");
  };

  const handleRemove = (id) => {
    setTaskList((prev) => prev.filter((_, idx) => idx !== id));
  };

  return (
    <div style={layout.container}>
      <h2 style={layout.title}>My Tasks</h2>

      <div style={layout.inputRow}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Write a task..."
          style={layout.inputBox}
        />

        <button onClick={handleAdd} style={layout.actionBtn}>
          Add Task
        </button>
      </div>

      <ul style={layout.taskList}>
        {taskList.map((item, idx) => (
          <li key={idx} style={layout.taskItem}>
            <span>{item}</span>
            <button
              onClick={() => handleRemove(idx)}
              style={layout.removeBtn}
            >
              ✖
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const layout = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "24px",
    fontFamily: "sans-serif",
    backgroundColor: "#f9f9f9",
  },
  title: {
    marginBottom: "16px",
  },
  inputRow: {
    display: "flex",
    gap: "12px",
    width: "100%",
    maxWidth: "520px",
  },
  inputBox: {
    flex: 1,
    padding: "8px",
    fontSize: "14px",
  },
  actionBtn: {
    padding: "8px 14px",
    cursor: "pointer",
  },
  taskList: {
    width: "100%",
    maxWidth: "520px",
    marginTop: "24px",
    padding: 0,
  },
  taskItem: {
    listStyle: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    borderBottom: "1px solid #ddd",
  },
  removeBtn: {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
  },
};
