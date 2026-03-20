
export type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    collection: string;
    image: string;
    compareAtPrice: number;
    isBestSeller: number;
    isFeatured: number;
    createdAt: string;
    updatedAt: string;
}

export type ProductWithAllValues = {
    collection: string;
    color: string[];
    compareAtPrice: string;
    createdAt: string;
    description: string;
    id: number;
    image: string;
    isBestSeller: string;
    isFeatured: string;
    name: string;
    price: number;
    size: string[];
    updatedAt: string;
}

export type CollectionType = {
    id: number;
    name: string;
    description: string | null;
    image: string;
}

export type ProductInfo = {
    productId: number,
    quantity: number,
    size: string,
    color: string,
    price: number,
}

export type CartItem = {
    id: string;
    productId: number;
    url: string;
    color: string;
    size: string;
    price: number;
    quantity: number;
    cartId: string;
    name: string;
    priceForOne: number;
}