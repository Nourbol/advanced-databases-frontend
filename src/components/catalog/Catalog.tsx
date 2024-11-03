import {ProductPreview} from "../../types/product.ts";
import {ProductPreviewCard} from "../product/ProductPreviewCard.tsx";
import './Catalog.css';

type PropsType = {
    products: ProductPreview[];
};

export const Catalog = ({products}: PropsType) => (
    <div className="catalog-container">
        {products.map((product) => (
            <ProductPreviewCard key={product.id} product={product}/>
        ))}
    </div>
);
