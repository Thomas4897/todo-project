import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  todoArray: [],
  numberComplete: 0,
  numberIncomplete: 0,
  criticalPriorities: 0,
  highPriorities: 0,
  mediumPriorities: 0,
  lowPriorities: 0,

  status: "idle",
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,

  reducers: {
    addTodo: (state, action) => {
      state.todoArray = [...state.todoArray, action.payload];
    },
    editTodo: (state, action) => {
      const copiedTodoArray = [...state.todoArray];
      const updateTodoArray = copiedTodoArray.map((todo) => {
        if (action.payload.id === todo.id) {
          return action.payload;
        } else {
          return todo;
        }
      });

      state.todoArray = updateTodoArray;
    },
    completeTodo: (state, action) => {
      const copiedTodoArray = [...state.todoArray];
      const updateTodoArray = copiedTodoArray.map((todo) => {
        if (action.payload.id === todo.id) {
          return action.payload;
        } else {
          return todo;
        }
      });

      state.todoArray = updateTodoArray;
    },

    deleteTodo: (state, action) => {
      const copiedTodoArray = [...state.todoArray];

      const deleteTodo = copiedTodoArray.filter((todo) => {
        if (action.payload.id !== todo.id) {
          return todo;
        }
      });

      state.todoArray = deleteTodo;
    },
  },
  extraReducers(builder) {
    builder.addCase("todos/get-all-todos/fulfilled", (state, action) => {
      console.log("Extra", action.payload);
      state.todoArray = action.payload.payload;
    });
  },
});

export const { addTodo, editTodo, deleteTodo } = todoSlice.actions;

export const selectTodoArray = (state) => state.todo.todoArray;
export const selectNumberComplete = (state) => state.todo.numberComplete;
export const selectNumberIncomplete = (state) => state.todo.numberIncomplete;
export const selectCriticalPriorities = (state) =>
  state.todo.criticalPriorities;
export const selectHighPriorities = (state) => state.todo.highPriorities;
export const selectMediumPriorities = (state) => state.todo.mediumPriorities;
export const selectLowPriorities = (state) => state.todo.lowPriorities;

export const fetchTodoList = createAsyncThunk(
  "todos/get-all-todos",
  async () => {
    const response = await fetch(`http://localhost:3001/todos/get-all-todos`);
    const todoList = await response.json();
    return todoList;
  }
);

export const postTodo = createAsyncThunk("todos/create-todo", async (todo) => {
  console.log(todo);
  const response = await fetch(`http://localhost:3001/todos/create-todo`, {
    method: "POST",
    body: JSON.stringify(todo),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const postBody = await response.json();
  const todoStatus = postBody.created;
  return todoStatus;
});

export default todoSlice.reducer;
