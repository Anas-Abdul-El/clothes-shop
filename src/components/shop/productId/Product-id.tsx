import getProductById from "../../../../server/getProductById"
import ProductIdWrapper from "./Product-id-wrapper"
import type { Product } from "@/types"

type ProductProps = {
    params: Promise<{ productId: string }>
}

export default async function ProductId({
    params
}: ProductProps
) {

    const { productId } = await params

    const product = await getProductById(productId)

    return <ProductIdWrapper product={product} />
}



