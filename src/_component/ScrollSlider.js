"use client"

import { useEffect, useState } from "react";
import "../styles/ScrollSlider.css"; 

export default function ScrollSlider() {
  const slides = [
    {
      img: "/images/Ameer-Ahammed-3.png",
      title: "Lifelong Learning",
      subtitle: "Build Your Professional Network",
      text: "Build a trusted network of like-minded professionals who not only care about your success but are eager to help you achieve it. ",
      quote: " I used to struggle to get trusted logistic partners in other countries. Since I joined BNI, I get credible and trusted partners in just an hour after asking.",
      author: "Ernest Buabeng",
      company: "Clearing & Forwarding | Ghana",
    },
    {
      img: "/images/New-Project1.png",
      title: "Lifelong Learning",
      subtitle: "Grow Your Business Exponentially",
      text: "Our global presence together with a proven networking system results in unmatched business opportunities. Exchange qualified referrals and watch your business grow. ",
      quote: "I’ve achieved a great ROI with $736,000 in referrals and $110,000 in return.",
      author: "Paul Tommey",
      company: "Realtor-Property Manager | USA",
    },
    {
      img: "/images/New-Project.png",
      title: "Lifelong Learning",
      subtitle: "Become a Master Connector",
      text: "Grow to the Master Connector level, where you actively help your BNI Chapter to thrive and increase revenue for each Member.",
      quote: "I used to struggle to get trusted logistic partners in other countries. Since I joined BNI, I get credible and trusted partners in just an hour after asking.",
      author: "Ernest Buabeng",
      company: "Clearing & Forwarding | Ghana",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollCount, setScrollCount] = useState(0);
  const scrollThreshold = 4;
  const [scrollDirection, setScrollDirection] = useState(null);
  const [isThrottled, setIsThrottled] = useState(false);

  useEffect(() => {
    const handleWheel = (e) => {
      const delta = e.deltaY;
      const direction = delta > 0 ? "down" : "up";

      if (scrollDirection !== direction) {
        setScrollCount(0);
        setScrollDirection(direction);
      }

      setScrollCount((prev) => {
        const newCount = prev + 1;

        if (newCount >= scrollThreshold && !isThrottled) {
          if (direction === "down" && currentIndex < slides.length - 1) {
            setCurrentIndex((prev) => prev + 1);
          } else if (direction === "up" && currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
          }
          setIsThrottled(true);
          setTimeout(() => setIsThrottled(false), 700);
          return 0;
        }
        return newCount;
      });

      if (
        (direction === "down" && currentIndex === slides.length - 1) ||
        (direction === "up" && currentIndex === 0)
      ) {
        return; // allow page to scroll
      }

      e.preventDefault();
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [scrollDirection, isThrottled, currentIndex, slides.length]);

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full flex items-center justify-center transition-opacity duration-1000 ${
            currentIndex === index ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          style={{
            backgroundImage: `url('/images/scroll-banner.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-opacity-50"></div>
          <div className="mx-auto max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl flex h-[70%]">
          {/* <div className="mx-auto max-w-7xl h-[70%] flex" style={{ padding: "42px" }}> */}
            <div className="grid lg:grid-cols-2 sm:grid-cols-2 gap-6">
              {/* Left Column */}
              <div>
                <h6 className="title">{slide.title}</h6>
                <h2 className="subtitle">{slide.subtitle}</h2>
                <p className="text">{slide.text}</p>
              </div>

              {/* Right Column */}
              <div className="flex items-end lg:p-4">
                <div className="flex w-full bg-opacity-80 p-4 right-grow rounded-3xl">
                  <div className="w-1/3">
                    <img
                      src={slide.img}
                      alt="Profile"
                      className="w-full h-auto rounded-full"
                    />
                  </div>
                  <div className="w-2/3 flex flex-col justify-end pl-4">
                    <p className="quote">{slide.quote}</p>
                    <p className="author m-0">{slide.author}</p>
                    <p className="company m-0">{slide.company}</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
