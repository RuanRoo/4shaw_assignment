import boostImage from "../Assets/Boost.png";
import wheyProteinImage from "../Assets/WheyProtein.png";
import recoveryImage from "../Assets/Recovery.png";

const Products = () => {
  return (
    <div className="productsContainer">
      <img src={boostImage} alt="Boost" />
      <img src={wheyProteinImage} alt="Protein" />
      <img src={recoveryImage} alt="Recovery" />
    </div>
  );
};

export default Products;
