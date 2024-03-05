"use client";
import { useCartStore } from "@/store";
import { Product } from "@/typings/productTypings";
import React from "react";
import { Button } from "./ui/button";

type Props = {
    product: Product;
};

function RemoveFromCart({ product }: Props) {
    const removeFromCart = useCartStore((state) => state.removeFromCart);
    const handleRemove = () => {
        console.log("Removing from cart: ", product.meta.sku);
        removeFromCart(product);
    };
    return (
        <Button className="bg-walmart hover:bg-walmart/50" onClick={handleRemove}>
            -
        </Button>
    );
}

export default RemoveFromCart;