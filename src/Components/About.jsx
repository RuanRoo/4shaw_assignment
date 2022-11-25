import localImage from "../Assets/Local.png";

function About() {
  return (
    <div className="benefit">
      <img src={localImage} alt="" className="benefitsImage" />
      <div className="benefitContent2">
        <div className="benefitsBlock1">we source & blend from australia</div>
        <div className="benefitsBlock2">
          Great Products x Easy Delivery <br />
          <br />
          Our products are designed to help you
          be the best throughout the day - starting with building a sustainable
          routine. Our single serve sachets are delivered through a convenient
          monthly subscription help you keep on track throughout the day.. <br />
          <br />
          We have worked with our team of chemists to develop products that boost
          energy, focus and recovery to promote holistic health, fitness and
          wellness.
        </div>
      </div>
    </div>
  );
}

export default About;
