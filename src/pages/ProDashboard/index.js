import { useEffect } from "react";
import io from "socket.io-client";
import { Redirect, Route, Switch } from "react-router-dom";

// Custome Components
import PageDashboard from "../../layouts/PageDashboard";

// Utils and settings data
import loadDataUser from "../../utils/loadDataUser";
import { LINK_PRO, URL_SERVER } from "../../settings";

// Local Custom Components
import RequestsTab from "./RequestsTab";
import GreetingTab from "./GreetingTab";
import useProfessional from "../../hooks/useProfessional";

let socket;

export default function ProDashboard() {
  const { id, name, photo, category } = loadDataUser();

  const { connectUser } = useProfessional();

  useEffect(() => {
    socket = io(URL_SERVER.replace("api", ""), { autoConnect: false });
    socket.auth = { id };
    socket.connect();
    return () => {
      socket.emit("disconnectUser", id);
      connectUser([]);
    };
  }, [id, connectUser]);

  useEffect(() => {
    socket.on("connectUser", ({ users }) => {
      console.log({ users });
      connectUser(users);
    });

    socket.on("disconnectUser", ({ users }) => {
      console.log({ users });
      connectUser(users);
    });
  });

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
