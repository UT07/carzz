import React from "react";
import { HorizontalMargin,VerticalMargin } from "../../styles";
function Margin(props) {
    const { direction } = props;
  
    if (direction === "horizontal") return <HorizontalMargin {...props} />;
    else {
      return <VerticalMargin {...props} />;
    }
  }
  Margin.defaultProps = {
    direction: "horizontal",
  };
  
  export { Margin };