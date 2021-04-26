import React from 'react';
import {
  Card,
  CardText,
  CardTitle,
  Button
} from 'reactstrap';
import PropTypes from 'prop-types';

const AuthorCard = ({
  firstName,
  lastName,
  email,
  handleClick
}) => (
  <Card body>
  <CardTitle tag="h5">Name: {firstName} {lastName}</CardTitle>
  <CardText>Email: {email}</CardText>
  {handleClick ? <Button onClick={handleClick}>Print Author</Button> : ''}
</Card>
);

AuthorCard.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  handleClick: PropTypes.func
};

export default AuthorCard;
