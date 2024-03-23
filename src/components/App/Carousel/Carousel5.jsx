import { useCallback, useState } from "react";
import CodeBox from "../../../Shared/CodeBox/CodeBox";
const items = [
  {
    image: "https://i.ibb.co/yYC5N25/image-4.jpg",
    heading: "Discover Nature's Beauty",
    text: "Explore stunning landscapes and breathtaking scenery.",
  },
  {
    image: "https://i.ibb.co/YcBB3yZ/image-1.jpg",
    heading: "Experience Adventure",
    text: "Embark on thrilling journeys and exciting escapades.",
  },
  {
    image: "https://i.ibb.co/d53Lbp8/image-3.jpg",
    heading: "Relaxation Redefined",
    text: "Unwind in serene environments and tranquil settings.",
  },
];

const Carousel5 = () => {
  const code = `
    import { useCallback, useState } from "react";

    const items = [
      {
        image: "https://i.ibb.co/yYC5N25/image-4.jpg",
        heading: "Discover Nature's Beauty",
        text: "Explore stunning landscapes and breathtaking scenery.",
      },
      {
        image: "https://i.ibb.co/YcBB3yZ/image-1.jpg",
        heading: "Experience Adventure",
        text: "Embark on thrilling journeys and exciting escapades.",
      },
      {
        image: "https://i.ibb.co/d53Lbp8/image-3.jpg",
        heading: "Relaxation Redefined",
        text: "Unwind in serene environments and tranquil settings.",
      },
    ];


    const Carousel = ()=> {
      const [currentIndex, setCurrentIndex] = useState(0);

      const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
      }, []);

      const prevSlide = useCallback(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
      }, []);
      return (
            <div
            className="w-full h-60 sm:h-96 md:h-[600px] flex items-center justify-center before:absolute before:inset-0 before:bg-black/50 transform duration-[1.5s] ease-linear overflow-hidden"
            style={{
              backgroundImage: \`url(\${items[currentIndex].image})\`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
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
              className="overflow-hidden flex flex-col items-center justify-center lg:h-screen w-full"
              style={{ aspectRatio: "16/9" }}
            >
              <div className="text-white text-center transform duration-1000 ease-linear">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  {items[currentIndex].heading}
                </h1>
                <p className="text-base md:text-lg lg:text-xl">
                  {items[currentIndex].text}
                </p>
              </div>
            </div>
          </div>
       )


  export default Carousel;
  `;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  }, []);

  return (
    <CodeBox text={"Carousel With Content"} stringCode={code}>
      <div
        className="w-full h-60 sm:h-96 md:h-[600px] flex items-center justify-center before:absolute before:inset-0 before:bg-black/50 transform duration-[1.5s] ease-linear overflow-hidden"
        style={{
          backgroundImage: `url(${items[currentIndex].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
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
          className="overflow-hidden flex flex-col items-center justify-center lg:h-screen w-full"
          style={{ aspectRatio: "16/9" }}
        >
          <div className="text-white text-center transform duration-1000 ease-linear">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {items[currentIndex].heading}
            </h1>
            <p className="text-base md:text-lg lg:text-xl">
              {items[currentIndex].text}
            </p>
          </div>
        </div>
      </div>
    </CodeBox>
  );
};

export default Carousel5;
