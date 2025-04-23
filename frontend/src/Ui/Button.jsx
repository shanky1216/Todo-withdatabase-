import React from "react";

const Button = ({ children, light, blue, red, dark, onClick}) => {
  let cssClasses = "px-2 py-1 cursor-pointer";

  if (light) {
    cssClasses += " text-stone-600 hover:text-stone-800";
  } else if (dark) {
    cssClasses += " bg-stone-600 rounded-lg text-white hover:bg-stone-800";
  }else if(blue){
    cssClasses +="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
  }else if(red){
    cssClasses +="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
  }
  return <button onClick={onClick} className={cssClasses}>{children}</button>;
};

export default Button;
