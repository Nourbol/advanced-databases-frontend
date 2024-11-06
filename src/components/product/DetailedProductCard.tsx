import './DetailedProductCard.css'
import {Button} from "../button";
import {LikeButton} from "../button";

type PropsType = {
    imageUrl: string,
    title: string,
    description: string,
    price: number,
    quantity: number,
    category: {
        id: string,
        name: string,
    },
    onCategoryClick?: (id: string) => void,
};

export const DetailedProductCard =
    ({
         imageUrl,
         description,
         quantity,
         price,
         title,
         category,
         onCategoryClick = () => {},
    }: PropsType) => {
    return (
        <div className="detailed-product-card">
            <img src={`http://localhost:8080${imageUrl}`} alt={title} className="product-image"/>
            <div className="product-content">
                <p className="product-title">{title} | <a onClick={() => onCategoryClick(category.id)}>{category.name}</a></p>
                <p className="product-additional-info">{quantity} left | 0 likes</p>
                <p className="product-description">{description}</p>
                <div className="product-action-container">
                    <p className="product-price">{price} KZT</p>
                    <div className="product-action-button-container">
                        <Button className="buy-button">Buy</Button>
                        <LikeButton />
                    </div>
                </div>
            </div>
        </div>
    );
};
