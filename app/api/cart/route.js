import connectDB from "@/app/utils/dbConfig";
import { addToCart, clearCart, getCartItems } from "@/app/controllers/cart";

export async function POST(request) {
    await connectDB();
    return addToCart(request);
}
export async function GET(request) {
    await connectDB();
    return getCartItems();
}
export async function DELETE() {
    await connectDB();
    return clearCart();
}