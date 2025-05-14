import NavBar from "@/components/navbar/NavBar";
import CarouselProduct from "../../components/carousel-product";
import Deal from "../../components/deal";

import Header from "../../components/section/header";

import TopSeling from "../../components/section/top-selling";
import TrustPartner from "@/components/section/trust-partner";
import OurPartner from "@/components/section/our-partern";

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
