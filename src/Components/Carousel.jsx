import { useState, useEffect } from "react";
import CarouselImage from "./CarouselImage";
import HeroText from "./HeroText";
import HeroText2 from "./HeroText2";

function Carousel({slides}) {

    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide(currentSlide => currentSlide < slides.length - 1 ? currentSlide + 1 : 0)
        }, 4000)

        return () => clearInterval(slideInterval)
    })

  return (
    <div className="carousel">
      <div 
            className="carouselInner"
            style={{transform: `translateX(${-currentSlide * 100}%)`}}
      
      >
        {slides.map((slide, index) => (
            <CarouselImage slide = {slide} key = {index} />
        ))}
      </div>
      <HeroText />
      <HeroText2 />
    </div>
  );
}

export default Carousel;
