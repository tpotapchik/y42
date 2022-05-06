import "./PricingPlans.scss";

import PricingPlanItem from "./PricingPlanItem";

const PricingPlansItems = [
  {
    id: 1,
    title: "Developer",
    pretext: "starting at",
    isPrice: true,
    price: "49",
    currency: "€",
    descr: "per month",
    btn: "Get Plan",
    link: "See All",
    color: "orange"
  },
  {
    id: 2,
    isMiddle: true,
    title: "Business",
    pretext: "starting at",
    isPrice: true,
    price: "879",
    currency: "€",
    descr: "per month",
    btn: "Get Plan",
    link: "See All",
    color: "pink"
  },
  {
    id: 3,
    title: "Enterprise",
    pretext: "For Data Driven Companies",
    isPrice: false,
    price: "On Request",
    currency: "",
    btn: "Get Plan",
    link: "See All",
    color: "blue"
  }
];

function PricingPlans() {
  return (
    <section className="pricing-plans">
      {
        PricingPlansItems.map(item => {
          return (
            <PricingPlanItem
              isMiddle={item.isMiddle}
              key={item.id}
              title={item.title}
              pretext={item.pretext}
              isPrice={item.isPrice}
              price={item.price}
              currency={item.currency}
              descr={item.descr}
              btn={item.btn}
              link={item.link}
              color={item.color}
            />
          )
        })
      }
    </section>
  )
}

export default PricingPlans;
