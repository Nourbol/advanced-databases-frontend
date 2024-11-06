import {ProductPreview} from "../../types/product.ts";
import {ProductPreviewCard} from "../product/ProductPreviewCard.tsx";
import './Catalog.css';

type PropsType = {
    products: ProductPreview[];
    onProductClick?: (product: ProductPreview) => void;
};

export const Catalog = ({products, onProductClick = () => {}}: PropsType) => (
    <div className="catalog-container">
        {products.map((product) => (
            <ProductPreviewCard key={product.id} product={product} onClick={onProductClick} />
        ))}
    </div>
);
