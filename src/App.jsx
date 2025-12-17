import { Route, BrowserRouter as Router, Routes } from "react-router";
import "./App.css";
import TodoApp from "./pages/TodoApp";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/todo" element={<TodoApp />} />
      </Routes>
    </Router>
  );
}

export default App;
