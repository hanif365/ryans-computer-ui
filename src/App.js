import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Admin from "./components/Admin/Admin";
import CheckOut from "./components/CheckOut/CheckOut";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Orders from "./components/Orders/Orders";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";


export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/orders">
            <Orders />
          </PrivateRoute>
          <PrivateRoute path="/products/:productId">
            <CheckOut />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
