import { Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "../pages/LogIn";
import Signup from "../pages/Signup";
import UserPage from "../pages/UserPage";
import * as PATHS from "../utils/paths";
import OffersJobPage from "../pages/OffersJobPage";
import CompaniesPage from "../pages/CompaniesPage";
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
      path: PATHS.USERPAGE,
      element: user ? (
        <UserPage {...props} />
      ) : (
        <Navigate to={PATHS.LOGINPAGE} replace />
      ),
    },
  ];
};

export default routes;
