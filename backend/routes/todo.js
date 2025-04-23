const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todo")


router.get('/', todoController.getTodo);

router.post('/', todoController.postTodo);

router.delete('/:id', todoController.deleteTodo);

router.get('/edit/:id', todoController.getItem);

router.patch('/edit/:id', todoController.editTodo);

module.exports = router;