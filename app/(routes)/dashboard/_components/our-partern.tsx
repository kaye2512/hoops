import Container from "@/components/container";
import VogueLogo from "../../../../components/logo/vogue-logo";
import BritishLogo from "../../../../components/logo/british-logo";

export default function OurPartner() {
  return (
    <Container>
      <div className="">
        <div className="flex mt-4 justify-center items-center md:justify-start md:items-start md:mt-8 lg:justify-start lg:items-start lg:mt-12">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl ">
            Our Partner
          </h1>
        </div>

        <div className="flex mt-4 gap-8 md:flex-row md:gap-8 md:mt-8 lg:mt-12 lg:gap-32 lg:flex-row">
          <div className="flex  gap-2 md:flex-row md:gap-2">
            <div>
              <VogueLogo />
            </div>
            <p>
              &ldquo;It was an absolute pleasure working with them. They are the
              best, Highly Recommended!&rdquo;
            </p>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-center">
              &ldquo;Love this! Does exactly what it is supposed to do and so
              far without any real issues.&rdquo;
            </p>
          </div>
          <div className="flex gap-2 md:flex-row md:gap-2">
            <div>
              <BritishLogo />
            </div>
            <p>
              &ldquo;Thanks. I am fully satisfied and would recommend buying
              from them as they have made my life so much easier :)&rdquo;
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
