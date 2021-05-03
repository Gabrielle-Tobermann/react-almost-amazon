import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { createAuthors, updateAuthor } from '../helpers/data/authorData';

const AddAuthorForm = (
  {
    setAuthors,
    firstName,
    lastName,
    email,
    favorite,
    firebaseKey
  }
) => {
  const [author, setAuthor] = useState({
    firstName: firstName || '',
    lastName: lastName || '',
    email: email || '',
    favorite: favorite || false,
    firebaseKey: firebaseKey || null
  });

  const handleInputChange = (e) => {
    setAuthor((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.name === 'favorite' ? e.target.checked : e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (author.firebaseKey) {
      updateAuthor(author).then((authorArray) => setAuthors(authorArray));
    } else {
      createAuthors(author).then((authorArray) => setAuthors(authorArray));
    }
  };

  return (
    <>
    <div className='author-form'>
      <form
       id='addAuthorForm'
       autoComplete='off'
       onSubmit={handleSubmit}
       >
         <h2>New Author</h2>
         <label>First Name:</label>
         <input
         name='firstName'
         type='text'
         placeholder='First Name'
         value={author.firstName}
         onChange={handleInputChange}
         ></input>
           <label>Last Name:</label>
         <input
         name='lastName'
         type='text'
         placeholder='Last Name'
         value={author.lastName}
         onChange={handleInputChange}
         ></input>
          <label>Email:</label>
         <input
         name='email'
         type='email'
         placeholder='Email'
         value={author.email}
         onChange={handleInputChange}
         ></input>
           <label>Favorite?</label>
         <input
         name='favorite'
         type='checkbox'
         checked={author.favorite}
         onChange={handleInputChange}
         ></input>
         <button type='submit'>Submit New Author</button>
      </form>
    </div>
    </>
  );
};

AddAuthorForm.propTypes = {
  setAuthors: PropTypes.func.isRequired,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  favorite: PropTypes.bool,
  firebaseKey: PropTypes.string
};

export default AddAuthorForm;
