import { useState } from "react";
import { FAQData } from "./FAQData";

const FAQ = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <>
      <div className="faqContainer">
        <div className="faqTitleContainer">
          <h1 className="faqTitle">frequently asked questions</h1>
        </div>
        <div className="faqAccordion">
          {FAQData.map((item, i) => (
            <div className="faqItem">
              <div
                className={
                  selected === i ? "faqQuestion selected" : "faqQuestion"
                }
                onClick={() => toggle(i)}
              >
                <p>{item.question}</p>
                <span>{selected === i ? "x" : "+"}</span>
              </div>
              <div className={selected === i ? "faqAnswer show" : "faqAnswer"}>
                <div className="answer">{item.answer}</div>
                <div className="answer">{item.answer2}</div>
              </div>
              <hr className="line" />
            </div>
          ))}
        </div>

        <div className="contactDiv">
          <p className="contactText">
            Didn`t find the answer you were looking for? Please{" "}
            <span className="contactUs">contact us </span>
            and our team of experts will be happy to help.
          </p>
        </div>
      </div>
    </>
  );
};

export default FAQ;
