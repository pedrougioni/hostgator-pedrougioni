import React from "react";
import hostgatorLogo from "./hostgator-logo.svg";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CheckIcon from "@material-ui/icons/Check";
import IconButton from "@material-ui/core/IconButton";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
      <div className={classes.content}>
        <h5>Hospedagem de sites</h5>
        <h3>
          Tenha uma hospedagem de sites estável e evite perder visitantes
          diariamente
        </h3>
        <h5>
          <CheckIcon></CheckIcon>99,9% de disponibilidade: seu site sempre no ar
        </h5>
        <h5>
          <CheckIcon></CheckIcon>Suporte 24h, todos os dias
        </h5>
        <h5>
          <CheckIcon></CheckIcon>Painel de Controle cPanel
        </h5>
        <IconButton
          aria-label="down"
          className={classes.arrowDown}
          size="small"
        >
          <ArrowDropDownIcon fontSize="inherit" />
        </IconButton>
      </div>
    </div>
  );
}

export default App;
