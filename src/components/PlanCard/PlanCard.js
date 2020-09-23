import React from "react";
import "./PlanCard.css";
import planP from "./planP.svg";
import planM from "./planM.svg";
import planTurbo from "./planTurbo.svg";
import info from "./i.svg";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import AnimatedNumber from "animated-number-react";

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
  const { paymentFrequency, plan } = props;
  const imgs = {
    planP: <img src={planP} alt="planP" />,
    planM: <img src={planM} alt="planM" />,
    planTurbo: <img src={planTurbo} alt="planTurbo" />,
  };

  function formatValue(value) {
    return value.toFixed(2).toLocaleString("pt-BR");
  }

  const buyNowStyle = {};
  let planCardClass = "planCard";
  if (plan.recomended) {
    buyNowStyle.backgroundColor = "#FF6A17";
    planCardClass += " recomended";
  }
  const { priceOrder, months } = plan.cycle[paymentFrequency];
  const priceWithDiscount = Math.round(priceOrder * 0.6 * 100) / 100;
  const pricePerMonth = Math.round((priceWithDiscount * 100) / months) / 100;
  const saving = Math.round((priceOrder - priceWithDiscount) * 100) / 100;
  return (
    <div className={planCardClass}>
      <div className="cardHeader">
        {imgs[plan.img]}
        <div className="planTitle">{plan.name}</div>
      </div>
      <div className="pricesCard">
        <div>
          <span className="totalPrice">
            R${" "}
            <AnimatedNumber
              duration={500}
              value={priceOrder}
              formatValue={formatValue}
            />
          </span>
          <span className="salePrice">
            R${" "}
            <AnimatedNumber
              duration={500}
              value={priceWithDiscount}
              formatValue={formatValue}
            />
          </span>
        </div>
        <div>
          <span className="equivalentLabel">equivalente a</span>
        </div>
        <div style={{ marginTop: 8 }}>
          <span className="priceByPeriodLabel">
            R${" "}
            <span className="priceByPeriodNumber">
              <AnimatedNumber
                duration={500}
                value={pricePerMonth}
                formatValue={formatValue}
              />
            </span>
            /mês*
          </span>
        </div>
        <div>
          <Button
            variant="contained"
            color="primary"
            className={classes.buyNow}
            href={
              "?a=add&pid=" +
              plan.id +
              "&billingcycle=" +
              paymentFrequency +
              "&promocode=PROMOHG40"
            }
            style={buyNowStyle}
          >
            Contrate Agora
          </Button>
        </div>
        <div>
          <div className="freeDomainText">
            1 ano de Domínio Grátis <img src={info} alt="info" />
          </div>
          <div className="economyValue">
            economize R${" "}
            <AnimatedNumber
              value={saving}
              duration={500}
              formatValue={formatValue}
            />
            <Chip
              label="40% OFF"
              style={{
                fontFamily: "Montserrat",
                backgroundColor: "#51C99C",
                color: "#ffffff",
                fontWeight: "bold",
                height: 23,
                marginLeft: 5,
              }}
            ></Chip>
          </div>
        </div>
      </div>
      <div className="cardFooter">
        <div>
          <span className="dashed">{plan.details.siteNumbers}</span>
        </div>
        <div>
          <span className="bold">{plan.details.storage} GB </span> de
          Armazenamento{" "}
        </div>
        <div>
          <span className="dashed">
            Contas de E-mail <span className="bold">Ilimitadas</span>
          </span>
        </div>
        <div>
          Criador de Sites <span className="bold underline">Grátis</span>
        </div>
        <div>
          Certificado SSL <span className="bold">Grátis</span> (https)
        </div>
      </div>
    </div>
  );
}

export default PlanCard;
