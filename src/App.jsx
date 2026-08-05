import "./App.css";
import { Nav } from "./componentes/Nav";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { LoadingScreen } from "./componentes/LoadingScreen";

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (location.state?.skipLoader) return undefined;

    setIsLoading(true);
    const timer = window.setTimeout(() => setIsLoading(false), 1000);

    return () => window.clearTimeout(timer);
  }, [location.pathname, location.state]);

  return (
    <div className="app_shell">
      {isLoading && <LoadingScreen />}
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
