import React from "react";

import "../styles/about.sass";

export default function MotionIcon(props) {

  let type;
  if (props.type === "me") {
    type = "fas fa-child";
  } else if (props.type === "edu") {
    type = "fas fa-book";
  } else {
    type = "fas fa-phone";
  }

  return (
    <div class="motion-icon-container">
      <div class="effect-1"></div>
      <div class="effect-2"></div>
      <div class="icon-container">
        <i class={type}></i>
      </div>
    </div>
  )
}