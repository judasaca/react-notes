import { Link, Outlet } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item">
          <Link to="excercises/expenses-tracker">Expenses tracker</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default App;
