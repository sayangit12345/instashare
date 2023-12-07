import "./App.css";
import Login from "./Login";
import Home from "./Home";
import UserProfile from "./UserProfile";
import MyProfile from "./MyProfile";
import { Route, Switch, BrowserRouter } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Home} />
      <Route exact path="/users/:userId" component={UserProfile} />
      <Route exact path="/my-profile" component={MyProfile} />
    </Switch>
  </BrowserRouter>
);

export default App;
