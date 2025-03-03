// import React from 'react'

import { NavLink, Outlet } from "react-router-dom";
import "./App.css"

const App = () => {
  return (
    <div className="App">
      <nav>
        <h1>My blogs</h1>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}

export default App