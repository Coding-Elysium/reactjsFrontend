import React from "react";

const TextField = (props) => {
  return (
    <div className="mb-4">
      <p className="text-[12px] text-primaryColor mb-1">{props.label}</p>
      <input
        className="w-full border border-black rounded-md px-5"
        onChange={props.onChange}
        type={props.type}
        placeholder={props.placeholder}
        style={{
          width: `${props.width}px`,
          height: `${props.height}px`,
          border: `${props.border}px`,
          borderWidth: `${props.borderWidth}px`,
          borderColor: `${props.borderColor}px`,
          borderRadius: `${props.borderRadius}`,
        }}
      />
    </div>
  );
};

export default TextField;
