import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={'/'} className="left brand-logo">
            NOTES
          </Link>

          <ul className="right">
            <li>
              <Link to="/notes">Saved Notes</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header
