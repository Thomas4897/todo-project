var express = require("express");
var router = express.Router();
const { createTodo, getAllTodos } = require("./controller/todosController");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("Hello from the Todos router");
});

router.post("/create-todo", createTodo);
// router.get("/Get-User/:id", getUserDB);
router.get("/get-all-todos", getAllTodos);
// router.put("/Update-User/:id", checkIsEmpty, updateUserDB);
// router.delete("/Delete-User/:id", checkIsEmpty, deleteUserDB);

module.exports = router;
