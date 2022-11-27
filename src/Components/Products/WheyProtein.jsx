import { useState } from "react";

const months = [2, 3, 6, 12];

const WheyProtein = (props) => {
  const [selectedMonthOption, setSelectedMonthOption] = useState(2);

  const getTotalPrice = () => {
    return props.pricePerMonth * selectedMonthOption;
  };

  const getTotalServings = () => {
    return props.servingsPerMonth * selectedMonthOption;
  };

  return (
    <div className="whiteBlock">
      <img src={props.imageSource} alt="Boost" />
      <div className="productDetails">
        <p className="productTitle">{props.productName}</p>
        <div className="subscribtionContainer2">
          {months.map((month, i) => (
            <button
              className={
                month === selectedMonthOption ? "button2 selected" : "button2"
              }
              onClick={() => setSelectedMonthOption(month)}
              key={i}
            >
              {month}
            </button>
          ))}
        </div>
        <p className="monthSubscription2">MONTH SUBSCRIPTION</p>
        <div className="price">
          <h1>${getTotalPrice()}</h1>
          <p>PER MONTH</p>
          <hr className="line2" />
        </div>
        <div className="servings">
          <h4>{getTotalServings()} x DAILY SERVINGS</h4>
        </div>
        <div>
          <button className="placeOrder">order</button>
          <p className="cancelButton">cancel anytime</p>
        </div>
      </div>
    </div>
  );
};

export default WheyProtein;
