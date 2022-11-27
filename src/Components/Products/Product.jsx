import { useState } from "react";

const months = [2, 3, 6, 12];


const Product = (props) => {

    const [selectedMonthOption, setSelectedMonthOption] = useState(2) 

    const getTotalPrice = () => {
        
        return (
            props.pricePerMonth * selectedMonthOption
            )
    }

    const getTotalServings = () => {
        return (
            props.servingsPerMonth * selectedMonthOption
        )
    }

  return (
    <div className="whiteBlock">
      <img src={props.imageSource} alt="Boost" />
      <div className="productDetails">
        <p className="productTitle">{props.productName}</p>
        <div className="subscribtionContainer1">
          {months.map((month) => (
            <button
              className={month === selectedMonthOption ? "button1 selected" : "button1"}
              onClick={() => setSelectedMonthOption(month)}
            >
              {month}
            </button>
            
          ))}
        </div>
        <p className="monthSubscription">MONTH SUBSCRIPTION</p>
        <div className="price">
          <h1>$ {getTotalPrice()}</h1>
        </div>
        <div className="servings">
            <h4>{getTotalServings()} PER MONTH</h4>
        </div>
      </div>
    </div>
  )
}

export default Product