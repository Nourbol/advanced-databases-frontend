import {DetailedProductCard} from "../components/product/DetailedProductCard.tsx";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Product} from "../types/product.ts";
import {getProduct, likeProduct, unlikeProduct} from "../service/products.ts";

export const ProductPage = () => {
    const navigate = useNavigate();
    const { productId } = useParams();
    const [product, setProduct] = useState<Product | null>(null);

    const handleLike = () => {
        if (productId) {
            likeProduct(productId);
        }
    };

    const handleUnlike = () => {
        if (productId) {
            unlikeProduct(productId);
        }
    };

    const handleCategoryClick = (categoryId: string) => navigate(`/category/${categoryId}`);

    useEffect(() => {
        if (productId) {
            getProduct(productId).then(response => setProduct(response));
        }
    }, [productId]);

    return (
        <div className="page">
            {product && (
                <DetailedProductCard
                    {...product}
                    onCategoryClick={handleCategoryClick}
                    onLike={handleLike}
                    onUnlike={handleUnlike}
                />
            )}
        </div>
    );
};
