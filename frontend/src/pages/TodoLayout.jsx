import React from "react";
import { Outlet } from "react-router-dom";

const TodoLayout = () => {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default TodoLayout;
