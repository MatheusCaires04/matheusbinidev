import React from "react";

const Title = ({ title }) => {
  return (
    <h1 className="text-4xl sm:text-5xl md:text-6xl text-orange text-center font-bold font-concert my-10">
      {title}
    </h1>
  );
};

export default Title;
