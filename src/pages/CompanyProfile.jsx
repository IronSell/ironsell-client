import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import * as USER_HELPERS from '../utils/userToken';

const CompanyProfile = (props) => {
    const { authenticate, user } = props;
    useEffect(() => {
      axios
        .get(`http://localhost:5005/api/companies/${user._id}`, {
          headers: {
            Authorization: USER_HELPERS.getUserToken(),
          },
        })
        .then((response) => {
          console.log(response.data);
          authenticate(response.data.showUser);
        });
    }, []);
  
    return (
      <div>
        <h1>User CompanyProfile</h1>
        <p>
          {user.name} {user.lastName}
        </p>
      </div>
    );
  };
  
  export default CompanyProfile;