import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
  // Check if the window is scrolled down
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // Check if the window is scrolled down
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={scrollTop}
        style={{
          display: isScrolled ? "block" : "none",
        }}
        className="bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition duration-300
        
        focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
      >
        <FontAwesomeIcon icon={faArrowUp} size="lg" />
      </button>
    </div>
  );
};

export default ScrollToTop;
