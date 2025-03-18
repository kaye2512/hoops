import Image from "next/image";
export default function SommaryBagCart() {
  return (
    <div className="flex justify-between w-full">
      <div className="flex gap-2">
        <div>
          <Image
            src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="bag"
            width={100}
            height={100}
          />
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-[#1D1D1F]">Rf293</p>
          <p className="text-sm text-[#1D1D1F]">North wolf bag</p>
          <div className="flex flex-col gap-1">
            <p className="text-xs text-[#1D1D1F]">Height</p>
            <p className="text-xs text-[#1D1D1F]">Color</p>
            <p className="text-xs text-[#1D1D1F]">Composition</p>
          </div>
        </div>
      </div>
      <div>bonjour</div>
    </div>
  );
}
