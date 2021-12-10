import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import * as PATHS from '../../utils/paths'
// import * as CONSTS from "../../utils/consts";

const Navbar = (props) => {
  const { user, handleLogout} = props
  return (
    <nav>
      <Link to={PATHS.HOMEPAGE} className="nav__projectName">
        IronJob
      </Link>
      <Link to={PATHS.OFFERSJOBPAGE}>Offers</Link>
      <Link to={PATHS.COMPANIESPAGE}>Companies</Link>

      <div className="nav__authLinks">
        {user ? (
          <>
            <Link to={PATHS.USERPROFILE} className="authLink">
              {user.name} {user.lastName}
            </Link>
            <button className="nav-logoutbtn" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to={PATHS.SIGNUPPAGE} className="authLink">
              Signup
            </Link>
            <Link to={PATHS.LOGINPAGE} className="authLink">
              Log In
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar
