const Item = require("../models/item");

exports.getTodo = (req, res, next) => {
  Item.find()
    .then((items) => {
      return res.status(200).json({
        message: items.length > 0 ? "Available items" : "No items available",
        items: items || [],
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.postTodo = (req, res, next) => {
  const { title, description, dueDate } = req.body;

  if (!title || !description || !dueDate) {
    const error = new Error("Missing required fields");
    error.statusCode = 400; // Bad Request
    return next(error);
  }

  const isoDate = new Date(dueDate);

  const item = new Item({
    title,
    description,
    dueDate: isoDate,
  });
  return item
    .save()
    .then((item) => {
      return res.json({ message: "Item created", item: item });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.deleteTodo = (req, res, next) => {
  const id = req.params.id;
  Item.findByIdAndDelete(id)
    .then((result) => {
      return res.json({ message: "Item deleted" });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.editTodo = (req, res, next) => {
  const id = req.params.id;
  const { title, description, dueDate } = req.body;

  if (!title || !description || !dueDate) {
    const error = new Error("Missing required fields");
    error.statusCode = 400; // Bad Request
    return next(error);
  }

  const isoDate = new Date(dueDate);

  Item.findById(id)
    .then((item) => {
      item.title = title;
      item.description = description;
      item.dueDate = isoDate;
      return item.save().then(() => {
        return res.json({ message: "Updated!" });
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.getItem = (req, res, next) => {
  const id = req.params.id;
  Item.findById(id)
    .then((item) => {
      return res.json({message:"Item found", item:item})
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
