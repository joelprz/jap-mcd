import React from "react";
import {fetchProducts} from "@/app/lib/database";
import ProductsList from "@/app/components/productsList";

export default async function Page() {
  const products = await fetchProducts();

  return (
      <div className="mb-36 sm:mb-32">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 pb-8">
              <div className="mx-auto max-w-2xl lg:mx-0">
                  <h1 className="text-3xl font-bold tracking-tight dark:text-gray-200 text-gray-900 sm:text-4xl">Burgers</h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600 hidden sm:block dark:text-gray-200">
                      Some additional text to whet appetites.
                  </p>
              </div>
              <ProductsList products={products}/>
          </div>
      </div>
  );
}
