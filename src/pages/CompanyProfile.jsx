import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import * as USER_HELPERS from '../utils/userToken';
import CompanyView from '../components/CompanyProfile/CompanyView';

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
  console.log(user)
  return (
    <div>
      <CompanyView user={user} />
    </div>
  );
};

export default CompanyProfile;
