import { useCallback, useState } from "react";
import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Carousel1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    "https://i.ibb.co/yYC5N25/image-4.jpg",
    "https://i.ibb.co/YcBB3yZ/image-1.jpg",
    "https://i.ibb.co/N74MjzM/image-2.jpg",
    "https://i.ibb.co/d53Lbp8/image-3.jpg",
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  }, [items.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <CodeBox
        text={"Basic Slide Carousel"}
        stringCode={`import { useCallback, useState } from "react";
  const items = [
    "https://i.ibb.co/yYC5N25/image-4.jpg",
    "https://i.ibb.co/YcBB3yZ/image-1.jpg",
    "https://i.ibb.co/N74MjzM/image-2.jpg",
    "https://i.ibb.co/d53Lbp8/image-3.jpg",
  ];
  const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextSlide = useCallback(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, [items.length]);
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? items.length - 1 : prevIndex - 1
      );
    };
    return (
      <div className="relative">
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 z-50 hover:bg-black/50 p-2 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white bg-opacity-20 text-white"
        aria-label="Previous Slide"
      >
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
      {/* You Can change the aspect ratio relevant to your Screen Size */}
      <div className="overflow-hidden lg:h-screen w-full" style={{ aspectRatio: "16/9" }}>
        <div
          className="flex w-full transition-transform duration-300"
          style={{ transform: \`translateX(-\${currentIndex * 100}%)\` }}
        >
          {items.map((slide, i) => (
            <img
              key={i}
              src={slide}
              alt={\`Slider - \${i + 1}\`}
              className="w-full h-full object-cover"
            />
          ))}
        </div>
      </div>
    </div>
    )
  }
  export default Carousel;
`}
      >
        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-3 z-50 hover:bg-black/50 p-2 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white bg-opacity-20 text-white"
            aria-label="Previous Slide"
          >
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
              className="flex w-full transition-transform duration-300"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {items.map((slide, i) => (
                <img
                  key={i}
                  src={slide}
                  alt={`Slider - ${i + 1}`}
                  className="w-full h-full  bg-contain"
                />
              ))}
            </div>
          </div>
        </div>
      </CodeBox>
    </>
  );
};

export default Carousel1;
