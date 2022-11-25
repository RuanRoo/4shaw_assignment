import Carousel from './Carousel'
import Header from './Header'
import Hero1 from "../Assets/Banner1.png";
import Hero2 from "../Assets/Banner2.png";
import Hero3 from "../Assets/Banner3.png";



function Hero() {

    const slides = [Hero1, Hero2, Hero3];

  return (
    <div className='heroContainer'>
        <Header />
        <Carousel slides={slides} />
        
    </div>
  )
}

export default Hero