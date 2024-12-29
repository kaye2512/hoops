import headerImage from "@/./public/images/headers.jpg";

export default function Header() {
  return (
    <div
      className="w-full h-[300px] bg-cover bg-center bg-no-repeat sm:h-[400px] md:h-[500px] lg:h-[600px]"
      style={{ backgroundImage: `url(${headerImage.src})` }}
    >
      <div className="flex flex-col justify-center h-full pl-8 md:pl-16 lg:pl-24">
        <div className="flex flex-col w-60 ">
          <span className="text-[#1F2937] text-sm font-bold text-center">
            support
          </span>
          <h1 className="text-[#1F2937] text-2xl font-bold">
            Explore a World of Style and Comfort
          </h1>
          <p className="text-[#69696A] text-sm font-bold max-w-[500px]">
            Explore our handpicked selection of the latest men&apos;s fashion
            trends. From classic suits to casual essentials, we have you
            covered.
          </p>
        </div>
      </div>
    </div>
  );
}
