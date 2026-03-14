"use server"

import { prisma } from "@/lib/prisma"

export const createTest = async () => {
    // Categories
    const shoes = await prisma.category.findMany({
        where: {
            name: "Shoes"
        }
    })

    // const sneakers = await prisma.category.findMany({
    //     where: {
    //         name: "Sneakers"
    //     }
    // })

    // Collection
    // const summerCollection = await prisma.collection.create({
    //     data: {
    //         name: "ramadan collection",
    //         description: "Best summer shoes",
    //         image: "/images/collections/ramadan.jpg"
    //     }
    // })

    const dressesCollection = await prisma.collection.create({
        data: {
            name: "Dresses",
            description: "Elegant and stylish dresses for every occasion",
            image: "/images/collections/dresses.jpg"
        }
    })

    const dailyWearCollection = await prisma.collection.create({
        data: {
            name: "Daily Wear",
            description: "Comfortable and casual outfits for everyday use",
            image: "/images/collections/daily-wear.jpg"
        }
    })

    const setsCollection = await prisma.collection.create({
        data: {
            name: "Sets",
            description: "Matching sets for a complete and coordinated look",
            image: "/images/collections/sets.jpg"
        }
    })

    // Products
    // const product1 = await prisma.product.create({
    //     data: {
    //         name: "Air Street Sneaker",
    //         description: "Comfortable everyday sneaker",
    //         price: 120,
    //         compareAtPrice: 150,
    //         isBestSeller: true,
    //         categoryId: sneakers.id,
    //         collectionId: summerCollection.id,

    //         images: {
    //             create: [
    //                 { url: "/images/products/product-1.jpg" },
    //             ]
    //         },

    //         variants: {
    //             create: [
    //                 { color: "Black", size: "42", stock: 10 },
    //                 { color: "White", size: "41", stock: 6 }
    //             ]
    //         }
    //     }
    // })

    // const product2 = await prisma.product.create({
    //     data: {
    //         name: "Urban Runner",
    //         description: "Lightweight running shoe",
    //         price: 95,
    //         compareAtPrice: 120,
    //         isFeatured: true,
    //         categoryId: shoes.id,
    //         collectionId: dressesCollection.id,

    //         images: {
    //             create: [
    //                 { url: "/images/products/product-3.jpg" }
    //             ]
    //         },

    //         variants: {
    //             create: [
    //                 { color: "Blue", size: "43", stock: 8 },
    //                 { color: "Gray", size: "42", stock: 5 }
    //             ]
    //         }
    //     }
    // })

    const product3 = await prisma.product.create({
        data: {
            name: "Street Glide",
            description: "Casual everyday sneaker",
            price: 85,
            compareAtPrice: 110,
            isFeatured: false,
            categoryId: shoes[0].id,
            collectionId: dailyWearCollection.id,

            images: {
                create: [
                    { url: "/images/products/product-4.jpg" }
                ]
            },

            variants: {
                create: [
                    { color: "Red", size: "41", stock: 6 },
                    { color: "White", size: "44", stock: 4 }
                ]
            }
        }
    })

    const product4 = await prisma.product.create({
        data: {
            name: "Trail Blazer",
            description: "Durable outdoor walking shoe",
            price: 110,
            compareAtPrice: 140,
            isFeatured: true,
            categoryId: shoes[0].id,
            collectionId: setsCollection.id,

            images: {
                create: [
                    { url: "/images/products/product-5.jpg" }
                ]
            },

            variants: {
                create: [
                    { color: "Black", size: "40", stock: 10 },
                    { color: "Green", size: "45", stock: 3 }
                ]
            }
        }
    })

    console.log("Seed completed")
}