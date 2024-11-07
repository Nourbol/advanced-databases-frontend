import {ProductPreview} from "../../types/product.ts";
import {ProductPreviewCard} from "../product/ProductPreviewCard.tsx";
import './RecommendationList.css';

type PropsType = {
    products: ProductPreview[];
    onProductClick: (product: ProductPreview) => void;
};

export const RecommendationList = ({ products, onProductClick }: PropsType) => {
    return (
        <div className="recommendation-list-container">
            <p>Recommended products</p>
            <div className="recommendation-list">
                {products.map(product => (
                    <ProductPreviewCard key={product.id} product={product} onClick={onProductClick} />
                ))}
            </div>
        </div>
    );
}