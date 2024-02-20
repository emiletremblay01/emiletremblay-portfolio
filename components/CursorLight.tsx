import React, { useState, useEffect } from "react";
const CursorLight = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed -z-10 aspect-square w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white bg-opacity-20 blur-3xl transition-transform duration-100 ease-out"
      style={{ top: position.y, left: position.x }}
    ></div>
  );
};

export default CursorLight;
