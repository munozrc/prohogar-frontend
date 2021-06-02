import { Redirect, Route, Switch } from "react-router-dom";

// Custome Components
import PageDashboard from "../../layouts/PageDashboard";

// Utils and settings data
import loadDataUser from "../../utils/loadDataUser";
import { LINK_PRO } from "../../settings";

// Local Custom Components
import RequestsTab from "./RequestsTab";
import GreetingTab from "./GreetingTab";

export default function ProDashboard() {
  const { name, photo, category } = loadDataUser();
  return (
    <PageDashboard photo={photo} name={name} type={category} links={LINK_PRO}>
      <Switch>
        <Route exact path={"/dashboard"} component={GreetingTab} />
        <Route exact path={"/dashboard/requests"} component={RequestsTab} />
        <Route render={() => <Redirect to={"/dashboard"} />} />
      </Switch>
    </PageDashboard>
  );
}