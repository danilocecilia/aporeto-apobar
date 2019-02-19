import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  state = {
    navActive: false
  };

  render() {
    const { navActive } = this.state;

    return (
      <nav
        className="navbar is-light"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <img
              alt=""
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            />
          </Link>

          <button
            onClick={() => this.setState({ navActive: !navActive })}
            className={`navbar-burger burger ${navActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
        <div className={`navbar-menu ${navActive ? "is-active" : ""}`}>
          <div className="navbar-start">
            <Link to="/warehouse" className="navbar-item">
              WAREHOUSE
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
