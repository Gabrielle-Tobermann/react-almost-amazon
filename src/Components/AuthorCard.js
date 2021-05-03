import React, { useState } from 'react';
import {
  Card,
  CardText,
  CardTitle,
  Button
} from 'reactstrap';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
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
  const history = useHistory();
  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteAuthors(firebaseKey).then((authorArray) => setAuthors(authorArray));
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      case 'view':
        history.push(`/authors/${firebaseKey}`);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
  <Card body>
  <CardTitle tag="h5">Name: {firstName} {lastName}</CardTitle>
  <CardText>Email: {email}</CardText>
  <Button color="danger" onClick={() => handleClick('delete')}>Delete Author</Button>
  <Button color="warning" onClick={() => handleClick('view')}>View Author</Button>
  <Button color="info" onClick={() => handleClick('edit')}>{editing ? 'Close form' : 'Edit Author'}</Button>
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
