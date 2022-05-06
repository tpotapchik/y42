import "./Home.scss";

import rightBackground from "./../../images/background-right.svg";
import leftBackground from "./../../images/background-left.svg";

import Button from "./../../component/Button/Button";
import PricingPlans from "../../block/pricing-plans/PricingPlans";

function Home() {
  const click = () => {
    console.log("Click!");
  };
  return (
    <>
    <img src={rightBackground} className="right-background"/>

    <div className="container">
      <img src={leftBackground} className="left-background"/>
      <section className="page-introduction">
        <h1 className="page-introduction__title common-title">Choose the plan that fit your needs!</h1>
        <p className="page-introduction__paragraph common-paragraph">
          Lorem ipsum dolor sit amet, dolores antiopam argumentum ea pro, eu iuvaret legendos sententiae ius, pri
          dicit
          oporteat efficiendi an.
        </p>
      </section>
      <PricingPlans />
    </div>

    <div className="container">
      <section className="contact-us">
        <div className="contact-us__description">
          <h3 className="contact-us__title">Grow your early stage startup</h3>
          <p className="contact-us__text">Startups that are less then 2 years old with up to $5M in total funding
            receive $50,000 in credits
            towards the Datos growth plan.</p>
        </div>
        <div className="contact-us__button">
          <Button handleClick={click} type="button" buttonClass="button--primary">Contact Us</Button>
        </div>
      </section>
    </div>

    </>
  );
}

export default Home;
