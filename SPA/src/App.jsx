import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.container}>
      <button style={styles.button}>
        {count}
      </button>

      <button
        style={styles.button}
        onClick={() => setCount(count + 1)}
      >
        +
      </button>

      <button
        style={styles.button}
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
    </div>
  );
}

const styles = {
  container: {
  height: "100vh",
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "16px",
}
,
  button: {
    width: "200px",
    padding: "15px",
    fontSize: "18px",
    cursor: "pointer",
  },
};

export default App;
