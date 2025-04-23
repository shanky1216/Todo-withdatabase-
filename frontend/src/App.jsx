import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Todo, { action as todoAction, loader as todoLoader } from "./pages/Todo";
import Home from "./pages/Home";
import TodoError from "./pages/TodoError";
import Edit from "./pages/Edit";
import TodoLayout from "./pages/TodoLayout";
import {loader as itemLoader, action as itemAction} from "./pages/Edit"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index:true, element: <Home /> },
      {
        path: "todo",
        element: <TodoLayout />,
        errorElement: <TodoError />,
        children: [
          {
            index:true,
            element: <Todo />,
            loader: todoLoader,
            action: todoAction,
          },
          { path: "edit/:id", element: <Edit />, loader:itemLoader, action:itemAction },
        ],
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
