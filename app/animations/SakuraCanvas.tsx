import { useEffect } from "react";
import sakuraAnimation from "./SakuraAnimation";
import "./Sakura.css";
const SakuraCanvas = ({ openSidebar }: { openSidebar: boolean }) => {
  useEffect(() => {
    sakuraAnimation();
  }, []);
  return (
    <canvas
      id={"sakura-canvas"}
      className={openSidebar ? "sidebar-open" : "sidebar-closed"}
    ></canvas>
  );
};
export default SakuraCanvas;
