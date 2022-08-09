import React from "react";

function Button({ onClickHandler, children }) {
  const handleClick = (e) => {
    e.preventDefault();
    onClickHandler();
  };
  return (
    <button
      className="py-2 text-center bg-brightBlue text-white"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default Button;
