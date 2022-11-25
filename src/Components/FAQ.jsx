import { useState } from "react";
import { FAQData } from "./FAQData";

const FAQ = () => {
  const [accordion, setAccordion] = useState(-1);

  function toggleAccordion(index) {
    setAccordion(index);
  }

  return (
    <>
      <div className="faqContainer">
        <div className="faqTitleContainer">
          <h1 className="faqTitle">frequently asked questions</h1>
        </div>
        <div className="faqAccordion">
          {FAQData.map((item, index) => (
            <div key={index} onClick={() => toggleAccordion(index)}>
              <div className="accordionHeading">
                <div
                  className={accordion === index ? "active" : ""}
                  id="faqQuestion"
                >
                  {item.question}
                </div>
              </div>
              <div>
                {accordion === index ? (
                  <span className="vertical">-</span>
                ) : (
                  <span className="vertical">+</span>
                )}
              </div>
              <div
                id="answerContainer"
                className={accordion === index ? "active" : "inactive"}
              >
                <div className="answer">{item.answer}</div>
                <div className="answer">{item.answer2}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="contactDiv">
        <p className="contactText">
          Didn`t find the answer you were looking for? Please <span className="contactUs">contact us </span>
          and our team of experts will be happy to help.
          </p>
      </div>
      </div>
      
    </>
  );
};

export default FAQ;
