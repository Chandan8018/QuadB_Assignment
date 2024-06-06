import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    createTodo: {
      reducer(state, action) {
        state.todos.push(action.payload);
      },
      prepare(todoData) {
        // Generate a nano ID for the new todo item
        const id = nanoid();
        // Return the todo data along with the generated ID
        return {
          payload: {
            id,
            todoStatus: "Todo",
            ...todoData,
          },
        };
      },
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    updateTodo: (state, action) => {
      const { id, title, description, date, todoStatus } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.title = title;
        todo.description = description;
        todo.date = date;
        todo.todoStatus = todoStatus;
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { createTodo, toggleTodo, updateTodo, deleteTodo } =
  todoSlice.actions;

export const selectTodos = (state) => state.todo.todos;

export default todoSlice.reducer;
