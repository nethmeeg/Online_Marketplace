import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { clearCurrentProfile } from './actions/profileActions';
import { clearCurrentShop } from './actions/shopActions';

import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import store from './store';
import PrivateRoute from './components/common/PrivateRoute';

import Header from './components/layout/Header';
import SignUp from './screens/SignUp';
import LogIn from './screens/LogIn';
import Home from './screens/Home';
import Footer from './components/layout/Footer';
import HomeDecor from './screens/HomeDecor';
import Jewellery from './screens/Jewellery';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './screens/CreateProfile';
import CreateShop from './screens/CreateShop';
import EditProfile from './screens/EditProfile';
import AddItem from './screens/AddItem';
import Profile from './components/profile/Profile';
import Shop from './components/shop/Shop';
import Shops from './components/shops/Shops';
import Items from './components/items/Items';
import Posts from './components/posts/Posts';
import Post from './components/post/Post';
import NotFound from './components/not-found/NotFound';


// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    store.dispatch(clearCurrentProfile());
    //Clear current Shop
    store.dispatch(clearCurrentShop());
    // Redirect to login
    window.location.href = '/logIn';
  }
}



class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div>
        <Router>
          <div>
            <Header/>
            <Route exact path = "/" component ={Home}/>
            <Route exact path = "/logIn" component={LogIn} /> 
            <Route exact path = "/signUp" component={SignUp} /> 
            <Route exact path = "/homeDecor" component = {HomeDecor}/> 
            <Route exact path = "/jewellery" component = {Jewellery}/> 
            <Route exact path = "/shops" component={Shops} />
            <Route exact path = "/items" component={Items} />
            <Route exact path = "/profile/:handle" component={Profile} />
            <Route exact path = "/shop/:shopName" component={Shop} />
    
         
            <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/create-profile"
                  component={CreateProfile}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/edit-profile"
                  component={EditProfile}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/create-shop"
                  component={CreateShop}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/add-item"
                  component={AddItem}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/post-feed"
                  component={Posts}
                />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/post/:id" component={Post} />
              </Switch>
              <Route exact path="/not-found" component={NotFound} />
            <Footer/>
          </div>
          </Router>
         
      </div>
      </Provider>
    );
  }
}

export default App;