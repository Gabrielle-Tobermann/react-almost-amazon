import React, { useState } from 'react';
import { createAuthors } from '../helpers/data/authorData';

export default function AddAuthorForm() {
  const [author, setAuthor] = useState({
    first_name: '',
    last_name: '',
    email: '',
    favorite: false
  });

  const handleInputChange = (e) => {
    setAuthor((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.name === 'favorite' ? e.target.checked : e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createAuthors(author);
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
         name='first_name'
         type='text'
         placeholder='First Name'
         value={author.first_name}
         onChange={handleInputChange}
         ></input>
           <label>Last Name:</label>
         <input
         name='last_name'
         type='text'
         placeholder='Last Name'
         value={author.last_name}
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
}
