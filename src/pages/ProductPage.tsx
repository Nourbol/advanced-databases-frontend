import {DetailedProductCard} from "../components/product/DetailedProductCard.tsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Product} from "../types/product.ts";
import {getProduct} from "../service/products.ts";

export const ProductPage = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        if (productId) {
            getProduct(productId).then(response => setProduct(response));
        }
    }, [productId]);

    if (!product) {
        return null;
    }

    return (
        <div className="page">
            <DetailedProductCard {...product} />
        </div>
    );
};
