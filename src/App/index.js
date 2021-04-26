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
      <AddAuthorForm/>
      {authors.map((authorInfo) => (
         <AuthorCard
         key={authorInfo.firebaseKey}
         firstName={authorInfo.first_name}
         lastName={authorInfo.last_name}
         email={authorInfo.email}
         handleClick={() => console.warn(`${authorInfo.email}`)}
         />
      ))}
    </div>
  );
}

export default App;
