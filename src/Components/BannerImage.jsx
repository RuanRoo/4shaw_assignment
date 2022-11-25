function BannerImage({banner}) {
    return (
      <div className="carouselItem">
        <img src={banner} alt="Hero slider" className="bannerImage" />
      </div>
    );
  }
  
  export default BannerImage;