
import { Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "../pages/LogIn";
import UserProfile from "../pages/UserProfile";
import CompaniesPage from "../pages/CompaniesPage";
import Signup from '../pages/Signup';
import * as PATHS from '../utils/paths';
import OffersJobPage from '../pages/OffersJobPage';
import CompanyPage from '../pages/CompanyPage';
import CompanyProfile from "../pages/CompanyProfile";
const routes = (props) => {
  const { user } = props;
  return [
    {
      path: PATHS.HOMEPAGE,
      element: <HomePage {...props} />,
    },
    {
      path: PATHS.OFFERSJOBPAGE,
      element: <OffersJobPage {...props} />,
    },
    {
      path: PATHS.COMPANYPAGE,
      element: <CompanyPage {...props}/>
    },
    {
      path: PATHS.COMPANIESPAGE,
      element: <CompaniesPage {...props} />,
    },
    {
      path: PATHS.SIGNUPPAGE,
      element: <Signup {...props} />,
    },
    {
      path: PATHS.LOGINPAGE,
      element: <Login {...props} />,
    },
    {
      path: PATHS.USERPROFILE,
      element: user ? (
        <UserProfile {...props} />
      ) : (
        <Navigate to={PATHS.LOGINPAGE} replace />
      ),
    },
  ];
};

export default routes;
