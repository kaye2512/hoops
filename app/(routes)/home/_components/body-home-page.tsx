import Container from "@/components/container";
import AppSideBar from "@/components/app-side-bar";

export default function BodyHomePage() {
  return (
    <Container>
      <div className="flex gap-4 md:gap-6 lg:gap-8">
        <AppSideBar />
        <div className="">Body product</div>
      </div>
    </Container>
  );
}
