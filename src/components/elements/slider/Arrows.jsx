import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
const Arrows = () => {
  return (
    <div>
      <button
        type="button"
        onClick={onClick}
        className={`button button--text button--icon ${className}`}
        aria-label={to}
      >
        arr
      </button>
    </div>
  );
};

export default Arrows;
