"use client";
import {formatCurrency} from "@/app/lib/utils";
import Link from "next/link";
import Image from "next/image";
import React, {ChangeEvent, useState} from "react";
import {Product} from "@/app/lib/definitions";

export default function ProductsList({products}:{products:Product[]}) {
    const [search, setSearch] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(products);

    const handleSearch = (e:ChangeEvent) => {
        const target = e.target as HTMLInputElement;
        const foundProducts  = products.filter(product => {
            return product.name.toLowerCase().includes(target.value);
        })

        setFilteredProducts(foundProducts);
        setSearch(target.value);
    }
    return (
        <>
            <input value={search} onChange={handleSearch} id="search" name="search" type="search" className="input-mcd"/>
        <ul
            role="list"
            className="mx-auto mt-10 sm:mt-14 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
            {filteredProducts.map((product, idx) => {
                const formattedPrice = formatCurrency(product.price);

                return (
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
                        <p className="text-base text-gray-900 dark:text-gray-200 sm:text-lg">{formattedPrice}</p>
                        <p className="text-base leading-7 text-gray-600 dark:text-gray-200">{product.description}</p>
                    </li>
                )})}
        </ul>
        </>
    );
}