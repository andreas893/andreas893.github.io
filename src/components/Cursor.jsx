import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../cursor.css";

const HOT_SELECTOR = ".project-image, .image-wrapper";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);
  const location = useLocation();

  // track mouse
  useEffect(() => {
    const move = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // delegate hover detection to the document (works for late-loaded nodes)
  useEffect(() => {
    let inside = false; // track whether we're currently over a hot target

    const isHot = (el) => !!el && el.closest?.(HOT_SELECTOR);

    const onOver = (e) => {
      if (!inside && isHot(e.target)) {
        inside = true;
        setActive(true);
      }
    };

    const onOut = (e) => {
      // mouseout gives e.relatedTarget (what we're going to)
      const toEl = e.relatedTarget;
      if (inside && !isHot(toEl)) {
        inside = false;
        setActive(false);
      }
    };

    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  // reset on route change (e.g., when entering the details page)
  useEffect(() => {
    setActive(false);
    document.body.style.cursor = "auto";
  }, [location]);

  // hide native cursor only when custom cursor is active
  useEffect(() => {
    document.body.style.cursor = active ? "none" : "auto";
  }, [active]);

  return (
    <div
      className={`custom-cursor ${active ? "active" : ""}`}
      style={{ left: position.x, top: position.y }}
    >
      SE PROJEKT
    </div>
  );
}
