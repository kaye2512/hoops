import NavBar from "@/./app/(routes)/_components/NavBar";
import Header from "./_components/header";
import TopSeling from "./_components/top-selling";
import OurPartner from "./_components/our-partern";
import Deal from "./_components/deal";
import CarouselProduct from "./_components/carousel-product";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Header />
      <TopSeling />
      <OurPartner />
      <Deal />
      <CarouselProduct />
    </div>
  );
}
