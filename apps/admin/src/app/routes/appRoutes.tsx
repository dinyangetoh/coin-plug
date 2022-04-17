import {Route, Switch} from "react-router-dom";
import AppLayout from "../AppLayout";
import Home from "../home";
import UsersHome from "../pages/users";

export default function AppRoutes() {
  return (
    <Switch>
      <Route exact path={['/', '/users']}>
        <AppLayout>
          <Route exact path="/" component={() => <Home/>}/>
          <Route path="/users" component={() => <UsersHome/>}/>
        </AppLayout>
      </Route>
    </Switch>
  );
}
