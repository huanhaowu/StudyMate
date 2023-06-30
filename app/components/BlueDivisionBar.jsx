import React from "react";

const BlueBar = ({bottom="2/3"}) => {
  console.log(bottom)
  return (
    
    <div className={`bg-blue-600 w-11/12 h-1 absolute left-11 bottom-${bottom} transform -translate-y-1/2 rounded-xl`} ></div>
  );
};

export default BlueBar;
