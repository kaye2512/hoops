import SommaryBagCart from "@/components/bag/sommary-bag-cart";
const data = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "North wolf bag",
    reference: "Rf293",
    height: "Height: 10 inches",
    color: "Color: Black",
    composition: "Composition: 100% calf leather",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Luxe card holder",
    reference: "Rf293",
    height: "Height: 10 inches",
    color: "Color: Black",
    composition: "Composition: 100% calf leather",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1612902377756-414b2139d5e2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "LW sneakers",
    reference: "Rf293",
    height: "Height: 10 inches",
    color: "Color: Black",
    composition: "Composition: 100% calf leather",
  },
];

export default function LeftBagSection() {
  return (
    <div className="flex flex-col gap-8 py-4">
      {data.map((item) => (
        <SommaryBagCart
          key={item.id}
          src={item.src}
          name={item.name}
          reference={item.reference}
          height={item.height}
          color={item.color}
          composition={item.composition}
        />
      ))}
    </div>
  );
}
