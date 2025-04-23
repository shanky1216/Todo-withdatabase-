import React from "react";

const Input = ({ textarea, label, ...props }) => {
    const css = 'bg-stone-100 outline-none border-b-2 border-b-stone-800'
  return (
    <p className="flex flex-col w-full p-2">
      <label className="font-bold text-stone-600 outline-none">{label}</label>
      {textarea ? <textarea className={css} {...props}></textarea> : <input className={css} {...props} />}
    </p>
  );
};

export default Input;
