import { useEffect } from "react";
import sakuraAnimation from "./SakuraAnimation";
import "./Sakura.css";
const SakuraCanvas = () => {
  useEffect(() => {
    sakuraAnimation();
  }, []);
  return <canvas id={"sakura-canvas"}></canvas>;
};
export default SakuraCanvas;
