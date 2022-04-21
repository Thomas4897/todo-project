import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoArray: [
    {
      id: 1,
      title: "Dentist",
      description: "Go to the Dentist",
      priority: "High",
      isComplete: true,
      creationDate: new Date().toISOString(),
      completeDate: new Date().toISOString(),
      editing: false,
    },
    {
      id: 2,
      title: "Groceries",
      description: "Go grocery shopping",
      priority: "Medium",
      isComplete: false,
      creationDate: new Date().toISOString(),
      completeDate: "",
      editing: false,
    },
    {
      id: 3,
      title: "DMV",
      description: "Renew DL",
      priority: "Critical",
      isComplete: false,
      creationDate: new Date().toISOString(),
      completeDate: "",
      editing: false,
    },
  ],
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

export default todoSlice.reducer;
