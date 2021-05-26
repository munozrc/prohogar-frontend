import GreetingsSection from "../layouts/GreetingsSection";
import PageDashboard from "../layouts/PageDashboard";
import loadDataUser from "../utils/loadDataUser";
import { LINK_CLIENT } from "../settings";
import { Redirect, Route, Switch } from "react-router";

export default function ClientDashboard() {
  const { name, photo } = loadDataUser();
  return (
    <PageDashboard
      photo={photo}
      name={name}
      type={"Cliente"}
      links={LINK_CLIENT}
    >
      <Switch>
        <Route exact path={LINK_CLIENT[0].path}>
          <GreetingsSection name={name} />
        </Route>
        <Route exact path={LINK_CLIENT[1].path}>
          <h1>Servicios</h1>
        </Route>
        <Route render={() => <Redirect to={"/dashboard"} />} />
      </Switch>
    </PageDashboard>
  );
}
