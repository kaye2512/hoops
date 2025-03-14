import CardProduct from "@/components/card-product";
import Container from "@/components/container";

export const data = [
  {
    id: 1,
    name: "Men's",
    category: "Men's Collection",
    image:
      "https://images.unsplash.com/photo-1618354691551-44de113f0164?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    seller: "Browse over 100+ apparels",
  },
  {
    id: 2,
    name: "Women's",
    category: "Women's Collection",
    image:
      "https://images.unsplash.com/photo-1618354691551-44de113f0164?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    seller: "Browse over 150+ apparels",
  },
  {
    id: 3,
    name: "Kids",
    category: "Kids Collection",
    image:
      "https://images.unsplash.com/photo-1618354691551-44de113f0164?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    seller: "Browse over 50+ apparels",
  },
  {
    id: 4,
    name: "Men's",
    category: "Men's Collection",
    image:
      "https://images.unsplash.com/photo-1618354691551-44de113f0164?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    seller: "Browse over 100+ apparels",
  },
  {
    id: 5,
    name: "Women's",
    category: "Women's Collection",
    image:
      "https://images.unsplash.com/photo-1618354691551-44de113f0164?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    seller: "Browse over 150+ apparels",
  },
  {
    id: 6,
    name: "Kids",
    category: "Kids Collection",
    image:
      "https://images.unsplash.com/photo-1618354691551-44de113f0164?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    seller: "Browse over 50+ apparels",
  },
  {
    id: 7,
    name: "Men's",
    category: "Men's Collection",
    image:
      "https://images.unsplash.com/photo-1618354691551-44de113f0164?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    seller: "Browse over 100+ apparels",
  },
  {
    id: 8,
    name: "Women's",
    category: "Women's Collection   ",
    image:
      "https://images.unsplash.com/photo-1618354691551-44de113f0164?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    seller: "Browse over 150+ apparels",
  },
  {
    id: 9,
    name: "Kids",
    category: "Kids Collection",
    image:
      "https://images.unsplash.com/photo-1618354691551-44de113f0164?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    seller: "Browse over 50+ apparels",
  },
];

export default function ProductCard() {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 mt-[90px]  ">
        {data.map((item, index) => (
          <CardProduct
            key={index}
            name={item.name}
            image={item.image}
            category={item.category}
            seller={item.seller}
          />
        ))}
      </div>
    </Container>
  );
}
