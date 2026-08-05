import "./App.css";
import { Nav } from "./componentes/Nav";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app_shell">
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
