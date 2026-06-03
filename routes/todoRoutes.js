const express = require("express");
const router = express.Router();
const { getTodos, createTodo, updateTodo, deleteTodo, getOneTask } = require("../controllers/todoController");
const auth = require("../middleware/auth");

router.use(auth);

router.get("/", getTodos);
router.get("/:id", getOneTask);
router.post("/", createTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

module.exports = router;