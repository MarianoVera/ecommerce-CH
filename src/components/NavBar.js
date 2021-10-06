import CardWidget from "./CartWidget.js";
import { Link } from "react-router-dom";
import { useCardContext } from "./CartContext/CartContext.js";

const NavBar = () => {
  const { cart } = useCardContext();

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link to="/">
          <a className="navbar-brand" href="#home">
            Universe
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <Link to="/">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#home">
                  Home
                </a>
              </li>
            </Link>
            <Link to="/category/mens">
              <li className="nav-item">
                <a className="nav-link" href="#Men's Clothing">
                  Men's Clothing
                </a>
              </li>
            </Link>
            <Link to="/category/jewelery">
              <li className="nav-item">
                <a className="nav-link" href="#Jewelery">
                  Jewelery
                </a>
              </li>
            </Link>
          </ul>
        </div>
        <Link to="/cart">{cart.length > 0 ? <CardWidget /> : <h3>-</h3>}</Link>
      </div>
    </nav>
  );
};

export default NavBar;
