import CarouselProduct from "./dashboard/_components/carousel-product";
import Deal from "./dashboard/_components/deal";
import NavBar from "./dashboard/_components/NavBar";
import Header from "./dashboard/_components/header";

import OurPartner from "./dashboard/_components/our-partern";
import TopSeling from "./dashboard/_components/top-selling";
import TrustPartner from "./dashboard/_components/trust-partner";

export default function Page() {
  return (
    <div>
      <NavBar />
      <Header />
      <TopSeling />
      <OurPartner />
      <Deal />
      <CarouselProduct />
      <TrustPartner />
    </div>
  );
}
