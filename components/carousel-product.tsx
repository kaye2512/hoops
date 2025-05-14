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
    <Container className="my-12 h-auto md:h-[918px]">
      <div className="bg-[#F3F4F6] py-8 md:py-12">
        <div className="flex justify-center items-center">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
            Collections
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center py-6 md:py-12 gap-4 md:gap-8">
          <div className="w-full md:w-[187px] h-auto md:h-[452px] flex flex-col items-center md:items-start">
            <p>her Closet</p>
            <div className="w-full md:w-[187px] h-[200px] md:h-[340px] relative">
              <Image
                src={product2}
                alt="console"
                fill
                sizes="(max-width: 768px) 100vw, 187px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="hidden md:flex flex-1 items-end justify-center pb-4">
              <ArrowLeftButton />
            </div>
          </div>

          <div className="w-full md:w-[624px] text-center md:text-left">
            <p>Men classic</p>
            <div className="w-full h-[300px] md:h-[618px] relative">
              <Image
                src={product1}
                alt="console"
                fill
                sizes="(max-width: 768px) 100vw, 624px"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          <div className="w-full md:w-[187px] h-auto md:h-[452px] flex flex-col items-center md:items-start">
            <p>OutDoor Fashion</p>
            <div className="w-full md:w-[187px] h-[200px] md:h-[340px] relative">
              <Image
                src={product3}
                alt="console"
                fill
                sizes="(max-width: 768px) 100vw, 187px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="hidden md:flex flex-1 items-end justify-center pb-4">
              <ArrowRightButton />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
