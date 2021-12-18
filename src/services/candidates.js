import axios from 'axios';

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
});

// GET candidate profile
export function getCandidate(id) {
  return candidatesService
    .get('/' + id)
    .then(successStatus)
    .catch(internalServerError);
}

export function getCandidates() {
  return candidatesService
    .get('/')
    .then(successStatus)
    .catch(internalServerError);
}
