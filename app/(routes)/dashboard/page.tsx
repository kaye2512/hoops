import NavBar from "@/app/(routes)/dashboard/_components/NavBar";
import Header from "./_components/header";
import TopSeling from "./_components/top-selling";
import OurPartner from "./_components/our-partern";
import Deal from "./_components/deal";
import CarouselProduct from "./_components/carousel-product";
import TrustPartner from "./_components/trust-partner";
import Footer from "./_components/footer";

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
      <Footer />
    </div>
  );
}
