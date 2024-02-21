import {fetchProduct} from "@/app/lib/database";
import {formatCurrency} from "@/app/lib/utils";
import {ArrowUturnLeftIcon} from "@heroicons/react/20/solid";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import AddToCartButton from "@/app/components/addToCartBtn";
export default async function BurgerPage({ params }: { params: { burger: string } }) {
    const product = await fetchProduct(params.burger);
    const formattedPrice = formatCurrency(product.price);

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-20 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:max-w-lg lg:self-end">
                    <div className="mt-4">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{product.name}</h1>
                    </div>
                    <section aria-labelledby="information-heading" className="mt-4">
                        <h2 id="information-heading" className="sr-only">Product information</h2>
                        <div className="flex items-center">
                            <p className="text-lg text-gray-900 sm:text-xl">{formattedPrice}</p>
                        </div>
                        <div className="mt-4 space-y-6">
                            <p className="text-base text-gray-500">{product.description}</p>
                        </div>
                    </section>
                    <div className="mt-10 flex space-x-4">
                        <Link
                            href={"/"}
                            className="relative border border-gray-200 inline-flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-base font-semibold text-zinc-800 shadow-sm hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                        >
                            <ArrowUturnLeftIcon
                                className="-ml-0.5 h-5 w-5 text-zinc-800"
                                aria-hidden="true"
                            />
                            Back to List
                        </Link>
                        <AddToCartButton productId={product.id} productName={product.name} />
                    </div>
                </div>
                {/* Product image */}
                <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg relative w-full h-[500px]">
                        <Image
                            style={{
                                objectFit: "cover",
                            }}
                            fill={true}
                            sizes="(max-width: 768px) 30vw, (max-width: 1200px) 30vw, 30vw"
                            alt={product.slug}
                            src={`/products/${product.image}.jpeg`}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}


