"use client";
import {Product} from "@/app/lib/definitions";
import useLocalCartData from "@/app/hooks/useLocalCartData";
import CartProduct from "@/app/components/cartProduct";
export default function CartProducts({products}:{products:Product[]}) {
    const shoppingCart= useLocalCartData();
    const cartKeys = Object.keys(shoppingCart);

    type FindProductType = Product | undefined;

    const findProduct = (id:string):FindProductType => {
        const selectedProduct = products.find(product => product.id === id);
        return selectedProduct;
    }

    return (
        <ul role="list" className="divide-y divide-gray-200 border-b border-t border-gray-200">
            {cartKeys.map(cartKey => {
                return <CartProduct key={cartKey} product={findProduct(cartKey)} amount={shoppingCart[cartKey]} />;
            })}
        </ul>
    )
}