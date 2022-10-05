import React from "react";
import PropTypes from "prop-types";

function Stack({ children, spacing = 2, diretion = "row", wrap = false }) {
  const style = {
    display: "flex",
    gap: `${spacing * 0.25}rem`,
    flexWrap: wrap ? "wrap" : "nowrap",
    flexDirection: diretion,
  };

  return <div style={style}>{children}</div>;
}

// eslint-disable-next-line react/no-typos
Stack.PropTypes = {
  spacing: PropTypes.number,
  wrap: PropTypes.bool,
  direction: PropTypes.oneOf(["row", "column"]),
};

export default Stack;
