import NavBar from "../dashboard/_components/NavBar";
import TrustPartner from "../dashboard/_components/trust-partner";
import HeaderHomePage from "./_components/header-home-page";

export default async function Home() {
  return (
    <div>
      <NavBar />
      <HeaderHomePage />
      <TrustPartner />
    </div>
  );
}
