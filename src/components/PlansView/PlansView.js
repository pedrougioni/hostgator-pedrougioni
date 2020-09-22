import React from "react";

import CustomizedRadioGroup from "../CustomizedRadioGroup/CustomizedRadioGroup";
import PlansList from "../PlansList/PlansList";
import "./PlansView.css";

function PlansView() {
  const [paymentFrequency, setPaymentFrequency] = React.useState("triennially");

  const handleChange = (event) => {
    setPaymentFrequency(event.target.value);
  };
  return (
    <div id="pay">
      <CustomizedRadioGroup
        handleChange={handleChange}
        selectedValue={paymentFrequency}
      />
      <PlansList paymentFrequency={paymentFrequency} />
    </div>
  );
}

export default PlansView;
