import Image from "next/image";
import {Product} from "@/app/lib/definitions";
import React, {ChangeEvent, useState} from "react";
import {formatCurrency} from "@/app/lib/utils";

type FindProductType = Product | undefined;
export default function CartProduct({product, amount}:{product:FindProductType, amount: number}) {
    const [quantity, setQuantity] = useState<number | undefined>(amount);
    const formattedTotal = product?.price ? formatCurrency(product.price * amount) : 0;

    // TODO This needs to be debounced to protect against rapid clicking
    const handleQuantityUpdate = (e:ChangeEvent) => {
        const target = e.target as HTMLInputElement;
        const intValue = parseInt(target.value);
        if (Number.isInteger(intValue)) {
            setQuantity(intValue);
        }
    }

    return (
        <li key={product?.id} className="flex py-6 sm:py-10">
            <div className="flex-shrink-0 relative">
                <Image
                    style={{
                        objectFit: "cover",
                    }}
                    width={100}
                    height={100}
                    className="drop-shadow-burger h-24 w-24 rounded-lg object-cover object-center sm:h-32 sm:w-32"
                    sizes="(max-width: 768px) 10vw, (max-width: 1200px) 10vw, 10vw"
                    alt={""}
                    src={`/products/${product?.slug}.jpeg`}
                />
            </div>
            <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                <div>
                    <div className="flex justify-between sm:grid sm:grid-cols-2">
                        <div className="pr-6">
                            <h3 className="text-sm font-medium text-gray-700 hover:text-gray-800 dark:text-gray-200">{product?.name}</h3>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-200">{product?.description}</p>
                        </div>
                        <p className="text-right text-sm font-medium text-gray-900 dark:text-gray-200">{formattedTotal}</p>
                    </div>
                    <div className="mt-4 flex items-center sm:absolute sm:left-1/2 sm:top-0 sm:mt-0 sm:block">
                        <label htmlFor={`quantity-${product?.id}`} className="sr-only">
                            Quantity, {product?.name}
                        </label>
                        <input
                            id={`quantity-${product?.id}`}
                            type="number"
                            name={`quantity-${product?.id}`}
                            className="block w-16 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
                            placeholder=""
                            value={quantity}
                            min={1}
                            onChange={handleQuantityUpdate}
                        />
                        <button
                            type="button"
                            className="ml-4 text-sm font-medium text-indigo-600 hover:text-indigo-500 sm:ml-0 sm:mt-3"
                        >
                            <span>Remove</span>
                        </button>
                    </div>
                </div>


            </div>
        </li>
    )
}