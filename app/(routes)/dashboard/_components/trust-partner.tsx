import Container from "@/components/container";
import GoogleLogo from "./google-logo";
import DribbleLogo from "./dribble-logo";
import AmazonLogo from "./amazon-logo";
import LinkedInLogo from "./linkedin-logo";
import BlackBerryLogo from "./blackberry-logo";
import MicrosoftLogo from "./microsoft-logo";

export default function TrustPartner() {
  return (
    <Container className="my-12 ">
      <div className="flex flex-col items-center justify-center mb-4">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
          Our Trusted Partners
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-[#4B5563] text-sm md:text-lg lg:text-base">
          We just got featured in the following magazines and it has been the
          most incredible journey. We work with the best fashion magazines
          across the world
        </p>
      </div>
      <div className="mt-12 flex justify-between ">
        <div className="w-[186px] h-[136px] flex items-center justify-center bg-[#F9FAFB] ">
          <GoogleLogo />
        </div>
        <div className="w-[186px] h-[136px] flex items-center justify-center bg-[#F9FAFB] ">
          <DribbleLogo />
        </div>
        <div className="w-[186px] h-[136px] flex items-center justify-center bg-[#F9FAFB] ">
          <AmazonLogo />
        </div>
        <div className="w-[186px] h-[136px] flex items-center justify-center bg-[#F9FAFB] ">
          <LinkedInLogo />
        </div>
        <div className="w-[186px] h-[136px] flex items-center justify-center bg-[#F9FAFB]">
          <BlackBerryLogo />
        </div>
        <div className="w-[186px] h-[136px] flex items-center justify-center bg-[#F9FAFB]">
          <MicrosoftLogo />
        </div>
      </div>
    </Container>
  );
}
