"use client";

import fetchCategories from "@/actions/get-categories";
import { CardProduct } from "@/components/card-product";
import Container from "@/components/container";
import { useQuery } from "@tanstack/react-query";
import { Category } from "@/types";
import { useRouter } from "next/navigation";

export default function ProductCard() {
  const router = useRouter();
  const {
    data: categories,
    isLoading,
    error,
  } = useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading products: {error.message}</div>;
  }

  if (!categories || categories.length === 0) {
    return <div>No categories found</div>;
  }

  const handleCategoryClick = (productId: string) => {
    router.push(`/product/${productId}`);
  };

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 mt-[90px]">
        {categories.map((category) => (
          <div key={category.id}>
            {category.products && category.products.length > 0 ? (
              category.products.map((product) => (
                <div
                  key={product.id}
                  onClick={() => handleCategoryClick(category.id)}
                  className="cursor-pointer"
                >
                  <CardProduct
                    name={category.name}
                    image={product.images[0]?.url || ""}
                    category={`${category.name} collection`}
                    seller={`${product.price} €`}
                  />
                </div>
              ))
            ) : (
              <div
                onClick={() => handleCategoryClick(category.id)}
                className="cursor-pointer"
              >
                <CardProduct
                  name={category.name}
                  image=""
                  category={`${category.name} collection`}
                  seller="Coming soon"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </Container>
  );
}
