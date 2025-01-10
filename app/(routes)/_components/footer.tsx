import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SendHorizontal } from "lucide-react";

export default function Footer() {
  return (
    <Container className="my-12 ">
      <div className="flex  items-center justify-between">
        <div className="flex flex-col gap-4">
          <h2 className="text-[#1F2937] text-3xl">Luxe</h2>
          <p className="text-[#4B5563] text-sm">Copyright © 2021 Luxe</p>
          <p className="text-[#4B5563] text-sm">All rights reserved</p>
        </div>
        <div className="flex flex-col gap-4 ">
          <h2 className="text-[#1F2937] text-3xl">Compagny</h2>
          <p className="text-[#4B5563] text-sm">Blog</p>
          <p className="text-[#4B5563] text-sm">pricing</p>
          <p className="text-[#4B5563] text-sm">about us</p>
          <p className="text-[#4B5563] text-sm">contact us</p>
          <p className="text-[#4B5563] text-sm">testimonials</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-[#4B5563] text-sm">Legal policy</p>
          <p className="text-[#4B5563] text-sm">Status policy</p>
          <p className="text-[#4B5563] text-sm">Private policy</p>
          <p className="text-[#4B5563] text-sm">Terms of service</p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-[#1F2937] text-xl">Get Updates</h2>
          <div className="relative flex">
            <Input type="email" placeholder="Enter your email" className="" />
            <Button
              variant={"outline"}
              className="absolute right-0 top-0 h-full border-none hover:bg-transparent"
            >
              <SendHorizontal className="" />
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
