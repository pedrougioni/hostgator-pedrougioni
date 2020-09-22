import React, { useEffect, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import PlanCard from "../PlanCard/PlanCard";

function PlansList(props) {
  const pF = props.paymentFrequency;
  useEffect(
    () =>
      fetch(
        "https://6dd1804f-a914-4c99-a1ed-58adca2bca74.mock.pstmn.io/prices"
      ).then((data) => data.json.then((json) => setPlanList(json))),
    []
  );
  const [planList, setPlanList] = useState([]);
  const [planIndex, setPlanIndex] = useState(0);
  const plan5 = {
    name: "Plano P",
    id: 5,
    cycle: {
      monthly: {
        priceRenew: "24.19",
        priceOrder: "24.19",
        months: 1,
      },
      semiannually: {
        priceRenew: "128.34",
        priceOrder: "128.34",
        months: 6,
      },
      biennially: {
        priceRenew: "393.36",
        priceOrder: "393.36",
        months: 24,
      },
      triennially: {
        priceRenew: "561.13",
        priceOrder: "561.13",
        months: 36,
      },
      quarterly: {
        priceRenew: "67.17",
        priceOrder: "67.17",
        months: 3,
      },
      annually: {
        priceRenew: "220.66",
        priceOrder: "220.66",
        months: 12,
      },
    },
  };
  const plan6 = {
    name: "dsfafasd",
    id: 5,
    cycle: {
      monthly: {
        priceRenew: "24.19",
        priceOrder: "24.19",
        months: 1,
      },
      semiannually: {
        priceRenew: "128.34",
        priceOrder: "128.34",
        months: 6,
      },
      biennially: {
        priceRenew: "393.36",
        priceOrder: "393.36",
        months: 24,
      },
      triennially: {
        priceRenew: "561.13",
        priceOrder: "561.13",
        months: 36,
      },
      quarterly: {
        priceRenew: "67.17",
        priceOrder: "67.17",
        months: 3,
      },
      annually: {
        priceRenew: "220.66",
        priceOrder: "220.66",
        months: 12,
      },
    },
  };
  const plans = [0, 0, 0];
  function incrementIndex() {
    const newIndex = planIndex + 1;
    if (newIndex >= plans.length) {
      setPlanIndex(0);
      return;
    }
    setPlanIndex(newIndex);
    return;
  }
  function decrementIndex() {
    const newIndex = planIndex - 1;
    if (newIndex < 0) {
      setPlanIndex(plans.length - 1);
      return;
    }
    setPlanIndex(newIndex);
    return;
  }
  const list = [
    <PlanCard plan={plan5} />,
    <PlanCard plan={plan6} />,
    <PlanCard plan={plan5} />,
  ];
  const mobile = false;
  return (
    <div style={{ margin: 50 }}>
      {mobile ? (
        <div>
          <SwipeableViews index={planIndex} open={true}>
            {list}
          </SwipeableViews>
          <button onClick={incrementIndex}>+</button>
          <button onClick={decrementIndex}>-</button>
        </div>
      ) : (
        list
      )}
    </div>
  );
}

export default PlansList;
