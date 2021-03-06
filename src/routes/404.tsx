import { Switch, Route } from "react-router-dom";
import NoPage from "../pages/404";

export function NoPageRoute() {
  return (
    <Switch>
      <Route>
        <NoPage />
      </Route>
    </Switch>
  );
}

export { NoPageRoute as default } from "./404";