import './DetailedProductCard.css'
import {Button} from "../button";
import {LikeButton} from "../button";
import {useState} from "react";

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
    likes: number,
    onCategoryClick?: (id: string) => void,
    onLike?: () => void,
    onUnlike?: () => void,
    liked: boolean,
};

export const DetailedProductCard =
    ({
         imageUrl,
         description,
         quantity,
         price,
         title,
         category,
         likes,
         liked,
         onCategoryClick = () => {},
         onLike = () => {},
         onUnlike = () => {},
    }: PropsType) => {
    const [isLikeButtonActive, setIsLikeButtonActive] = useState(liked);
    const [likesCounter, setLikesCounter] = useState(likes);

    const handleLike = () => {
        if (isLikeButtonActive) {
            onUnlike();
            setLikesCounter(prevState => prevState - 1);
        } else {
            onLike();
            setLikesCounter(prevState => prevState + 1);
        }
        setIsLikeButtonActive(prevState => !prevState);
    }

    return (
            <div className="detailed-product-card">
                <img src={`http://localhost:8080${imageUrl}`} alt={title} className="product-image"/>
                <div className="product-content">
                    <p className="product-title">{title} | <a
                        onClick={() => onCategoryClick(category.id)}>{category.name}</a></p>
                    <p className="product-additional-info">{quantity} left | {likesCounter} likes</p>
                    <p className="product-description">{description}</p>
                    <div className="product-action-container">
                        <p className="product-price">{price} USD</p>
                        <div className="product-action-button-container">
                            <Button className="buy-button">Buy</Button>
                            <LikeButton onClick={handleLike} isActive={isLikeButtonActive} />
                        </div>
                    </div>
                </div>
            </div>
        );
    };
