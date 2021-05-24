import PageDashboard from "../layouts/PageDashboard";
import loadDataUser from "../utils/loadDataUser";

export default function ProDashboard() {
  const { name, photo, category } = loadDataUser();
  return (
    <PageDashboard photo={photo} name={name} type={category}>
      Conten
    </PageDashboard>
  );
}
