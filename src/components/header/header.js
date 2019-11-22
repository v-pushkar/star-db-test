import React, { Component } from "react";

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
          <a className="navbar-brand" href="#">
            StarDB
          </a>
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
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  People <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Planets
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Starships
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
