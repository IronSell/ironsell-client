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

const companiesService = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/companies`,
});

export function getCompany(id) {
  return companiesService
    .get('/' + id)
    .then(successStatus)
    .catch(internalServerError);
}

export function getCompanies() {
  return companiesService.get().then(successStatus).catch(internalServerError);
}
