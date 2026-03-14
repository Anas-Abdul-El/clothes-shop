

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
    id: string;
    image: string;
    isBestSeller: string;
    isFeatured: string;
    name: string;
    price: string;
    size: string[];
    updatedAt: string;
}

export type collectionType = {
    id: number;
    name: string;
    description: string | null;
    image: string;
}