// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <>
    <nav className="nav-container">
      <ul className="list-container">
        <li className="list-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li className="list-item">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
      </ul>
    </nav>
  </>
)

export default Header
