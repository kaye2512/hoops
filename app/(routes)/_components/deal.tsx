import Container from "@/components/container";

export default function Deal() {
  return (
    <Container className="flex flex-col gap-8 md:flex-row md:gap-8 md:mt-8 lg:mt-12 lg:gap-32 lg:flex-row">
      <div className="w-32 h-32 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-red-500">
        <div></div>
      </div>
      <div className="w-32 h-32 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-blue-500"></div>
    </Container>
  );
}
