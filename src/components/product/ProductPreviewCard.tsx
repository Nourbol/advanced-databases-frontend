import {ProductPreview} from "../../types/product.ts";
import {Button} from "../button";
import cartIcon from '../../assets/cart-icon.svg'
import './ProductPreviewCard.css'

type PropsType = {
    product: ProductPreview;
    onClick?: (product: ProductPreview) => void;
};

export const ProductPreviewCard = ({product, onClick = () => {}}: PropsType) => (
    <div className="product-preview-card">
        <img src={`http://localhost:8080${product.imageUrl}`}
             alt={product.title} className="product-preview-image"
             onClick={() => onClick(product)}
        />
        <div className="product-preview-text-container">
            <p className="product-preview-price" onClick={() => onClick(product)}>{product.price.toLocaleString()} KZT</p>
            <p className="product-preview-title">{product.title}</p>
        </div>
        <Button>
            <img src={cartIcon} alt="cart-icon"/>
            <p className="buy-button-text">Buy</p>
        </Button>
    </div>
);
