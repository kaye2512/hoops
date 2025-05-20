import HeaderHomePage from "./_components/header-home-page";
import BodyHomePage from "./_components/body-home-page";
import NavBar from "@/components/navbar/NavBar";
import TrustPartner from "@/components/section/trust-partner";

export default function ProductPage() {
  return (
    <div>
      <NavBar />
      <HeaderHomePage />
      <BodyHomePage />
      <TrustPartner />
    </div>
  );
}
