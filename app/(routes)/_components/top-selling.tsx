import Card from "@/components/card";
import Container from "@/components/container";

export const data = [
  {
    id: 1,
    name: "Top Selling",
    new: true,
    url: "https://images.unsplash.com/photo-1618354691551-44de113f0164?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 100,
  },
  {
    id: 2,
    name: "Top Selling",
    new: true,
    url: "https://images.unsplash.com/photo-1618354691551-44de113f0164?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 200,
  },
  {
    id: 3,
    name: "Top Selling",
    new: false,
    url: "https://images.unsplash.com/photo-1618354691551-44de113f0164?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 200,
  },
  {
    id: 4,
    name: "Top Selling",
    new: true,
    url: "https://images.unsplash.com/photo-1618354691551-44de113f0164?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 300,
  },
  {
    id: 5,
    name: "Top Selling",
    new: true,
    url: "https://images.unsplash.com/photo-1618354691551-44de113f0164?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 400,
  },
];

export default function TopSeling() {
  return (
    <>
      <div>
        <h1 className="my-6 text-center font-bold text-2xl">Top Selling</h1>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2">
            {data.map((name, index) => (
              <Card
                key={index}
                name={name.name}
                price={name.price}
                url={name.url}
                new={name.new}
              />
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}
