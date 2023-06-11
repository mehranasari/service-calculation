import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link, Redirect } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import NewReceipt from './components/receipt/NewReceipt';
import ListReceipt from './components/receipt/ListReceipt';
import Login from './components/auth/Login';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';
import AddExperience from './components/profile-forms/AddExperience';
import AddEducation from './components/profile-forms/AddEducation';
import Posts from './components/posts/Posts';
import Post from './components/post/Post';
import PrivateRoute from './components/routing/PrivateRoute';


//Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './action/auth';
import setAuthToken from './utils/setAuthToken';

import './App.css';
import './css/style.scss';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = ({ isAuthenticated }) => {

  useEffect(() => {
    store.dispatch(loadUser(), []);
    if (!isAuthenticated) {
      return <Redirect to="/newReceipt" />
    }
  });

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Redirect exact from="/" to="/newReceipt" />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path='/newReceipt' component={NewReceipt} />
              <Route exact path='/listReceipt' component={ListReceipt} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/profiles' component={Profiles} />
              <Route exact path='/profile/:id' component={Profile} />
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
              <PrivateRoute exact path='/create-profile' component={CreateProfile} />
              <PrivateRoute exact path='/edit-profile' component={EditProfile} />
              <PrivateRoute exact path='/add-experience' component={AddExperience} />
              <PrivateRoute exact path='/add-education' component={AddEducation} />
              <PrivateRoute exact path='/posts' component={Posts} />
              <PrivateRoute exact path='/posts/:id' component={Post} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  )
};

export default App;
