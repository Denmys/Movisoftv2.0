import { Component } from "react";
import logo from "../component/imagen/logo-nav.webp";
import "./NavbarStyles.css";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <nav>
          <a href="index.html">
            <img id="logo" src={logo} alt="Logo" className="logo-image" />
          </a>
          <div>
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar active" : "#navbar"}
            >
              <li>
                <a className="active" href="index.html">
                  Inicio
                </a>
              </li>
              <li>
                <a href="index.html">Servicios</a>
              </li>
              <li>
                <a href="index.html">Noticias</a>
              </li>
              <li>
                <a href="index.html">Acerca</a>
              </li>
              <li>
                <a href="index.html">Contacto</a>
              </li>
            </ul>
          </div>

          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
