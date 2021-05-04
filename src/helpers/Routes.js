import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddAuthor from '../views/AddAuthor';
import Authors from '../views/Authors';
import Home from '../views/Home';
import SingleAuthor from '../views/SingleAuthor';

// The PrivateRoute function is creating a private route and returing the specified route based on the props
// We specify the specific props we want to use in the routeChecker and pass the rest with the spread
const PrivateRoute = ({ component: Component, user, ...rest }) => {
  // when we call this function in the return, it is looking for an argument. `props` here is taco.
  const routeChecker = (remainder) => (user
    ? (<Component {...remainder} user={user} />)
    : (<Redirect to={{ pathname: '/', state: { from: remainder.location } }} />));
    // this render method is one we can use instead of component. Since the components are being dynamically created, we use render. Read the docs for more info: https://reactrouter.com/web/api/Route/render-func
  // Just like in the routes if we want the dynamically rendered component to have access to the Router props, we have to pass `props` as an argument.
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  user: PropTypes.any
};

function Routes({ authors, setAuthors, user }) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home}/>
        <PrivateRoute
        exact path='/authors'
        component={() => <Authors authors={authors}
        user={user}
        setAuthors={setAuthors}/>}
        />
        <PrivateRoute
        path='/authors/:firebaseKey'
        component={SingleAuthor}
        user={user}
        />
        <PrivateRoute
        path='/add-author'
        component={() => <AddAuthor setAuthors={setAuthors}/>}
        user={user}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  authors: PropTypes.array.isRequired,
  setAuthors: PropTypes.func.isRequired,
  user: PropTypes.any
};

export default Routes;
