import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { addTodo, selectTodoArray } from "../features/todos/todoSlice";
import { useState } from "react";

export default function CreateTask() {
  const todoList = useSelector(selectTodoArray);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [completeDate, setCompleteDate] = useState("date");

  let navigate = useNavigate();

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Create Task</h2>
      <div>Welcome To Create Task!</div>

      <div className="Todo">
        Title:{" "}
        <input
          type="text"
          name="title"
          placeholder="Title"
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
            <option value="">Priority</option>
            <option value="Critical">Critical</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <div>
          Description:{" "}
          <input
            type="text"
            name="description"
            placeholder="Description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <button
          onClick={() => {
            navigate(`/`);
            dispatch(
              addTodo({
                id: todoList.length + 1,
                title: title,
                description: description,
                priority: priority,
                isComplete: isComplete,
                creationDate: new Date().toISOString(),
                completeDate: completeDate,
              })
            );
          }}
        >
          Add Todo
        </button>
      </div>
      {/* <input
        type="text"
        name="title"
        placeholder="Todo Title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          console.log(title);
        }}
      />
      <select
        style={{
          color: priority === "" ? "#666" : "",
        }}
        onChange={(e) => {
          setPriority(e.target.value);
        }}
      >
        <option value="">Priority</option>
        <option value="Critical">Critical</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      /> */}
      {/* <button
        onClick={() =>
          dispatch(
            addTodo({
              id: todoList.length + 1,
              title: title,
              description: description,
              priority: priority,
              isComplete: isComplete,
              creationDate: new Date().toISOString(),
              completeDate: completeDate,
            })
          )
        }
      >
        Add Todo
      </button> */}
    </main>
  );
}
