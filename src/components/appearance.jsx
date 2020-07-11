import React, { Component } from "react";
import sun from "./../images/sun.svg";
import moon from "./../images/moon.svg";
import "./../css/index.css";

class Appearance extends Component {
  state = {};

  constructor() {
    super();

    const localPreference = window.localStorage.getItem("prefers-theme");
    if (localPreference) {
      console.log(localPreference);
      if (localPreference === "light") document.body.classList.remove("dark");
      else document.body.classList.add("dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      console.log(localPreference);
      document.body.classList.add("dark");
    }
  }

  toggleTheme = (toggleButton) => {
    if (document.body.classList.contains("dark")) {
      document.body.classList.add("fade-in-light");
      document.body.classList.remove("dark");
      document.body.classList.remove("fade-in-dark");
      window.localStorage.setItem("prefers-theme", "light");
      if (toggleButton) {
        // toggleButton.setAttribute("aria-pressed", false);
        // toggleButton.setAttribute("aria-label", "Activate Dark Mode");
      }
    } else {
      document.body.classList.add("fade-in-dark");
      document.body.classList.add("dark");
      document.body.classList.remove("fade-in-light");
      window.localStorage.setItem("prefers-theme", "dark");
      if (toggleButton) {
        // toggleButton.setAttribute("aria-pressed", true);
        // toggleButton.setAttribute("aria-label", "Activate Light Mode");
      }
    }
  };

  render() {
    return (
      <button
        aria-label="Activate Dark Mode"
        title="Toggle Dark Mode"
        aria-pressed="false"
        onClick={this.toggleTheme(this)}
        className="dark-mode-toggle"
      >
        <span className="sun">
          <img
            alt="sun icon that represents light mode"
            width="35px"
            src={sun}
          />
        </span>
        <span className="moon">
          <img alt="moon icon to represent dark mode" width="25px" src={moon} />
        </span>
      </button>
    );
  }
}

export default Appearance;
