import React from "react";
import { Form, redirect, useLoaderData, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../Ui/Button";

const Edit = () => {
  const navigate = useNavigate();
  const data = useLoaderData();
  function handleClose() {
    navigate("/todo");
  }
  const formattedDate = new Date().toISOString().split('T')[0];
  return (
    <div>
      <Form method="PATCH" className="w-1/2 m-auto">
        <Input label="Title" name="title" type="text" defaultValue={data.title} />
        <Input label="Description" name="description" textarea defaultValue={data.description}/>
        <Input label="Due Date" name="dueDate" type="date" defaultValue={formattedDate} />
        <div className="float-right">
          <Button light type="submit">
            Submit
          </Button>
          <Button dark type="button" onClick={handleClose}>
            Close
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Edit;

export async function loader({ params }) {
  const {id}  = params;
  try {
    const response = await fetch(`http://localhost:8080/todo/edit/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch item");
    }
    const result = await response.json();
    return result.item;
  } catch (err) {
    console.error("Error:", err);
    throw err;
  }
}


export async function action({params,request}){
  const formData = await request.formData();
  const method = request.method;
  const {id}  = params;

  if (method === "PATCH") {
    const newTodo = {
      title: formData.get("title"),
      description: formData.get("description"),
      dueDate: new Date(formData.get("dueDate") + "T00:00:00").toISOString(),
    };
    const response = await fetch(`http://localhost:8080/todo/edit/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    });
    if (!response.ok) throw new Error("Create failed");
    return redirect('/todo');
  }
}
