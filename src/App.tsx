import { Link, Outlet } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <div>
      <ul className="list-group" style={{ marginBottom: "20px" }}>
        <li className="list-group-item">
          <Link to="expenses-tracker">Expenses tracker</Link>
        </li>
        <li className="list-group-item">
          <Link to="videogame-discovery-app">Videogame Discovery App</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default App;
