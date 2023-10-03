import React from "react";

const Button = ({ label, outline, selected, onClick, disabled }) => {
  return (
    <div
      onClick={onClick}
      className={`px-6 py-3 rounded-3xl cursor-pointer
      ${disabled ? "bg-[#797bf0] cursor-not-allowed" : ""}
      ${selected ? "bg-[#373ae4]" : ""}
      ${selected ? "text-white" : ""}
      ${outline ? "bg-transparent" : ""}
      ${outline ? "border-[#373ae4] border-2" : ""}
      ${!outline && !selected ? "bg-[#ebecfb]" : ""}
      `}
    >
      {label}
    </div>
  );
};

export default Button;
