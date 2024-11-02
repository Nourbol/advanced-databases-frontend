import {ProductPreview} from "../../types/product.ts";
import {ProductCard} from "../product-card/ProductCard.tsx";
import './Catalog.css';

type PropsType = {
    products: ProductPreview[];
};

export const Catalog = ({products}: PropsType) => (
    <div className="catalog-container">
        {products.map((product) => (
            <ProductCard key={product.id} product={product}/>
        ))}
    </div>
);
