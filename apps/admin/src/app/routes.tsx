import {Route, Switch} from "react-router-dom";
import Layout from "./Layout";
import Home from "./home";
import UsersHome from "./pages/users";

export default function AppRoutes() {
  return (
    <Switch>
      <Route exact path={['/', '/users']}>
        <Layout>
          <Route exact path="/" component={() => <Home/>}/>
          <Route path="/users" component={() => <UsersHome/>}/>
        </Layout>
      </Route>
    </Switch>
  );
}
