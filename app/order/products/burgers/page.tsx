import React from "react";
import Image from "next/image";
import {fetchProducts} from "@/app/lib/database";

import Link from "next/link";

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
              <ul
                  role="list"
                  className="mx-auto mt-10 sm:mt-14 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
              >
                  {products.map((product, idx) => (
                      <li key={product.name} >
                          <Link href={`/order/products/burgers/${product.slug}`}>
                              <div className="aspect-[3/2] hover:drop-shadow-burger w-full rounded-2xl object-cover overflow-clip relative">
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
                          </Link>
                          <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-gray-200">{product.name}</h3>
                          <p className="text-base leading-7 text-gray-600 dark:text-gray-200">{product.description}</p>
                      </li>
                  ))}
              </ul>
          </div>
      </div>
  );
}
