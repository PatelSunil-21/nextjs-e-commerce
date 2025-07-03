import { NextResponse } from "next/server";
import { Product } from "../models/Product";

// add product

export const createProduct = async (request) => {
    const body = await request.json();
    const newProduct = await Product.create(body);
    return NextResponse.json({ message: "Product added successfully", newProduct }, { status: 201 });
}

export const getProducts = async () => {
    const product = await Product.find();
    return NextResponse.json({ message: "Product fetched successfully", success: true, product }, { status: 200 });
}