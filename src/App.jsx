import "./App.css";
import { TodoApp } from "./components/TodoApp";
import AddTodoProvider from "./Context/AddTodo";

function App() {
  return (
    <AddTodoProvider>
      <TodoApp />
    </AddTodoProvider>
  );
}

export default App;
