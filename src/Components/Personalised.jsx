import personalisedImage from "../Assets/Personalised.png";

function Personalised() {
  return (
    <div className="benefit">
      <img src={personalisedImage} alt="" className="benefitsImage" />
      <div className="benefitContent3">
        <div className="benefitsBlock4">
          mix & match your flavours with each order
        </div>
        <div className="benefitsBlock5">
          Routinely is here to change the game. We want you to select any
          combination of products and flavours to suit your goals and lifestyle
          and made it easy to change it up each month. We don`t make you buy
          3kg`s of products just to get three flavours… <br />
          <br />
          Pick, mix and save, it
          is that easy.
        </div>
      </div>
    </div>
  );
}

export default Personalised;
