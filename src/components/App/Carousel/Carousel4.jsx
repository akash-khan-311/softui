import { useCallback, useEffect, useState } from "react";
import CodeBox from "../../../Shared/CodeBox/CodeBox";
// Import CSS file for styling

const Carousel4 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplayInterval, setAutoplayInterval] = useState(null);

  const items = [
    "https://i.ibb.co/d53Lbp8/image-3.jpg",
    "https://i.ibb.co/N74MjzM/image-2.jpg",
    "https://i.ibb.co/yYC5N25/image-4.jpg",
    "https://i.ibb.co/YcBB3yZ/image-1.jpg",
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
    // Stop autoplay when user interacts with slider
    clearInterval(autoplayInterval);
  }, [items.length, autoplayInterval]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
    // Stop autoplay when user interacts with slider
    clearInterval(autoplayInterval);
  };

  // Start autoplay when component mounts
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    // Save the interval ID to clear it later
    setAutoplayInterval(intervalId);

    // Clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, [items.length]);

  return (
    <>
      <CodeBox
        text={"Basic Slide Carousel with Fade Up"}
        stringCode={`import { useCallback, useState, useEffect } from "react";   
  import "./Carousel4.css"; // Import CSS file for styling
  
  const items = [
    "https://i.ibb.co/d53Lbp8/image-3.jpg",
    "https://i.ibb.co/N74MjzM/image-2.jpg",
    "https://i.ibb.co/yYC5N25/image-4.jpg",
    "https://i.ibb.co/YcBB3yZ/image-1.jpg",
  ];
  
  const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [autoplayInterval, setAutoplayInterval] = useState(null);
  
    const nextSlide = useCallback(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
      // Stop autoplay when user interacts with slider
      clearInterval(autoplayInterval);
    }, [items.length, autoplayInterval]);
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? items.length - 1 : prevIndex - 1
      );
      // Stop autoplay when user interacts with slider
      clearInterval(autoplayInterval);
    };
  
    // Start autoplay when component mounts
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // Change slide every 3 seconds
  
      // Save the interval ID to clear it later
      setAutoplayInterval(intervalId);
  
      // Clear interval when component unmounts
      return () => clearInterval(intervalId);
    }, [items.length]);
  
    return (
      <div className="relative">
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-3 z-50 hover:bg-black/50 p-2 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white bg-opacity-20 text-white"
          aria-label="Previous Slide"
        >
          {/* Previous slide icon */}
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-3 z-50 hover:bg-black/50 p-2 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white bg-opacity-20 text-white"
          aria-label="Next Slide"
        >
          {/* Next slide icon */}
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        <div className="overflow-hidden w-full" style={{ aspectRatio: "23/11" }}>
          <div className="flex w-full transition-opacity duration-1000" style={{ transform: \`translateX(-\${currentIndex * 100}%)\` }}>
            {items.map((slide, i) => (
              <img
                key={i}
                src={slide}
                alt={\`Slider - \${i + 1}\`}
                style={{ transition: "opacity 1s ease-in-out" }}
                className={\`w-full h-full \${i === currentIndex ? "opacity-100" : "opacity-0"}\`}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  export default Carousel;`}
      >
        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-3 z-50 hover:bg-black/50 p-2 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white bg-opacity-20 text-white"
            aria-label="Previous Slide"
          >
            {/* Previous slide icon */}
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-3 z-50 hover:bg-black/50 p-2 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white bg-opacity-20 text-white"
            aria-label="Next Slide"
          >
            {/* Next slide icon */}
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
          <div
            className="overflow-hidden w-full"
            style={{ aspectRatio: "23/11" }}
          >
            <div
              className="flex w-full transition-opacity duration-1000"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {items.map((slide, i) => (
                <img
                  key={i}
                  src={slide}
                  alt={`Slider - ${i + 1}`}
                  style={{ transition: "opacity 0.3s ease-in-out" }}
                  className={`w-full h-full slide ${i === currentIndex ? "opacity-100" : "opacity-0"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </CodeBox>
    </>
  );
};

export default Carousel4;
