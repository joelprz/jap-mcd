import React from "react";
import Image from "next/image";
import { fetchProducts } from "../../../lib/database";

export default async function Page() {
  const products = await fetchProducts();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-3xl w-full">
        <div
          style={{
            display: "grid",
            gridGap: "8px",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, auto))",
          }}
        >
          {products &&
            products.map((product, idx) => {
              return (
                <div key={product.id} className="min-h-[400px] relative">
                  <Image
                    priority={idx === 0}
                    style={{
                      objectFit: "cover",
                    }}
                    fill={true}
                    sizes="(max-width: 768px) 30vw, (max-width: 1200px) 30vw, 30vw"
                    alt={product.slug}
                    src={`/products/${product.image}.jpeg`}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </main>
  );
}
