import PageDashboard from "../layouts/PageDashboard";
import loadDataUser from "../utils/loadDataUser";
import GreetingsSection from "../layouts/GreetingsSection";
import { LINK_PRO } from "../settings";

export default function ProDashboard() {
  const { name, photo, category } = loadDataUser();
  return (
    <PageDashboard photo={photo} name={name} type={category} links={LINK_PRO}>
      <GreetingsSection name={name} />
    </PageDashboard>
  );
}
