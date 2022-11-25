import './App.css';
import BannerRotation from './Components/BannerRotation';
import BenefitsComponent from './Components/BenefitsComponent';
import Hero from './Components/Hero';
import orangeBanner from './Assets/orangeBanner.png'
import greenBanner from './Assets/greenBanner.png'
import pinkBanner from './Assets/pinkBanner.png'
import FAQ from './Components/FAQ';
import Footer from './Components/Footer';

function App() {

  const banners = [orangeBanner, greenBanner, pinkBanner];

  return (
    <div className="App">
      <Hero />
      <BenefitsComponent />
      <BannerRotation banners={banners} />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
