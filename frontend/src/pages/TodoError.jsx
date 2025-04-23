import React from "react";
import { useRouteError } from "react-router-dom";

const TodoError = () => {
  const error = useRouteError();
  return (
    <div className="text-center mt-10 text-red-600">
      <h1 className="text-2xl font-bold">Oops! Something went wrong.</h1>
      <p>{error.message || "Unknown error occurred."}</p>
    </div>
  );
};

export default TodoError;
