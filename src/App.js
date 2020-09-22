import React from "react";
import hostgatorLogo from "./imgs/hostgator-logo.svg";
import guyImg from "./imgs/guy-img.svg";
import deskImg from "./imgs/desk-img.svg";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CheckIcon from "@material-ui/icons/Check";
import IconButton from "@material-ui/core/IconButton";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";
import PlansView from "./components/PlansView/PlansView";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    scrollBehavior: "smooth",
    width: "100%",
    overflow: "hidden",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    background: "#FFFFFF 0% 0% no-repeat padding-box;",
    boxShadow: "none",
  },
  content: {
    backgroundColor: "#1D5297",
    height: 500,
    width: 500,
  },
  arrowDown: {
    backgroundColor: "#4480C5",
    color: "#ffffff",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <div className={classes.title}>
            <img src={hostgatorLogo} alt="logo" />
          </div>
        </Toolbar>
      </AppBar>
      <div className="content">
        <div className="bannerImg">
          <img className="deskImg" src={deskImg} alt="logo" />
        </div>
        <div className="title">
          <span>Hospedagem de sites</span>
        </div>
        <div>
          <span className="description">
            Tenha uma hospedagem de sites estável e <br /> evite perder
            visitantes diariamente
          </span>
        </div>
        <div className="item">
          <CheckIcon
            style={{
              fontSize: 16,
              position: "relative",
              top: 4,
              color: "#ffffff",
              fontWeight: "bold",
            }}
          ></CheckIcon>
          <span>99,9% de disponibilidade: seu site sempre no ar</span>
        </div>
        <div className="item">
          <span>
            <CheckIcon
              style={{
                fontSize: 16,
                position: "relative",
                top: 4,
                color: "#ffffff",
                fontWeight: "bold",
              }}
            ></CheckIcon>
            <span>Suporte 24h, todos os dias</span>
          </span>
          <span>
            <CheckIcon
              style={{
                fontSize: 16,
                position: "relative",
                top: 4,
                color: "#ffffff",
                fontWeight: "bold",
              }}
            ></CheckIcon>
            <span>Painel de Controle cPanel</span>
          </span>
        </div>
        <div className="bannerImg">
          <img className="guyImg" src={guyImg} alt="logo" />
        </div>

        <div className="arrow-down">
          <IconButton
            aria-label="down"
            disableRipple={true}
            className={classes.arrowDown}
            size="medium"
            style={{ backgroundColor: "transparent" }}
            href="#pay"
          >
            <ArrowDropDownIcon
              fontSize="inherit"
              style={{ backgroundColor: "4480C5", borderRadius: 26 }}
            />
          </IconButton>
        </div>
      </div>
      <PlansView />
    </div>
  );
}

export default App;
