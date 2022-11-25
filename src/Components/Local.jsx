import localImage from "../Assets/Local.png";

function Local() {
  return (
    <div className="benefit">
      <img src={localImage} alt="" className="benefitsImage" />
      <div className="benefitContent3">
        <div className="benefitsBlock3">we source & blend from australia</div>
        <div className="benefitsBlock2">
          As an Australian owned and operated company we are incredibly proud to
          source everything we can from Australian businesses, this includes our
          sachets, shipping boxes and 90% of our ingredients are sourced from
          Australian domestic suppliers.
        </div>
      </div>
    </div>
  );
}

export default Local;
