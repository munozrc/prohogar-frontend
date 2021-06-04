import { useEffect } from "react";
import io from "socket.io-client";
import { Redirect, Route, Switch } from "react-router";

// Custome Components
import PageDashboard from "../../layouts/PageDashboard";

// Utils and settings data
import loadDataUser from "../../utils/loadDataUser";
import { LINK_CLIENT, URL_SERVER } from "../../settings";

// Local Custom Components
import ServicesTab from "./ServicesTab";
import GreetingTab from "./GreetingTab";
import useClient from "../../hooks/useClient";

let socket;

export default function ClientDashboard() {
  const { id, name, photo } = loadDataUser();
  const { connectUser } = useClient();

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
