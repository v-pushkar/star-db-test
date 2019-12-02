import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  state = {
    isMenuOpen: false
  };

  navToggleOpen = () => {
    console.log("menu clicked");
    this.setState(state => ({
      isMenuOpen: !state.isMenuOpen
    }));
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            StarWars API
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={this.navToggleOpen}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${
              this.state.isMenuOpen ? "show" : ""
            }`}
            id="navbarColor02"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/people/" className="nav-link">
                  People <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/planets/" className="nav-link">
                  Planets
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/starships/" className="nav-link">
                  Starships
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/secret" className="nav-link">
                  SecretPage
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
            </ul>
            <button
              className="btn btn-primary btn-sm"
              onClick={this.props.onServiceChange}
            >
              Change services
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
