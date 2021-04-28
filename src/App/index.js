import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase';
import firebaseConfig from '../helpers/apiKeys';
import Routes from '../helpers/Routes';
import NavBar from '../Components/NavBar';
import { getAuthors } from '../helpers/data/authorData';

firebase.initializeApp(firebaseConfig);

function App() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getAuthors().then((response) => setAuthors(response));
  }, []);

  return (
   <>
   <Router>
    <NavBar />
    <Routes authors={authors}
    setAuthors={setAuthors}
    />
   </Router>
   </>
  );
}

export default App;
