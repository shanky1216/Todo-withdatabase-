import React from "react";
import Input from "../components/Input";
import { Form, useLoaderData, useNavigate } from "react-router-dom";
import Button from "../Ui/Button";
import Item from "../components/Item";

const Todo = () => {
  const navigate = useNavigate();
  const items = useLoaderData();
  function handleEdit(id) {
    navigate(`/todo/edit/${id}`)
  }
  return (
    <div className="flex flex-col justify-center items-center ">
      <Form
        method="POST"
        className="w-2/3 bg-stone-200 p-4  flex-col rounded-3xl flex justify-center items-center m-8"
      >
        <Input label="Title" name="title" type="text" />
        <Input label="Description" name="description" textarea />
        <Input label="Due Date" name="dueDate" type="date" />
        <Button dark type="submit">
          Submit
        </Button>
      </Form>
      {items &&
        items.map((item) => (
          <Item handleEdit={()=>handleEdit(item._id)} key={item._id} {...item} />
        ))}
    </div>
  );
};

export default Todo;

export async function action({ request }) {
  const formData = await request.formData();
  const method = request.method;
  console.log(method)

  if (method === "DELETE") {
    const id = formData.get("_id");
    console.log(id);
    const response = await fetch('http://localhost:8080/todo/' +id, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Delete failed");
    return null;
  }

  if (method === "POST") {
    const newTodo = {
      title: formData.get("title"),
      description: formData.get("description"),
      dueDate: new Date(formData.get("dueDate") + "T00:00:00").toISOString(),
    };
    const response = await fetch("http://localhost:8080/todo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    });
    if (!response.ok) throw new Error("Create failed");
    return null;
  }

  throw new Error("Unsupported method");
}

export async function loader() {
  try {
    const response = await fetch("http://localhost:8080/todo");
    if (!response.ok) {
      throw new Error("Failed to fetch item");
    }
    const result = await response.json();
    return result.items || [];
  } catch (err) {
    console.error("Error:", err);
    throw err;
  }
}
