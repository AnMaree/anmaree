import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import Resume from '../downloads/AnMaree_Resume.pdf';

class MainNav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName='active'>Work</NavLink>
          </li>
          <li>
            <NavLink to="/bio" activeClassName='active'>About Me</NavLink>
          </li>
          <li>
            <a href={Resume} target="_blank"><span className="small">⬇</span> Resume</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default MainNav