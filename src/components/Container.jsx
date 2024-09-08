import React from "react";

const Container = ({ children, className }) => {
  return (
    <div
      className={`w-full sm:w-[640px] md:w-[768px] font-popin  lg:w-[1050px] mx-auto ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
