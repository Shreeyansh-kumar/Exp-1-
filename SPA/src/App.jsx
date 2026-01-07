import { useState } from "react";

export default function App() {
  const [value, setValue] = useState(0);

  const increase = () => {
    setValue(prev => prev + 1);
  };

  const decrease = () => {
    setValue(prev => prev - 1);
  };

  return (
    <div style={ui.wrapper}>
      <div style={ui.display}>{value}</div>

      <div style={ui.controls}>
        <button style={ui.btn} onClick={increase}>
          Increment
        </button>

        <button style={ui.btn} onClick={decrease}>
          Decrement
        </button>
      </div>
    </div>
  );
}

const ui = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
    gap: "20px",
  },
  display: {
    fontSize: "32px",
    fontWeight: "bold",
  },
  controls: {
    display: "flex",
    gap: "12px",
  },
  btn: {
    padding: "12px 24px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

