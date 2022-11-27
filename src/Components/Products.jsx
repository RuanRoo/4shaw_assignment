import Boost from "./Products/Boost";
import WheyProtein from "./Products/WheyProtein";
import Recovery from "./Products/Recovery";
import boostImage from "../Assets/Boost.png";
import wheyProteinImage from "../Assets/WheyProtein.png";
import recoveryImage from "../Assets/Recovery.png";

const BoostPrice = [
  {2: 64.80},
  {3: 60.50},
  {6: 54.00},
  {12: 48.95},
]

const Products = () => {
  return (
    <div className="productsContainer">
      <div className="singleProductContainer">
        <div className="productBlock1">
          <p className="valueText">BEST VALUE</p>
          <div className="shadow1"></div>
        </div>
        <Boost  
          productName="Boost" 
          pricePerMonth="5"
          servingsPerMonth="20"
          imageSource = {boostImage}
          />
      </div>

      <div className="singleProductContainer">
        <div className="productBlock2">
          <p className="valueText">SAVE 5%</p>
          <div className="shadow2"></div>
        </div>
        <WheyProtein 
          productName="WHEY PROTEIN" 
          pricePerMonth="7"
          servingsPerMonth="15"
          imageSource = {wheyProteinImage}
          />
      </div>

      <div className="singleProductContainer">
        <div className="productBlock3">
          <p className="valueText">SAVE 10%</p>
          <div className="shadow3"></div>
        </div>
        <Recovery 
          productName="recovery" 
          pricePerMonth="3"
          servingsPerMonth="20"
          imageSource = {recoveryImage}
          />
      </div>
    </div>
  );
};

export default Products;
