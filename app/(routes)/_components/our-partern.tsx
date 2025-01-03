import Container from "@/components/container";
import VogueLogo from "./vogue-logo";
import BritishLogo from "./british-logo";

export default function OurPartner() {
  return (
    <Container>
      <div className="p-4 sm:p-6 md:p-8">
        <h1 className="text-center font-bold text-2xl">Our Partner</h1>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div>
              <VogueLogo />
            </div>
            <p>
              “ It was an absolute pleasure working with them. They are the
              best, Highly Recommended! ”
            </p>
          </div>
          <div className="">
            <p>
              “Love this! Does exactly what it is supposed to do and so far
              without any real issues.”
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <BritishLogo />
            </div>
            <p>
              “Thanks. I am fully satisfied and would recommend buying from them
              as they have made my life so much easier :) ”{" "}
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
