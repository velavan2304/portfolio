import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html as="div" center style={styles.container}>
      <span className="canvas-loader" style={styles.loader}></span>
      <p style={styles.progressText}>{progress.toFixed(2)}%</p>
    </Html>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: "#F1F1F1",
  },
  loader: {
    // Add any additional styles for the loader here
  },
  progressText: {
    fontSize: "14px",
    fontWeight: 800,
    marginTop: "40px",
  },
};

export default CanvasLoader;
