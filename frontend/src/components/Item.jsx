import React from "react";
import Card from "../Ui/Card";
import Button from "../Ui/Button";
import { Form } from "react-router-dom";

const Item = ({ _id, title, description, dueDate, handleEdit }) => {
  return (
    <Card>
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <p className="text-sm text-gray-500">Due: {dueDate}</p>
      <div className="flex gap-2 mt-4">
        <Button blue onClick={handleEdit}>Edit</Button>
        <Form method="DELETE">
          <input type="hidden" name="_id" value={_id} />
          <Button red type="submit">Delete</Button>
        </Form>
      </div>
    </Card>
  );
};

export default Item;
