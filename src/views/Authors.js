import React from 'react';
import PropTypes from 'prop-types';
import AddAuthorForm from '../Components/AddAuthorForm';
import AuthorCard from '../Components/AuthorCard';

function Authors({ authors, setAuthors }) {
  return (
    <>
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
    </>
  );
}

Authors.propTypes = {
  authors: PropTypes.array.isRequired,
  setAuthors: PropTypes.func.isRequired
};

export default Authors;
