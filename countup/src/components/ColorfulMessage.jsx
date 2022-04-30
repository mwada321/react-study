import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color,
    fontSize: "18px"
  };
  // color: color, も可(上記は省略した版)
  return <p style={contentStyle}>{children}</p>;
};
// ↑　でexport (下の代わり)
// export default ColorfulMessage;
