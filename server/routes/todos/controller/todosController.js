const Todo = require("../model/Todo");

const createTodo = async (req, res) => {
  console.log(req.body);
  try {
    const {
      id,
      title,
      description,
      priority,
      isComplete,
      creationDate,
      completeDate,
      editing,
    } = req.body;

    // Creating a New User Object;
    let newTodo = new Todo({
      id: id,
      title: title,
      description: description,
      priority: priority,
      isComplete: isComplete,
      creationDate: new Date().toISOString(),
      completeDate: completeDate,
      editing: editing,
    });

    // Use .save() to save new user object to DB
    let savedTodo = await newTodo.save();

    res.status(200).json({
      message: "New Todo has been created",
      payload: savedTodo,
    });
    // res.redirect("/login-form");
  } catch (error) {
    res.status(500).json({
      message: "Create Todo Error",
      error: error.message,
    });
  }
};

const getAllTodos = async (req, res) => {
  try {
    let allTodos = await Todo.find();

    res.status(200).send({ payload: allTodos });
  } catch (error) {
    res.status(500).json({ message: "Error", error: error.message });
  }
};

module.exports = {
  createTodo,
  getAllTodos,
};
