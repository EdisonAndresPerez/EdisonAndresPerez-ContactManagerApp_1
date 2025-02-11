import "./App.css";
import { useState, useEffect } from "react";
import { Nav } from "./componentes/Nav";
import { Form } from "./componentes/Nav";
import { Outlet } from "react-router-dom";

function App() {
  const [showForm, setShowForm] = useState(true);
  const [user,setUser] = useState([])

  const toggleForm = () => {
    setShowForm((prev) => !prev);
  };


  return (
    <div>
      <Nav toggleForm={toggleForm} />
      {showForm && <Form toggleForm={toggleForm} />}{" "}
      <Outlet />
    </div>
  );
}
export default App;
