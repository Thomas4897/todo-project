import { useSelector, useDispatch } from "react-redux";

import {
  editTodo,
  deleteTodo,
  selectTodoArray,
  selectNumberComplete,
  selectNumberIncomplete,
  selectCriticalPriorities,
  selectHighPriorities,
  selectMediumPriorities,
  selectLowPriorities,
} from "./todoSlice";

import { useState } from "react";

// import { addTodo, selectTodoArray } from "../features/todos/todoSlice";

export default function Todo() {
  const todoList = useSelector(selectTodoArray);
  const dispatch = useDispatch();
  let numberComplete = useSelector(selectNumberComplete);
  let numberIncomplete = useSelector(selectNumberIncomplete);
  let criticalPriorities = useSelector(selectCriticalPriorities);
  let highPriorities = useSelector(selectHighPriorities);
  let mediumPriorities = useSelector(selectMediumPriorities);
  let lowPriorities = useSelector(selectLowPriorities);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [filterComplete, setFilterComplete] = useState("All");

  return (
    <div className="Dashboard">
      <div className="TodoList">
        <select
          className="FilterComplete"
          onChange={(e) => {
            setFilterComplete(e.target.value);
          }}
        >
          <option value="All">All</option>
          <option value={true}>Complete</option>
          <option value={false}>Incomplete</option>
        </select>
        {todoList.map((todo) => {
          todo.isComplete ? (numberComplete += 1) : (numberIncomplete += 1);

          if (todo.priority.toLowerCase() === "critical") {
            criticalPriorities += 1;
          } else if (todo.priority.toLowerCase() === "high") {
            highPriorities += 1;
          } else if (todo.priority.toLowerCase() === "medium") {
            mediumPriorities += 1;
          } else if (todo.priority.toLowerCase() === "low") {
            lowPriorities += 1;
          }
          return (
            <div>
              <div className="Todo">
                <div
                  className="isComplete"
                  style={{
                    fontWeight: "bold",
                    color: todo.isComplete ? "green" : "red",
                  }}
                >
                  {todo.isComplete ? (
                    <div className="completedDate">
                      Completed: {todo.completeDate}
                    </div>
                  ) : (
                    "Incomplete"
                  )}
                </div>
                <div>{todo.id}</div>

                {todo.editing === true ? (
                  <div>
                    Title:{" "}
                    <input
                      type="text"
                      name="title"
                      placeholder={todo.title}
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                    <div>
                      Priority:{" "}
                      <select
                        style={{
                          color: priority === "" ? "#666" : "",
                        }}
                        onChange={(e) => {
                          setPriority(e.target.value);
                        }}
                      >
                        <option value="">{todo.priority}</option>
                        <option value="Critical">Critical</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                      </select>
                    </div>
                    <div className="creationDate">
                      Created: {todo.creationDate}
                    </div>
                    <div>
                      Description:{" "}
                      <input
                        type="text"
                        name="description"
                        placeholder={todo.description}
                        onChange={(e) => {
                          setDescription(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="title">Title: {todo.title}</div>
                    <div className="priority">Priority: {todo.priority}</div>
                    <div className="creationDate">
                      Created: {todo.creationDate}
                    </div>
                    <div className="description">
                      Description: {todo.description}
                    </div>
                  </div>
                )}
                <button
                  onClick={() =>
                    dispatch(
                      editTodo({
                        ...todo,
                        editing: !todo.editing,
                      })
                    )
                  }
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    if (todo.editing === true) {
                      dispatch(
                        editTodo({
                          ...todo,
                          title: title,
                          priority: priority,
                          description: description,
                          editing: false,
                        })
                      );
                    }
                  }}
                >
                  Save
                </button>
                <button onClick={() => dispatch(deleteTodo(todo))}>
                  DELETE TODO
                </button>
                <button
                  onClick={() =>
                    dispatch(
                      editTodo({
                        ...todo,
                        isComplete: !todo.isComplete,
                        completeDate: new Date().toISOString(),
                      })
                    )
                  }
                >
                  Complete/Incomplete Todo
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="TodoStatistics">
        <div className="Statistics">
          <div
            style={{
              fontWeight: "bold",
            }}
          >
            Total Todos: {todoList.length}
          </div>
          <div className="TotalCompleted">
            Completed Todos: {numberComplete}
          </div>
          <div className="TotalIncomplete">
            Incompleted Todos:{numberIncomplete}
          </div>

          <div className="TotalPriorities">
            <div>Critical: {criticalPriorities}</div>
            <div>High: {highPriorities}</div>
            <div>Medium: {mediumPriorities}</div>
            <div>Low: {lowPriorities}</div>
          </div>
          <div className="CompletionPercentage">
            <div>
              Completion Percentage:{" "}
              {todoList.length > 0
                ? (
                    (numberComplete / (numberComplete + numberIncomplete)) *
                    100
                  ).toFixed(0)
                : 0}
              %
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
