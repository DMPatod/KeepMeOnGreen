import React, { CssProperties } from "react";

const Line = (props) => {
  const { style } = props;

  return (
    <hr
      style={{ marginTop: 5, borderTop: "1px solid rgba(0,0,0,0.2)", ...style }}
    />
  );
};

export default Line;
