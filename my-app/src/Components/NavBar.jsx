import { Outlet, Link } from "react-router-dom";
import "../App.css";

function NavBar() {
  return (
    <div className="App-header">
      <div className="App">
        <h3>NavBar</h3>

        <nav>
          <Link to="/">Home</Link> <Link to="create-task">Create Task</Link>
        </nav>

        <Outlet />
      </div>
    </div>
  );
}

export default NavBar;
