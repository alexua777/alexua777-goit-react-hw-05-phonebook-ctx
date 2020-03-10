import React from "react";
import withThemeContext from "../hoc/withThemeContext";
import ThemeContext from "../context/ThemeContext";

const style = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #2A363B"
  }
};

const Appbar = ({auth}) => (
  <header style={style.container}>
    <button onClick={auth.onThemeChange}> Theme {auth.theme} </button>
  </header>
);

export default withThemeContext(Appbar);


