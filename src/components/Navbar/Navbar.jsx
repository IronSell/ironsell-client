import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import * as PATHS from '../../utils/paths';
import { Button } from 'antd';
import { useContext } from 'react';
import { ThemeContext } from './../../context/theme.context';

// import * as CONSTS from "../../utils/consts";

const Navbar = (props) => {
  const { user, handleLogout, handleLogoutCompany } = props;

  const { theme, toggleTheme } = useContext(ThemeContext);

  console.log(user)

  return (
    <nav className={`Navbar ${theme}`}>
      {/*  <nav > */}
      <Link to={PATHS.HOMEPAGE} className='nav__projectName'>
        IronJob
      </Link>
      <Link to={PATHS.OFFERSJOBPAGE} className='OfferAndCompanyColor'>
        Offers
      </Link>
      <Link to={PATHS.COMPANIESPAGE} className='OfferAndCompanyColor'>
        Companies
      </Link>
      <Link to={PATHS.CANDIDATESPAGE} className='OfferAndCompanyColor'>
        Candidates
      </Link>

      <div className='nav__authLinks'>
        {user ? (
          <>
            {user.isCompany ? (
              <>
              <Link to={PATHS.COMPANYPROFILE} className='OfferAndCompanyColor'>
                {user.name}
              </Link>
              <Button type='primary' onClick={handleLogoutCompany}>
                Logout
              </Button>
              </>
            ) : (
              <>
              <Link to={PATHS.USERPROFILE} className='authLink'>
                {user.name} {user.lastName}
              </Link>
              <Button type='primary' onClick={handleLogout}>
                Logout
              </Button>
              </>
            )}
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
      {/* -----dark mode */}
      <button className='theme-btn' onClick={toggleTheme}>
        {theme === 'light' ? 'dark ' : 'light '}
      </button>
    </nav>
  );
};

export default Navbar;
