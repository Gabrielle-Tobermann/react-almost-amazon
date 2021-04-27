import React, { useState } from 'react';
import {
  Card,
  CardText,
  CardTitle,
  Button
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteAuthors } from '../helpers/data/authorData';
import AddAuthorForm from './AddAuthorForm';

const AuthorCard = ({
  firstName,
  lastName,
  email,
  setAuthors,
  firebaseKey
}) => {
  const [editing, setEditing] = useState(false);
  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteAuthors(firebaseKey).then((authorArray) => setAuthors(authorArray));
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
  <Card body>
  <CardTitle tag="h5">Name: {firstName} {lastName}</CardTitle>
  <CardText>Email: {email}</CardText>
  <Button onClick={() => handleClick('delete')}>Delete Author</Button>
  <Button onClick={() => handleClick('edit')}>{editing ? 'Close form' : 'Edit Author'}</Button>
  {
    editing && <AddAuthorForm
    firstName= {firstName}
    lastName={lastName}
    email={email}
    setAuthors={setAuthors}
    firebaseKey={firebaseKey}
    />
  }
</Card>
  );
};

AuthorCard.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  firebaseKey: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  setAuthors: PropTypes.func
};

export default AuthorCard;
