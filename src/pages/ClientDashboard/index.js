import { Redirect, Route, Switch } from "react-router";

// Custome Components
import PageDashboard from "../../layouts/PageDashboard";

// Utils and settings data
import loadDataUser from "../../utils/loadDataUser";
import { LINK_CLIENT } from "../../settings";

// Local Custom Components
import ServicesTab from "./ServicesTab";
import GreetingTab from "./GreetingTab";

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
        <Route exact path={"/dashboard"} component={GreetingTab} />
        <Route exact path={"/dashboard/services"} component={ServicesTab} />
        <Route render={() => <Redirect to={"/dashboard"} />} />
      </Switch>
    </PageDashboard>
  );
}
