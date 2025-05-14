import NavBar from "@/components/navbar/NavBar";

import BagSection from "./_components/bag-section";
import TrustPartner from "@/components/trust-partner";

export default async function Cart() {
  return (
    <div>
      <NavBar />
      <BagSection />
      <TrustPartner />
    </div>
  );
}
