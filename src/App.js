import './App.css';
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Todo from './ToDo/Todo';
import Create from './ToDo/Create';
import Update from './ToDo/Update'
function App() {
  return (
    <>
      <Navbar />
      {/* <Todo /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Update />} />
        <Route path="/Todo" element={<Todo />} />
      </Routes>
    </>
  );
}
export default App;
