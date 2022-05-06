import { ReactComponent as TickIcon } from "./../../images/tick.svg";

function PricingDescription({text}) {
  return (
    <li className="item">
      <TickIcon />
      <span>{text}</span>
    </li>
  )
}

export default PricingDescription;
