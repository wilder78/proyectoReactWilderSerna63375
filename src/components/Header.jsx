import Title from "./Title";
import Navbar from "./Navbar";

function Header() {
  return (
    <nav className="navbar navbar-expand-md">
      <div className="container">
        <Title />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <Navbar />
      </div>
    </nav>
  )
}

export default Header;
