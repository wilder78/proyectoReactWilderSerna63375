function Navbar() {
  return(
    <div className="collapse navbar-collapse" id="navbar-toggler">
      <ul className="navbar-nav d-flex">
        <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="./index.html">Incio</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="./pages/products.html">Productos</a>
        </li>
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Nosotros
            </a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="./pages/weAre.html">Somos</a></li>
                <li><a className="dropdown-item" href="./pages/login.html">Usuarios</a></li>
            </ul>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="./pages/contactUs.html">Contáctanos</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="./pages/shoppingCart.html"><i className="bi bi-cart3"></i></a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;
