import { Link } from "react-router-dom";
import "./Navbar.css"; // Opcional: para estilização

function Navbar() {
  return (
    <nav className="menu">
      <div className="logo">
        <Link to="/">
          <h2>CRUD  - API</h2>
        </Link>
      </div>

      <ul>
        <li>
          <Link to="/">Listagem</Link>
        </li>
        <li>
          <Link to="/cadastrar">Cadastrar</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
