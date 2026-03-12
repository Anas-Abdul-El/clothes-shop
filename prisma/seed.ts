import { prisma } from "../src/lib/prisma"

async function seed() {

    //     // Categories
    //     const shoes = await prisma.category.create({
    //         data: {
    //             name: "Shoes"
    //         }
    //     })

    //     const sneakers = await prisma.category.create({
    //         data: {
    //             name: "Sneakers"
    //         }
    //     })

    //     // Collection
    //     const summerCollection = await prisma.collection.create({
    //         data: {
    //             name: "ramadan collection",
    //             description: "Best summer shoes",
    //             image: "/images/collections/ramadan.jpg"
    //         }
    //     })

    //     // Products
    //     const product1 = await prisma.product.create({
    //         data: {
    //             name: "Air Street Sneaker",
    //             description: "Comfortable everyday sneaker",
    //             price: 120,
    //             compareAtPrice: 150,
    //             isBestSeller: true,
    //             categoryId: sneakers.id,
    //             collectionId: summerCollection.id,

    //             images: {
    //                 create: [
    //                     { url: "/images/products/product-1.jpg" },
    //                     { url: "/images/products/product-2.jpg" }
    //                 ]
    //             },

    //             variants: {
    //                 create: [
    //                     { color: "Black", size: "42", stock: 10 },
    //                     { color: "White", size: "41", stock: 6 }
    //                 ]
    //             }
    //         }
    //     })

    //     const product2 = await prisma.product.create({
    //         data: {
    //             name: "Urban Runner",
    //             description: "Lightweight running shoe",
    //             price: 95,
    //             compareAtPrice: 120,
    //             isFeatured: true,
    //             categoryId: shoes.id,

    //             images: {
    //                 create: [
    //                     { url: "/images/products/product-3.jpg" }
    //                 ]
    //             },

    //             variants: {
    //                 create: [
    //                     { color: "Blue", size: "43", stock: 8 },
    //                     { color: "Gray", size: "42", stock: 5 }
    //                 ]
    //             }
    //         }
    //     })

    //     console.log("Seed completed")

}

seed()
    .catch((e) => {
        console.error(e)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
