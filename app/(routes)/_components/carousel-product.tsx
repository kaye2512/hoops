import Container from "@/components/container";
import Image from "next/image";
import product1 from "@/public/images/product1.jpg";
import product2 from "@/public/images/product2.jpg";
import product3 from "@/public/images/product3.jpg";
import ArrowLeftButton from "@/components/icons/arrow-left-button";
import ArrowRightButton from "@/components/icons/arrow-right-button";

export default function CarouselProduct() {
  return (
    /* responsive carousel */
    <Container className="py-[48px] h-[918px]">
      <div className="bg-[#F3F4F6] py-12">
        <div className="flex justify-center items-center">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
            Collections
          </h1>
        </div>
        <div className="flex justify-center items-center py-12 gap-8">
          <div className="w-[187px] h-[452px] flex flex-col">
            <p>her Closet</p>
            <div className="w-[187px] h-[340px] relative">
              <Image
                src={product2}
                alt="console"
                fill
                sizes="100vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="flex-1 flex items-end justify-center pb-4">
              <ArrowLeftButton />
            </div>
          </div>
          <div>
            <p>Men classic</p>
            <div className="w-[624px] h-[618px] relative">
              <Image
                src={product1}
                alt="console"
                fill
                sizes="100vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="w-[187px] h-[452px] flex flex-col">
            <p>OutDoor Fashion</p>
            <div className="w-[187px] h-[340px] relative">
              <Image
                src={product3}
                alt="console"
                fill
                sizes="100vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="flex-1 flex items-end justify-center pb-4">
              <ArrowRightButton />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
