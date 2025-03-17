import ProductCard from "@/components/product/product-card";

const data = [
  {
    id: 1,
    name: "Product Name",
    price: 999,
    url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A piece of short description",
    access: true,
    accessText: "New in",
  },
  {
    id: 2,
    name: "Product Name",
    price: 999,
    url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A piece of short description",
    access: false,
    accessText: "Member access",
  },
  {
    id: 3,
    name: "Product Name",
    price: 999,
    url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A piece of short description",
    access: true,
    accessText: "New in",
  },
  {
    id: 4,
    name: "Product Name",
    price: 999,
    url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A piece of short description",
    access: false,
    accessText: "Member access",
  },
  {
    id: 5,
    name: "Product Name",
    price: 999,
    url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A piece of short description",
    access: true,
    accessText: "Trending Now",
  },
  {
    id: 6,
    name: "Product Name",
    price: 999,
    url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A piece of short description",
    access: true,
    accessText: "10 items left",
  },
];

export default function HomeProduct() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 ">
      {data.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          url={product.url}
          description={product.description}
          access={product.access}
          accessText={product.accessText}
        />
      ))}
    </div>
  );
}
