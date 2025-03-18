import NavBar from "../dashboard/_components/NavBar";
import TrustPartner from "../dashboard/_components/trust-partner";
import BagSection from "./_components/bag-section";

export default async function Cart() {
  return (
    <div>
      <NavBar />
      <BagSection />
      <TrustPartner />
    </div>
  );
}
