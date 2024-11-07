import {ProductPreview} from "../../types/product.ts";
import {ProductPreviewCard} from "../product/ProductPreviewCard.tsx";
import './Catalog.css';
import {Button} from "../button";

type PropsType = {
    products: ProductPreview[];
    onProductClick?: (product: ProductPreview) => void;
    onLoadMore?: () => void;
};

export const Catalog = ({products, onProductClick = () => {}, onLoadMore = () => {}}: PropsType) => (
    <>
        <div className="catalog-container">
            {products.map((product) => (
                <ProductPreviewCard key={product.id} product={product} onClick={onProductClick}/>
            ))}
        </div>
        <br />
        <Button onClick={onLoadMore} className="button text-button">Load more</Button>
    </>
);
