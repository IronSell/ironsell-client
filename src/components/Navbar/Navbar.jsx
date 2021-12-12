import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import * as PATHS from '../../utils/paths';
// import * as CONSTS from "../../utils/consts";

const Navbar = (props) => {
  const { user, handleLogout } = props;
  return (
    <nav>
      <Link to={PATHS.HOMEPAGE} className='nav__projectName'>
        IronJob
      </Link>
      <Link to={PATHS.OFFERSJOBPAGE} className='OfferAndCompanyColor'>
        Offers
      </Link>
      <Link to={PATHS.COMPANIESPAGE} className='OfferAndCompanyColor'>
        Companies
      </Link>

      <div className='nav__authLinks'>
        {user ? (
          <>
            {user.isCompany ? (
              <Link to={PATHS.COMPANYPROFILE} className='authlink'>
                {user.name}
              </Link>
            ) : (
              <Link to={PATHS.USERPROFILE} className='authLink'>
                {user.name} {user.lastName}
              </Link>
            )}
            <button className='nav-logoutbtn' onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to={PATHS.LOGINCOMPANYPAGE} className='authLink'>
              Company Access
            </Link>
            <Link to={PATHS.LOGINCANDIDATEPAGE} className='authLink'>
              Candidates Access
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
