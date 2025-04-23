import React from "react";
import Button from "../Ui/Button";
import { useNavigate } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();
  function handleNavigate(){
    navigate("/")
  }
  return (
    <header className="bg-stone-400 py-2 px-10">
      <nav className="flex justify-between">
        <button onClick={handleNavigate}>
        <h1 className="text-4xl font-extrabold text-stone-600 ">Todo</h1>
        </button>
        <ul className="flex gap-4 items-center">
          <Button light>Signup</Button>
          <Button dark>Login</Button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
