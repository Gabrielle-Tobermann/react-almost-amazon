import React from 'react';
import PropTypes from 'prop-types';
import AddAuthorForm from '../Components/AddAuthorForm';

function AddAuthor({ setAuthors }) {
  return (
    <div>
      <AddAuthorForm
        setAuthors={setAuthors}
      />
    </div>
  );
}

AddAuthor.propTypes = {
  setAuthors: PropTypes.func.isRequired
};

export default AddAuthor;
