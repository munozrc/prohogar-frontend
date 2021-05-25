import { Redirect, Route, Switch } from "react-router-dom";
import PageDashboard from "../layouts/PageDashboard";
import loadDataUser from "../utils/loadDataUser";
import GreetingsSection from "../layouts/GreetingsSection";
import { LINK_PRO } from "../settings";

export default function ProDashboard() {
  const { name, photo, category } = loadDataUser();
  return (
    <PageDashboard photo={photo} name={name} type={category} links={LINK_PRO}>
      <Switch>
        <Route exact path={LINK_PRO[0].path}>
          <GreetingsSection name={name} />
        </Route>
        <Route exact path={LINK_PRO[1].path}>
          <h1>Services</h1>
        </Route>
        <Route render={() => <Redirect to={"/dashboard"} />} />
      </Switch>
    </PageDashboard>
  );
}
