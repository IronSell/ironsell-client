import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import * as USER_HELPERS from "../utils/userToken";

const ProtectedPage = () => {
  const [user, setUser] = useState([]);
 
  useEffect(() => {
    axios
      .get('http://localhost:5005/api/users/profile/session', {
        headers: {
          Authorization: USER_HELPERS.getUserToken()
        },
      })
      .then((response) => {
        console.log(response.session);
        setUser(response.data.showUser);
      });
  }, []);

  return (
    <div>
      <h1>User Page</h1>
    </div>
  );
};

export default ProtectedPage;
