
import { Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginCandidatePage from "../pages/LogInCandidatePage";
import LoginCompanyPage from '../pages/LoginCompanyPage';
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
      path: PATHS.SIGNUPCANDIDATEPAGE,
      element: <Signup {...props} />,
    },
    {
      path: PATHS.SIGNUPCOMPANYPAGE,
      element: <Signup {...props} />,
    },
    {
      path: PATHS.LOGINCANDIDATEPAGE,
      element: <LoginCandidatePage {...props} />,
    },
    {
      path: PATHS.LOGINCOMPANYPAGE,
      element: <LoginCompanyPage {...props} />,
    },
    {
      path: PATHS.USERPROFILE,
      element: user ? (
        <UserProfile {...props} />
      ) : (
        <Navigate to={PATHS.HOMEPAGE} replace />
      ),
    },
  ];
};

export default routes;
