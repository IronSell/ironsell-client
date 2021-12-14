import axios from 'axios';

import * as USER_HELPERS from '../utils/userToken';

function internalServerError(err) {
  if (err.response && err.response.data && err.response.data.errorMessage) {
    return {
      status: false,
      errorMessage: err.response.data.errorMessage,
    };
  }
  return {
    status: false,
    errorMessage: 'Internal server error. Please check your server',
  };
}

function successStatus(res) {
  return {
    status: true,
    data: res.data,
  };
}

const candidatesService = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/candidates`,
}); // --> http://localhost:5005/api/candidates
// creates a basic url for every request in this file

// GET candidate profile
export function getCompany(id) {
  return candidatesService
    .get('/' + id)
    .then(successStatus)
    .catch(internalServerError);
}
