import { NextResponse } from "next/server";
import { Cart } from "../models/Cart";

export const addToCart = async (request) => {
    const body = await request.json();
    const newCart = await Cart.create(body);
    return NextResponse.json({ message: "Item added successfully", success: true, cartItem: newCart }, { status: 201 });
}
export const getCartItems = async () => {
   const cartItems = await Cart.find();
    return NextResponse.json({ message: "Fetch all cart items successfully", success: true, cartItems }, { status: 201 });
}
export const clearCart = async () => {
    await Cart.deleteMany({});
    return NextResponse.json({ message: "Cart cleared successfully", success: true }, { status: 201 });
}