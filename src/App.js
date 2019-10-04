import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import Header from "./components/header/Header";
import HomePage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shopPage/ShopPage";
import Auth from "./pages/auth/Auth";

import { auth, createUserProfile } from "./firebase";

class App extends Component {
  state = {
    currentUser: null
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);

        userRef.onSnapshot(snapShot => {
          const currentUser = snapShot.data();
          this.setState({
            currentUser
          });
        });
      } else {
        this.setState({
          currentUser: userAuth
        });
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={Auth} />
        </Switch>
      </div>
    );
  }
}

export default App;
