import React from "react";
import Image, {StaticImageData} from "next/image";

import { fetchProducts } from "../../../lib/database";
import Header from "@/app/components/pageHeader";

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
    <main className="flex min-h-screen flex-col items-center justify-between px-24">
      <Header headerText="Burgers" />
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
                  <Link href={`/order/products/burgers/${product.slug}`}>
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
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </main>
  );
}
