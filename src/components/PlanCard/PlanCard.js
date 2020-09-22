import React from "react";
import "./PlanCard.css";
import planP from "./planP.svg";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  buyNow: {
    background: "#4480C5 0% 0% no-repeat padding-box",
    borderRadius: 26,
    opacity: 1,
    height: 52,
    width: 279,
    font: "normal normal bold 22px/27px Montserrat",
    color: "#FFFFFF",
    marginTop: 22,
    textTransform: "none",
  },
}));

function PlanCard(props) {
  const classes = useStyles();
  const plan = props.plan;
  console.log(plan);
  return (
    <div className="planCard">
      <div className="cardHeader">
        <img src={planP} alt="planP" />
        <div className="planTitle">{plan.name}</div>
      </div>
      <div className="pricesCard">
        <div>
          <span className="totalPrice">R$ 431,64</span>
          <span className="salePrice">R$ 302,15</span>
        </div>
        <div>
          <span className="equivalentLabel">equivalente a</span>
        </div>
        <div style={{ marginTop: 8 }}>
          <span className="priceByPeriodLabel">
            R$ <span className="priceByPeriodNumber">8,39</span>/mês*
          </span>
        </div>
        <div>
          <Button
            variant="contained"
            color="primary"
            className={classes.buyNow}
          >
            Contrate Agora
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PlanCard;
