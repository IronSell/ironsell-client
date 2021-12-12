import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import * as USER_HELPERS from '../utils/userToken';

const CompanyProfile = (props) => {
  const { authenticate, user } = props;
  useEffect(() => {
    axios
      .get(`http://localhost:5005/api/companies/profile/${user._id}`, {
        headers: {
          Authorization: USER_HELPERS.getUserToken(),
        },
      })
      .then((response) => {
        authenticate(response.data.showCompany);
      });
  }, []);

  return (
    <div>
      <h1>{user.name}</h1>
      {/* <p>
        {user.name}
      </p> */}
    </div>
  );
};

export default CompanyProfile;
