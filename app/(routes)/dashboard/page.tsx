import Header from "./_components/header";
import TopSeling from "./_components/top-selling";
import OurPartner from "./_components/our-partern";
import Deal from "./_components/deal";
import CarouselProduct from "./_components/carousel-product";
import TrustPartner from "./_components/trust-partner";
import NavBar from "./_components/NavBar";

export default async function Home() {
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
