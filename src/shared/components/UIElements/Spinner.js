import React from "react";

import "./Spinner.css";

const Spinner = (props) => (
  <div className={`${props.overlay && "spinner-overlay"}`}>
    <div class="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default Spinner;
