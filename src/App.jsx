import { Route, BrowserRouter as Router, Routes } from "react-router";
import "./App.css";
import TodoApp from "./pages/TodoApp";
function App() {
  return (
    <Router basename="/f8-fullstack-day-39-redux/">
      <Routes>
        <Route path="/" element={<TodoApp />} />
      </Routes>
    </Router>
  );
}

export default App;
