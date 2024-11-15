import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-md">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="../public/image/LogoMs2.png" width="40" alt="LogoMs2" />
            MMS-Repuestos
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-toggler"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar-toggler">
            <ul className="navbar-nav d-flex">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                >
                  Incio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Products">
                  Productos
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Nosotros
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/AboutUs">
                      Somos
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Login">
                      Usuarios
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contacts">
                  Contáctanos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Card">
                  <i className="bi bi-cart3"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
