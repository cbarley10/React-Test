import React, { Component } from "react";
import SignUpModal from "./SignUpModal";
import SignInModal from "./SignInModal";
import { signOut } from "../utils/logInAndOut";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Rick and Morty Dictionary"
    };
  }

  handleSignOut = e => {
    e.preventDefault();
    signOut();
  };

  render = () => {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
          <div className="container">
            <a href="/" className="navbar-brand">
              {this.state.name}
            </a>
            <div className="navbar-nav ml-auto">
              {localStorage.getItem("x-auth") ? (
                <React.Fragment>
                  <button>View Favorites</button>
                  <span className="welcome">
                    Welcome {localStorage.getItem("firstname")}!
                  </span>
                  <button onClick={this.handleSignOut}>Logout</button>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <SignUpModal />
                  <SignInModal />
                </React.Fragment>
              )}
            </div>
          </div>
        </nav>
      </div>
    );
  };
}

export default Header;
