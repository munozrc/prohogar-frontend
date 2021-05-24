import PageDashboard from "../layouts/PageDashboard";
import { loadDataUser } from "../utils/saveDataUser";

export default function ClientDashboard() {
  const { name, photo } = loadDataUser();
  return (
    <PageDashboard photo={photo} name={name} type={"Cliente"}>
      Conten
    </PageDashboard>
  );
}
