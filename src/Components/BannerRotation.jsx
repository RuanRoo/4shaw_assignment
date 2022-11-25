import { useState, useEffect } from "react";
import BannerImage from "./BannerImage";

function BannerRotation({banners}) {

    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide(currentSlide => currentSlide < banners.length - 1 ? currentSlide + 1 : 0)
        }, 4000)

        return () => clearInterval(slideInterval)
    })

  return (
    <div className="carousel">
      <div 
            className="carouselInner"
            style={{transform: `translateX(${-currentSlide * 100}%)`}}
      
      >
        {banners.map((banner, index) => (
            <BannerImage banner = {banner} key = {index} />
        ))}
      </div>
    </div>
  );
}

export default BannerRotation;