import GreetingsSection from "../layouts/GreetingsSection";
import PageDashboard from "../layouts/PageDashboard";
import loadDataUser from "../utils/loadDataUser";
import { LINK_CLIENT } from "../settings";

export default function ClientDashboard() {
  const { name, photo } = loadDataUser();
  return (
    <PageDashboard
      photo={photo}
      name={name}
      type={"Cliente"}
      links={LINK_CLIENT}
    >
      <GreetingsSection name={name} />
    </PageDashboard>
  );
}
