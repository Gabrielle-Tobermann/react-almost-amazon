import React from 'react';
import firebase from 'firebase';
import firebaseConfig from '../helpers/apiKeys';
import AddAuthorForm from '../Components/AddAuthorForm';
import './App.scss';

function App() {
  firebase.initializeApp(firebaseConfig);

  return (
    <div className='App'>
      <AddAuthorForm/>
    </div>
  );
}

export default App;
