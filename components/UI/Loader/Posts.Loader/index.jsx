import React from 'react';
import PropagateLoader from "react-spinners/PropagateLoader";

// const override = `
//   display: block;
//   margin: 0 auto;
//   border-color: red;
// `;
const PostsLoder = () => {
  return <div
  style={{
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height:"100%",
    padding: '20px'
    
  }}
>
 <PropagateLoader color={"#ffffff"} loading={true} size={15} />
</div>;
};

export default PostsLoder;
