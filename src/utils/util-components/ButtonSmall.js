import React from "react";

const ButtonSmall = ({
  outlined,
  background,
  textColor,
  hoverBackground,
  children,
}) => {
  return (
    <button
      className={
        outlined
          ? `border border-${outlined} text-${textColor} rounded-md px-5 py-2 hover:bg-${hoverBackground}`
          : `bg-[${background}] text-${textColor} rounded-md px-5 py-2 hover:bg-[#c9121b]`
      }>
      {children}
    </button>
  );
};

export default ButtonSmall;
