import React, { useReducer, useState } from "react";

// Define Todo type
interface Todo {
  id: number;
  text: string;
}

// Define Actions
type Action =
  | { type: "ADD_TODO"; payload: string }
  | { type: "REMOVE_TODO"; payload: number };

// Define State
type State = Todo[];

// Reducer function
function todoReducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD_TODO": {
      const newTask = action.payload.trim();

      // Ignore empty input
      if (newTask === "") return state;

      // Check for duplicates (case-insensitive)
      const isDuplicate = state.some(
        (todo) => todo.text.toLowerCase() === newTask.toLowerCase()
      );
      if (isDuplicate) {
        alert("Task already exists!");
        return state;
      }

      const newTodo: Todo = {
        id: Date.now(),
        text: newTask,
      };

      return [...state, newTodo];
    }

    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
}

// Component
const TodoApp: React.FC = () => {
  const [todos, dispatch] = useReducer(todoReducer, [] as State);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    dispatch({ type: "ADD_TODO", payload: inputValue });
    setInputValue("");
  };

  const handleRemoveTodo = (id: number) => {
    dispatch({ type: "REMOVE_TODO", payload: id });
  };

  return (
    <div
  
    >
      <h2>Todo List</h2>

      
        <input
          type="text"
          placeholder="Enter a new task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add</button>
     

      <ul style={{ textAlign: "left", marginTop: 20 }}>
        {todos.length === 0 ? (
          <p>No tasks yet! ✅</p>
        ) : (
          todos.map((todo) => (
            <li key={todo.id} style={{ marginBottom: 10 }}>
              {todo.text}
              <button
                onClick={() => handleRemoveTodo(todo.id)}
                >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TodoApp;
