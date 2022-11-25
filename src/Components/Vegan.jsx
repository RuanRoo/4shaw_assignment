import veganImage from "../Assets/Vegan.png";

function Vegan() {
  return (
    <div className="benefit">
      <img src={veganImage} alt="" className="benefitsImage" />
      <div className="benefitContent">
        <div className="benefitsBlock1">
          select routinely supplements are vegan friendly
        </div>
        <div className="benefitsBlock2">
          You put in the hours, you put in the effort and sweat to get where you
          are, now put in the supplements to take you to the next level. Perform
          at a higher level for longer and recover faster with a tailored
          supplement plan.
        </div>
      </div>
    </div>
  );
}

export default Vegan;
