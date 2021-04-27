import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import firebaseConfig from '../helpers/apiKeys';
import AddAuthorForm from '../Components/AddAuthorForm';
import './App.scss';
import AuthorCard from '../Components/AuthorCard';
import { getAuthors } from '../helpers/data/authorData';

firebase.initializeApp(firebaseConfig);

function App() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getAuthors().then((response) => setAuthors(response));
  }, []);

  return (
    <div className='App'>
      <AddAuthorForm
      setAuthors={setAuthors}
      />
      {authors.map((authorInfo) => (
         <AuthorCard
         key={authorInfo.firebaseKey}
         firebaseKey={authorInfo.firebaseKey}
         firstName={authorInfo.firstName}
         lastName={authorInfo.lastName}
         email={authorInfo.email}
         setAuthors={setAuthors}
         />
      ))}
    </div>
  );
}

export default App;
