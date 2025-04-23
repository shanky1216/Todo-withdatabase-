import React from "react";
import Button from "../Ui/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  function handleNavigate() {
    navigate("/todo");
  }
  return (
    <div className="h-screen flex justify-center items-center">
      <Button dark onClick={handleNavigate}>
        Want to create a todo!
      </Button>

    </div>
  );
};

export default Home;
