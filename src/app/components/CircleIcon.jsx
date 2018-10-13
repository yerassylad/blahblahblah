import React from "react";

const CircleIcon = props => {
  const { text, bg } = props;
  const styles = {
    height: 25,
    width: 25,
    backgroundColor: bg,
    borderRadius: "50%",
    display: "inline-block",
    textAlign: "center",
    verticalAlign: "middle",
    lineHeight: "25px",
    color: "white",
    fontWeight: "bold"
  };
  return <div style={styles}>{text}</div>;
};

export default CircleIcon;
