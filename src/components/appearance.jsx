import React, { Component } from "react";
import sun from "./../images/sun.svg";
import moon from "./../images/moon.svg";
import "./../css/index.css";

class Appearance extends Component {
  state = {};
  render() {
    return (
      <button
        aria-label="Activate Dark Mode"
        title="Toggle Dark Mode"
        aria-pressed="false"
        onClick="toggleTheme(this)"
        class="dark-mode-toggle"
      >
        <span class="sun">
          <img
            alt="sun icon that represents light mode"
            width="35px"
            src={sun}
          />
        </span>
        <span class="moon">
          <img alt="moon icon to represent dark mode" width="25px" src={moon} />
        </span>
      </button>
    );
  }
}

export default Appearance;
