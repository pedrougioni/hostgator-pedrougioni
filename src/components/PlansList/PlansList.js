import React, { useEffect, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import PlanCard from "../PlanCard/PlanCard";
import Loader from "../Loader/Loader";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import "./PlansList.css";

function PlansList(props) {
  const [plans, setPlans] = useState([]);
  const [planIndex, setPlanIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const paymentFrequency = props.paymentFrequency;
  const list = [];

  useEffect(() => {
    function handleResize() {
      // Set window width/height to state
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    fetchData();
  }, []);

  function fetchData() {
    fetch(
      "https://6dd1804f-a914-4c99-a1ed-58adca2bca74.mock.pstmn.io/prices"
    ).then((response) => response.json().then((json) => getMainPlans(json)));

    function getMainPlans(json) {
      const entries = Object.entries(json.shared.products);
      const plansList = [];
      entries.forEach((entry) => {
        const plan = entry[1];
        switch (plan.name) {
          case "Plano P":
            plan.details = { storage: 100, siteNumbers: "Para 1 site" };
            plan.img = "planP";
            plansList.push({ key: entry[0], plan: plan });
            break;
          case "Plano M":
            plan.details = { storage: 100, siteNumbers: "Sites Ilimitados" };
            plan.img = "planM";
            plan.recomended = true;
            plansList.push({ key: entry[0], plan: plan });
            break;
          case "Plano Turbo":
            plan.details = { storage: 150, siteNumbers: "Sites Ilimitados" };
            plan.img = "planTurbo";
            plansList.push({ key: entry[0], plan: plan });
            break;
          default:
        }
      });
      setPlans(plansList);
      const middleIndex = Math.floor(plansList.length / 2);
      setPlanIndex(middleIndex);
    }

    function getFullData(json) {
      const entries = Object.entries(json.shared.products);
      const plansList = [];
      entries.forEach((entry) => {
        plansList.push({ key: entry[0], plan: entry[1] });
      });
      setPlans(plansList);
      const middleIndex = Math.floor(entries.length / 2);
      setPlanIndex(middleIndex);
    }
  }

  function incrementIndex() {
    const newIndex = planIndex + 1;
    if (newIndex >= list.length) {
      setPlanIndex(0);
      return;
    }
    setPlanIndex(newIndex);
    return;
  }
  function decrementIndex() {
    const newIndex = planIndex - 1;
    if (newIndex < 0) {
      setPlanIndex(list.length - 1);
      return;
    }
    setPlanIndex(newIndex);
    return;
  }

  if (plans.length === 0) {
    list.length = 0;
    list.push(
      <div key="loading">
        <Loader />
      </div>
    );
  } else {
    list.length = 0;
    plans.forEach((row) =>
      list.push(
        <PlanCard
          plan={row.plan}
          key={row.key}
          paymentFrequency={paymentFrequency}
        />
      )
    );
  }

  function getContainterStyleForCarousel() {
    if (windowWidth > 1025) {
      return { width: 350, marginLeft: "35%" };
    } else if (windowWidth > 450) {
      return { width: 350, marginLeft: "30%" };
    } else {
      return { width: "100%", marginLeft: 0 };
    }
  }

  const mobile = windowWidth < 1183;
  return (
    <div className={"plansListContainer"}>
      {mobile ? (
        <div className="carouselContainer">
          <SwipeableViews
            containerStyle={getContainterStyleForCarousel()}
            index={planIndex}
            open={true}
          >
            {list}
          </SwipeableViews>
          <div className="carouselButton left">
            <IconButton
              aria-label="down"
              disableRipple={true}
              size={"medium"}
              style={{ backgroundColor: "transparent" }}
              onClick={decrementIndex}
            >
              <ChevronLeftIcon
                fontSize="inherit"
                style={{ color: "#ffffff" }}
              />
            </IconButton>
          </div>
          <div className="carouselButton right">
            <IconButton
              aria-label="down"
              disableRipple={true}
              size="medium"
              style={{ backgroundColor: "transparent" }}
              onClick={incrementIndex}
            >
              <ChevronRightIcon
                fontSize="inherit"
                style={{ color: "#ffffff" }}
              />
            </IconButton>
          </div>
        </div>
      ) : (
        <div className="plansListDefault">{list}</div>
      )}
      <div className="conditions">*Confira as condições da promoção</div>
    </div>
  );
}

export default PlansList;
