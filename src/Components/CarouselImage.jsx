function CarouselImage({slide}) {
  return (
    <div className="carouselItem">
      <img src={slide} alt="Hero slider" className="carouselImage" />
    </div>
  );
}

export default CarouselImage;
