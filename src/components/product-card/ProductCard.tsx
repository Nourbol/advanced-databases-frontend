import {ProductPreview} from "../../types/product.ts";
import {Button} from "../button";
import cartIcon from '../../assets/cart-icon.svg'
import './ProductCard.css'

type PropsType = {
    product: ProductPreview;
    onClick?: (product: ProductPreview) => void;
};

export const ProductCard = ({product, onClick = () => {}}: PropsType) => (
    <div className="product-card">
        <img src={product.imageUrl}
             alt={product.title} className="product-image"
             onClick={() => onClick(product)}
        />
        <div className="product-card-text-container">
            <p className="product-price" onClick={() => onClick(product)}>{product.price} KZT</p>
            <p className="product-title">{product.title}</p>
        </div>
        <Button>
            <img src={cartIcon} alt="cart-icon"/>
            <p className="cart-button-text">Add to cart</p>
        </Button>
    </div>
);
