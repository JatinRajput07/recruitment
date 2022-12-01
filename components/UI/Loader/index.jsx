import React from 'react';
import PropagateLoader from "react-spinners/PropagateLoader";

// const override = `
//   display: block;
//   margin: 0 auto;
//   border-color: red;
// `;
const DataLoader = () => {
  return <div
  style={{
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height:"100vh"
  }}
>
 <PropagateLoader color={"#ffffff"} loading={true} size={15} />
</div>;
};

export default DataLoader;
