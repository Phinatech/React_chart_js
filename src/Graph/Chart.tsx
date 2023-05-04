// import React from 'react'

import { Barchat } from "../Page/Barchat";
// import { Dough } from "../Page/Doughnut";

const Chart = () => {
  return (
    <div
      style={{
        width: "100vw",
        maxHeight: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <Dough /> */}
      <Barchat />
    </div>
  );
};

export default Chart;
