import React from "react";
import Image, {StaticImageData} from "next/image";
import {fetchProducts} from "@/app/lib/database";

import blackBurger from "@/public/products/black-burger.jpeg"
import baconEgg from "@/public/products/bacon-egg.jpeg"
import burgerA from "@/public/products/burger-a.jpeg"
import chickenBurger from "@/public/products/chicken-burger.jpeg"
import fries from "@/public/products/fries.jpeg"
import mushroomBurger from "@/public/products/mushroom-burger.jpeg"
import Link from "next/link";


export default async function Page() {
  const products = await fetchProducts();
  const burgerMap:{ [key: string]: StaticImageData } = {
      "black-burger": blackBurger,
      "bacon-egg":baconEgg,
      "burger-a": burgerA,
      "chicken-burger": chickenBurger,
      "fries":fries,
      "mushroom-burger": mushroomBurger
  }

  return (
      <div className="bg-white">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0">
                  <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Burgers</h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600 hidden sm:block">
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
                              <div className="aspect-[3/2] w-full rounded-2xl object-cover overflow-clip relative">
                                 <Image
                                   priority={idx === 0}
                                   style={{
                                     objectFit: "cover",
                                   }}
                                   fill={true}
                                   sizes="(max-width: 768px) 30vw, (max-width: 1200px) 30vw, 30vw"
                                   alt={product.slug}
                                   src={burgerMap[product.image]}
                                 />
                              </div>
                          </Link>
                          <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{product.name}</h3>
                          <p className="text-base leading-7 text-gray-600">{product.description}</p>
                      </li>
                  ))}
              </ul>
          </div>
      </div>
  );
}
