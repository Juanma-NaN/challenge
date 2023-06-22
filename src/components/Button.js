import React from "react";

const Button = ({ text, full }) => {
  return (
    <button
      className={`md:w-[260px] h-12 text-base font-semibold bg-gradient-to-r from-cyan to-blue rounded-full text-white pointer ${
        full ? "w-full" : "w-[200px]"
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
