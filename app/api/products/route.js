import connectDB from "@/app/utils/dbConfig";
import { createProduct, getProducts } from "@/app/controllers/product";

export async function POST(request){
    await connectDB();
    return createProduct(request);
}
export async function GET(){
    await connectDB();
    return getProducts();
}