import React from "react";

const Button = (props) => {
  return (
    <div>
      <button
        onClick={props.onClick}
        className={`rounded-[4px] font-semibold w-full bg-primaryColor border-2 border-primaryColor text-white px-5 h-8`}
        style={{
          paddingLeft: `${props.padding}px`,
          paddingRight: `${props.padding}px`,
          height: `${props.height}px`,
          width: `${props.width}`,
          backgroundColor: props.backgroundColor,
          borderColor: props.borderColor,
        }}
      >
        <p
          className="text-lg font-bold text-white"
          style={{
            color: props.textColor,
            fontSize: `${props.textSize}px`,
            fontWeight: props.textWeight,
          }}
        >
          {props.text}
        </p>
      </button>
    </div>
  );
};

export default Button;
