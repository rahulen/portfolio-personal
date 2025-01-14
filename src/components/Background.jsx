import React, { useEffect, useRef, useState } from "react";

const AnimatedBackground = () => {
  const blobRefs = useRef([]);
  const initialPositions = [
    { x: -4, y: 0 },
    { x: -4, y: 0 },
    { x: 20, y: -8 },
    { x: 20, y: -8 },
  ];

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      setCursorPosition({ x, y });
    };

    // Listen for mousemove event to track cursor position
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    let currentScroll = 0;
    let requestId;

    const handleScroll = () => {
      const newScroll = window.pageYOffset;
      const scrollDelta = newScroll - currentScroll;
      currentScroll = newScroll;

      blobRefs.current.forEach((blob, index) => {
        const initialPos = initialPositions[index];

        // Smooth dynamic movement with scroll
        const xOffset = Math.sin(newScroll / 100 + index * 0.5) * 300;
        const yOffset = Math.cos(newScroll / 100 + index * 0.5) * 80;

        const x = initialPos.x + xOffset;
        const y = initialPos.y + yOffset;

        // Apply transformation based on cursor position and scroll
        const cursorXEffect =
          (cursorPosition.x / window.innerWidth - 0.5) * 200;
        const cursorYEffect =
          (cursorPosition.y / window.innerHeight - 0.5) * 200;

        blob.style.transform = `translate(${x + cursorXEffect}px, ${
          y + cursorYEffect
        }px) scale(${1.2 + Math.sin(newScroll / 300)})`;
        blob.style.transition = "transform 0.1s ease-out"; // faster transition on cursor move
      });

      requestId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(requestId);
    };
  }, [cursorPosition]);

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Blobs */}
      <div className="absolute inset-0">
        <div
          ref={(ref) => (blobRefs.current[0] = ref)}
          className="absolute top-0 -left-4 md:w-96 md:h-96 w-72 h-72 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 md:opacity-40"
        ></div>
        <div
          ref={(ref) => (blobRefs.current[1] = ref)}
          className="absolute top-0 -right-4 md:w-96 md:h-96 w-72 h-72 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 md:opacity-40 hidden sm:block"
        ></div>
        <div
          ref={(ref) => (blobRefs.current[2] = ref)}
          className="absolute -bottom-10 left-[-40%] md:left-20 md:w-96 md:h-96 w-72 h-72 bg-gradient-to-r from-blue-400 to-green-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 md:opacity-40"
        ></div>
        <div
          ref={(ref) => (blobRefs.current[3] = ref)}
          className="absolute -bottom-16 right-20 md:w-96 md:h-96 w-72 h-72 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 md:opacity-40 hidden sm:block"
        ></div>
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1),transparent)] bg-[size:24px_24px] bg-gray-900/90"></div>
    </div>
  );
};

export default AnimatedBackground;
