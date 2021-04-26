import 'firebase/auth';
import axios from 'axios';
import firebaseConfig from '../apiKeys';

// API CALLS FOR AUTHORS
const dbUrl = firebaseConfig.databaseURL;
// GET AUTHORS
const getAuthors = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/authors.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});
// DELETE AUTHOR
const deleteAuthors = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/authors/${firebaseKey}.json`)
    .then(() => getAuthors(uid).then((authors) => resolve(authors)))
    .catch((error) => reject(error));
});

const favoriteAuthors = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/authors.json?orderBy="favorite"&equalTo=true`)
    .then((response) => {
      const favoriteAuthorsArr = Object.values(response.data);
      resolve(favoriteAuthorsArr);
    }).catch((error) => reject(error));
});
// CREATE AUTHOR
const createAuthors = (authorObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/authors.json`, authorObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/authors/${response.data.name}.json`, body)
        .then(() => {
          getAuthors().then((authors) => resolve(authors));
        });
      console.warn(response.data.name);
    }).catch((error) => reject(error));
});

// GET SINGLE AUTHOR
const getSingleAuthor = (authorId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/authors/${authorId}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// UPDATE AUTHOR
// SEARCH AUTHORS
export {
  getAuthors, createAuthors, deleteAuthors, favoriteAuthors, getSingleAuthor
};
