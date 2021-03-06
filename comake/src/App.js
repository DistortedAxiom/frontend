import React from "react";
import "./App.css";
import PostFile from "./PostFile";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//components
import Login from "./components/LoginPage";
import Register from "./components/RegisterPage";
import { Posts } from "./components/PostsPage";
import PrivateRoute from "./components/PrivateRoute";
import { Edit } from "./components/EditPost";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>{/* <Route path="/" component={Login} /> */}</Switch>

        <header>
          <nav>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/posts">Local Issues</Link>
          </nav>
        </header>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/posts/:id" component={Edit}/>
        <PrivateRoute exact path="/posts" component={PostFile} />
        <PrivateRoute exact path="/edit_posts" component={Edit} />
      </div>
    </Router>
  );
}

export default App;
