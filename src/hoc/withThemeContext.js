import React from "react";
import ThemeContext from "../context/ThemeContext";

const withThemeContext = WrappedCommponent => {
  return function withAuthContext(props) {
    return (
      <ThemeContext.Consumer>
        {ctx => <WrappedCommponent {...props} auth={ctx} />}
      </ThemeContext.Consumer>
    );
  };
};

export default withThemeContext;
