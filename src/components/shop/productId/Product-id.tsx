import ProductIdWrapper from "./Product-id-wrapper"

type ProductProps = {
    params: Promise<{ productId: string }>
}

export default async function ProductId({
    params
}: ProductProps
) {

    const { productId } = await params


    return <ProductIdWrapper productId={productId} />
}