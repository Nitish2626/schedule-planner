import React from 'react';

const Button = ({buttonType, buttonName, buttonFunc}) => {
  return (
    <button
        type={buttonType}
        onClick={buttonFunc}
        className="w-24 bg-[#242424] rounded-md py-1 hover:bg-[#424242]"
    >
        {buttonName}
    </button>
  );
};

export default Button;