// import axios from 'axios';

// function internalServerError(err) {
//   if (err.response && err.response.data && err.response.data.errorMessage) {
//     return {
//       status: false,
//       errorMessage: err.response.data.errorMessage,
//     };
//   }
//   return {
//     status: false,
//     errorMessage: 'Internal server error. Please check your server',
//   };
// }

// function successStatus(res) {
//   return {
//     status: true,
//     data: res.data,
//   };
// }

// // creates a basic url for every request in this file
// const getOffersService = axios.create({
//   baseURL: `${process.env.REACT_APP_SERVER_URL}/offers`,
// });

// export function getOffers(jobOffers) {
//   return getOffersService
//     .get(`jobOffers`, {
//       headers: {

//       },
//     })
//     .then(successStatus)
//     .catch(internalServerError);
// }
