import React from "react";

const Button = (props) => {
  return (
    <div>
      <button
        className={`bg-primaryColor rounded-[4px] text-white text-[12px] font-semibold`}
        style={{
          paddingLeft: `${props.padding}px`,
          paddingRight: `${props.padding}px`, // Apply padding dynamically
          height: `${props.height}px`, // Apply height dynamically
        }}
      >
        {props.text}
      </button>
    </div>
  );
};

export default Button;
