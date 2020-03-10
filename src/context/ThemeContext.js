import React, { createContext } from "react";

export const themeConfig = {
  light: {
    headerBg: "#F7B30C",
    fontColor: "black",
    bodybg: "white"
  },
  dark: {
    headerBg: "#3c3c3c",
    fontColor: "white",
    bodybg: "black"
  }
};
const ThemeContext = React.createContext(themeConfig.light);
export default ThemeContext;
