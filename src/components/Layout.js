import React from "react";
import Appbar from "./Appbar";
import withThemeContext from "../hoc/withThemeContext";

const Layout = ({ auth, children }) => (
  <div style={{ color: auth.config.fontColor, background: auth.config.bodybg }}>
    <Appbar />
    {children}
  </div>
);

export default withThemeContext(Layout);


