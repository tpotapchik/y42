import { Link } from "react-router-dom";
import Button from "./../../component/Button/Button";
import PricingDescription from "./PricingDescription";

const PricingDescriptionItems = [
  {
    id: 1,
    text: "Automatic Product Tours",
  },
  {
    id: 2,
    text: "GDPR (Highest Level Data Security)"
  },
  {
    id: 3,
    text: "Developer support"
  },
  {
    id: 4,
    text: "Unlimited Datasources up to 1GB"
  }
];

function PricingPlanItem(props) {
  const {isMiddle, title, pretext, price, currency, descr, btn, link, color, isPrice}=props;
  const click=()=>{
    console.log("Click!");
  };
  return (
    <div className={`pricing-plan__item-wrap ${color ? color : ""}`}>
      <div className={`pricing-plan__item${isMiddle ? " pricing-plan__item--middle" : ""}`}>
        <h2 className="pricing-plan__item-title">{title}</h2>
        <div className="pricing-plan__item-value">
          <div className="item-text">{pretext}</div>
          <div className={`item-price${!isPrice ? " item-price--reduced" : ""}`}>
            <div className="item-price__inner">
              {price}<sup className="item-price__sup">{currency}</sup>
            </div>
          </div>
          <div className="item-descr">{descr}</div>
        </div>
        <Button handleClick={click} type="button" buttonClass="button--primary">{btn}</Button>
        <ul className="pricing-plan__item-description">
          {
            PricingDescriptionItems.map(item => {
              return (
                <PricingDescription
                  key={item.id}
                  text={item.text}
                />
              )
            })
          }
        </ul>

        <div className="pricing-plan__item-link">
          <Link to="/">
            {link}
          </Link>
        </div>
      </div>
    </div>
  )
}
export default PricingPlanItem;
